const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { URL } = require("node:url");

const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;
const DATA_DIR = process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(ROOT, "data");
const GAME_IDS = new Set([
  "roblox-20", "classic-crossroads", "sword-fights-heights",
  "rocket-arena", "chaos-canyon", "work-pizza-place",
  "natural-disaster-survival", "base-wars", "apocalypse-rising",
  "murder-mystery-2", "the-quarry", "roblox-high-school",
  "jailbreak", "build-a-boat", "adopt-me",
  "world-zero", "piggy", "berry-avenue",
  "blade-ball", "dress-to-impress", "grow-a-garden"
]);
const clients = new Map();
const staticFiles = new Map([
  ["/", ["index.html", "text/html; charset=utf-8"]],
  ["/index.html", ["index.html", "text/html; charset=utf-8"]],
  ["/config.js", ["config.js", "text/javascript; charset=utf-8"]],
  ["/styles.css", ["styles.css", "text/css; charset=utf-8"]],
  ["/app.js", ["app.js", "text/javascript; charset=utf-8"]]
]);

fs.mkdirSync(DATA_DIR, { recursive: true });

function sendJson(response, status, value) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(value));
}

function roomName(value) {
  const room = String(value || "").trim().toUpperCase();
  return /^[A-Z0-9-]{3,24}$/.test(room) ? room : null;
}

function roomFile(room) {
  return path.join(DATA_DIR, `room-${room}.json`);
}

function readRoom(room) {
  const file = roomFile(room);
  if (!fs.existsSync(file)) {
    return { room, games: {}, updatedAt: null };
  }
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeRoom(state) {
  const file = roomFile(state.room);
  const temporaryFile = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(temporaryFile, JSON.stringify(state, null, 2), "utf8");
  fs.renameSync(temporaryFile, file);
}

function publish(room, state) {
  const roomClients = clients.get(room);
  if (!roomClients) return;
  const message = `event: state\ndata: ${JSON.stringify(state)}\n\n`;
  for (const response of roomClients) response.write(message);
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 8_192) {
        reject(Object.assign(new Error("İstek çok büyük."), { status: 413 }));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(Object.assign(new Error("Geçersiz JSON isteği."), { status: 400 }));
      }
    });
    request.on("error", reject);
  });
}

function handleEvents(request, response, room) {
  response.writeHead(200, {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    Connection: "keep-alive",
    "X-Accel-Buffering": "no"
  });
  response.write("retry: 3000\n\n");
  if (!clients.has(room)) clients.set(room, new Set());
  clients.get(room).add(response);
  response.write(`event: state\ndata: ${JSON.stringify(readRoom(room))}\n\n`);
  const heartbeat = setInterval(() => response.write(": heartbeat\n\n"), 20_000);

  request.on("close", () => {
    clearInterval(heartbeat);
    const roomClients = clients.get(room);
    if (!roomClients) return;
    roomClients.delete(response);
    if (roomClients.size === 0) clients.delete(room);
  });
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);

    if (url.pathname.startsWith("/api/")) {
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      response.setHeader("Access-Control-Allow-Headers", "Content-Type");
      if (request.method === "OPTIONS") {
        response.writeHead(204);
        return response.end();
      }
    }

    if (url.pathname === "/api/state" && request.method === "GET") {
      const room = roomName(url.searchParams.get("room"));
      if (!room) return sendJson(response, 400, { error: "Oda kodu 3-24 karakter olmalı." });
      return sendJson(response, 200, readRoom(room));
    }

    if (url.pathname === "/api/events" && request.method === "GET") {
      const room = roomName(url.searchParams.get("room"));
      if (!room) return sendJson(response, 400, { error: "Oda kodu 3-24 karakter olmalı." });
      return handleEvents(request, response, room);
    }

    const noteRoute = url.pathname.match(/^\/api\/notes\/([a-z0-9-]+)$/);
    if (noteRoute && request.method === "POST") {
      const gameId = noteRoute[1];
      if (!GAME_IDS.has(gameId)) return sendJson(response, 404, { error: "Oyun bulunamadı." });
      const body = await readBody(request);
      const room = roomName(body.room);
      const nickname = String(body.nickname || "").trim().slice(0, 24);
      if (!room) return sendJson(response, 400, { error: "Geçerli bir oda kodu gir." });
      if (nickname.length < 2) return sendJson(response, 400, { error: "İsim en az 2 karakter olmalı." });
      if (typeof body.note !== "string" || body.note.length > 500) {
        return sendJson(response, 400, { error: "Not en fazla 500 karakter olabilir." });
      }

      const state = readRoom(room);
      if (!state.notes || typeof state.notes !== "object") state.notes = {};
      const note = body.note.trim();
      if (note) {
        state.notes[gameId] = {
          text: note,
          updatedBy: nickname,
          updatedAt: new Date().toISOString()
        };
      } else {
        delete state.notes[gameId];
      }
      state.updatedAt = new Date().toISOString();
      writeRoom(state);
      publish(room, state);
      return sendJson(response, 200, state);
    }

    const gameRoute = url.pathname.match(/^\/api\/games\/([a-z0-9-]+)$/);
    if (gameRoute && request.method === "POST") {
      const gameId = gameRoute[1];
      if (!GAME_IDS.has(gameId)) return sendJson(response, 404, { error: "Oyun bulunamadı." });
      const body = await readBody(request);
      const room = roomName(body.room);
      const nickname = String(body.nickname || "").trim().slice(0, 24);
      if (!room) return sendJson(response, 400, { error: "Geçerli bir oda kodu gir." });
      if (nickname.length < 2) return sendJson(response, 400, { error: "İsim en az 2 karakter olmalı." });
      if (typeof body.done !== "boolean") return sendJson(response, 400, { error: "Tamamlanma durumu geçersiz." });

      const state = readRoom(room);
      state.games[gameId] = {
        done: body.done,
        updatedBy: nickname,
        updatedAt: new Date().toISOString()
      };
      state.updatedAt = state.games[gameId].updatedAt;
      writeRoom(state);
      publish(room, state);
      return sendJson(response, 200, state);
    }

    if (request.method === "GET" && staticFiles.has(url.pathname)) {
      const [fileName, contentType] = staticFiles.get(url.pathname);
      const contents = fs.readFileSync(path.join(ROOT, fileName));
      response.writeHead(200, {
        "Content-Type": contentType,
        "Cache-Control": "no-cache"
      });
      return response.end(contents);
    }

    return sendJson(response, 404, { error: "Sayfa bulunamadı." });
  } catch (error) {
    console.error("İstek işlenemedi:", error);
    if (!response.headersSent) {
      return sendJson(response, error.status || 500, {
        error: error.status ? error.message : "Sunucuda beklenmeyen bir hata oluştu."
      });
    }
    response.end();
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`CROX SELECTOR hazır: http://localhost:${PORT}`);
});
