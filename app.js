const eras = [
  {
    years: "2006–2007",
    title: "Her Şeyin Başladığı Yer",
    description: "İlk Roblox dünyaları, sonsuz hayal gücü.",
    games: [
      { id: "roblox-20", title: "Roblox 20", year: 2006, emoji: "☁️", color: "linear-gradient(145deg,#345787,#13233e)", note: "Zaman çizelgesine ilk yolculuk." },
      { id: "classic-crossroads", title: "Klasik: Kavşaklar", year: 2006, emoji: "🏘️", color: "linear-gradient(145deg,#517d5b,#1e392e)", note: "Orijinal açık dünya." },
      { id: "sword-fights-heights", title: "Yükseklerde Kılıç Savaşları", year: 2007, emoji: "⚔️", color: "linear-gradient(145deg,#57639b,#282647)", note: "Yüksek yerler için savaş." }
    ]
  },
  {
    years: "2008–2010",
    title: "İlk Yılların Mesaisi",
    description: "Sıradaki adımı gösteren ilk başarılar.",
    games: [
      { id: "rocket-arena", title: "Roket Arenası", year: 2008, emoji: "🚀", color: "linear-gradient(145deg,#bf5947,#502b3e)", note: "Hızlı ve tempolu çarpışmalar." },
      { id: "chaos-canyon", title: "Kaos Kanyonu", year: 2009, emoji: "🪨", color: "linear-gradient(145deg,#587b65,#26333a)", note: "Sürekli değişen tehlikelere karşı." },
      { id: "work-pizza-place", title: "Work at a Pizza Place", year: 2010, emoji: "🍕", color: "linear-gradient(145deg,#e37d45,#61303d)", note: "Pizza yap, teslim et, eğlen." }
    ]
  },
  {
    years: "2011–2013",
    title: "Her Şeye Rağmen",
    description: "Ne pahasına olursa olsun hayatta kal.",
    games: [
      { id: "natural-disaster-survival", title: "Natural Disaster Survival", year: 2011, emoji: "🌪️", color: "linear-gradient(145deg,#5383a6,#344865)", note: "Tabiatın azabına dayan." },
      { id: "base-wars", title: "Base Wars: The Land", year: 2012, emoji: "🛡️", color: "linear-gradient(145deg,#526e67,#292f41)", note: "Üssünü güçlendir, kontrolü ele al." },
      { id: "apocalypse-rising", title: "Apocalypse Rising", year: 2013, emoji: "☣️", color: "linear-gradient(145deg,#747456,#373642)", note: "Kıyamette kaynaklar için savaş." }
    ]
  },
  {
    years: "2014–2016",
    title: "Dijital Vatandaşlar",
    description: "Bir araya gelinen yerler, birlikte büyüyen topluluklar.",
    games: [
      { id: "murder-mystery-2", title: "Murder Mystery 2", year: 2014, emoji: "🔎", color: "linear-gradient(145deg,#78604c,#312c43)", note: "Katil kim? Gözünü açık tut." },
      { id: "the-quarry", title: "The Quarry", year: 2015, emoji: "⛏️", color: "linear-gradient(145deg,#6a795b,#303e40)", note: "Ormanda sırlarla dolu bir keşif." },
      { id: "roblox-high-school", title: "Roblox High School", year: 2016, emoji: "🎒", color: "linear-gradient(145deg,#617eab,#473b68)", note: "Dersten sonra okulun tadını çıkar." }
    ]
  },
  {
    years: "2017–2019",
    title: "Büyük Ligler",
    description: "Roblox'un oyun kültürünün kalbine işleyip kök saldığı yıllar.",
    games: [
      { id: "jailbreak", title: "Hapishane Kaçışı", year: 2017, emoji: "🚔", color: "linear-gradient(145deg,#64895e,#263c49)", note: "Soygun planla veya suçluları durdur." },
      { id: "build-a-boat", title: "Build a Boat for Treasure", year: 2018, emoji: "🛶", color: "linear-gradient(145deg,#368698,#243e5c)", note: "Açık sulara inşa et, test et ve hayatta kal." },
      { id: "adopt-me", title: "Adopt Me!", year: 2019, emoji: "🐣", color: "linear-gradient(145deg,#9c77ba,#4c4776)", note: "Kendi evini, hayvanını ve hikâyeni kur." }
    ]
  },
  {
    years: "2020–2022",
    title: "Olanaklarla Dolu Dünyalar",
    description: "Daha fazla oyuncu, daha fazla dünya, daha fazla neden.",
    games: [
      { id: "world-zero", title: "World // Zero", year: 2020, emoji: "🐉", color: "linear-gradient(145deg,#a45b9c,#41447d)", note: "Takım kur, seviye atla, dünyaya meydan oku." },
      { id: "piggy", title: "Piggy", year: 2021, emoji: "🐷", color: "linear-gradient(145deg,#ab596d,#40314e)", note: "Gizemli bir labirentten kaç." },
      { id: "berry-avenue", title: "Berry Avenue", year: 2022, emoji: "🏡", color: "linear-gradient(145deg,#5d9d89,#354f79)", note: "Hayalindeki hayatı yaşa." }
    ]
  },
  {
    years: "2023–2025",
    title: "Yeni Klasikler",
    description: "Nostaljik olmayacak kadar taze, adı edilecek kadar büyük.",
    games: [
      { id: "blade-ball", title: "Blade Ball", year: 2023, emoji: "⚡", color: "linear-gradient(145deg,#724acf,#28274e)", note: "Reflekslerini keskinleştir." },
      { id: "dress-to-impress", title: "Dress to Impress", year: 2024, emoji: "💖", color: "linear-gradient(145deg,#cc74ad,#6b547d)", note: "Podyum senin, tarzını göster." },
      { id: "grow-a-garden", title: "Grow a Garden", year: 2025, emoji: "🌱", color: "linear-gradient(145deg,#5eaa73,#31585c)", note: "Kendi çiftliğinde büyü." }
    ]
  }
];

const allGames = eras.flatMap((era) => era.games);
const storageKeys = { nickname: "crox-selector-name", room: "crox-selector-room" };
const apiBaseUrl = (window.CROX_API_BASE_URL || "").replace(/\/+$/, "");
const apiUrl = (path) => `${apiBaseUrl}${path}`;
const roomEntropy = Array.from(crypto.getRandomValues(new Uint8Array(6)), (value) => value.toString(16).padStart(2, "0")).join("").toUpperCase();
const initialRoom = `CROX-${roomEntropy}`;
const elements = {
  welcomeScreen: document.querySelector("#welcome-screen"),
  welcomeForm: document.querySelector("#welcome-form"),
  nickname: document.querySelector("#nickname"),
  roomCode: document.querySelector("#room-code"),
  appShell: document.querySelector("#app-shell"),
  roomLabel: document.querySelector("#room-label"),
  profileName: document.querySelector("#profile-name"),
  avatar: document.querySelector("#avatar"),
  youAvatar: document.querySelector("#you-avatar"),
  friendAvatar: document.querySelector("#friend-avatar"),
  playersCount: document.querySelector("#players-count"),
  timeline: document.querySelector("#timeline"),
  emptyState: document.querySelector("#empty-state"),
  search: document.querySelector("#search-input"),
  toast: document.querySelector("#toast"),
  syncStatus: document.querySelector("#sync-status")
};

let profile = null;
let gameState = {};
let noteState = {};
const noteDrafts = {};
let selectedFilter = "all";
let searchTerm = "";
let eventSource = null;
let toastTimeout;
let lastActor = null;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function initials(name) {
  return (name.trim().charAt(0) || "?").toLocaleUpperCase("tr-TR");
}

function setProfile(name, room) {
  profile = { nickname: name.trim().slice(0, 24), room: room.trim().toUpperCase() };
  localStorage.setItem(storageKeys.nickname, profile.nickname);
  localStorage.setItem(storageKeys.room, profile.room);
  elements.roomLabel.textContent = profile.room;
  elements.profileName.textContent = profile.nickname;
  elements.avatar.textContent = initials(profile.nickname);
  elements.youAvatar.textContent = initials(profile.nickname);
  elements.welcomeScreen.hidden = true;
  elements.appShell.hidden = false;
  connectToRoom();
}

function showWelcome() {
  if (eventSource) eventSource.close();
  elements.appShell.hidden = true;
  elements.welcomeScreen.hidden = false;
  if (profile) {
    elements.nickname.value = profile.nickname;
    elements.roomCode.value = profile.room;
  }
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => elements.toast.classList.remove("visible"), 2600);
}

function setConnection(isConnected) {
  elements.syncStatus.classList.toggle("offline", !isConnected);
  elements.syncStatus.innerHTML = isConnected
    ? '<span class="live-dot"></span> Canlı senkron aktif'
    : '<span class="live-dot"></span> Bağlantı bekleniyor';
}

async function loadState() {
  const response = await fetch(apiUrl(`/api/state?room=${encodeURIComponent(profile.room)}`));
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || "Event ilerlemesi yüklenemedi.");
  renderState(result, false);
}

function connectToRoom() {
  if (eventSource) eventSource.close();
  setConnection(false);
  loadState().catch((error) => showToast(error.message));
  eventSource = new EventSource(apiUrl(`/api/events?room=${encodeURIComponent(profile.room)}`));
  eventSource.addEventListener("open", () => setConnection(true));
  eventSource.addEventListener("state", (event) => {
    const state = JSON.parse(event.data);
    const changes = [...Object.values(state.games || {}), ...Object.values(state.notes || {})];
    const actor = changes.map((change) => change.updatedBy).find((name) => name && name !== profile.nickname);
    renderState(state, Boolean(actor));
    if (actor && actor !== lastActor) {
      lastActor = actor;
      elements.friendAvatar.textContent = initials(actor);
      elements.playersCount.textContent = `${actor} ve sen`;
    }
  });
  eventSource.addEventListener("error", () => setConnection(false));
}

function renderState(state, fromLiveEvent) {
  gameState = state.games || {};
  noteState = state.notes || {};
  const doneCount = allGames.filter((game) => gameState[game.id]?.done).length;
  const remaining = allGames.length - doneCount;
  const progress = Math.round((doneCount / allGames.length) * 100);
  document.querySelector("#total-count").textContent = allGames.length;
  document.querySelector("#all-tab-count").textContent = allGames.length;
  document.querySelector("#done-count").textContent = doneCount;
  document.querySelector("#remaining-count").textContent = remaining;
  document.querySelector("#progress-percent").innerHTML = `${progress}<span>%</span>`;
  document.querySelector("#progress-fill").style.width = `${progress}%`;
  document.querySelector("#done-caption").textContent = doneCount ? `${doneCount} event oyunu tamamlandı` : "İlk event göreviniz sizi bekliyor";
  document.querySelector("#hero-game-count").textContent = allGames.length;
  document.querySelector("#progress-caption").textContent = doneCount === allGames.length ? "Event tamamlandı!" : doneCount ? `${remaining} görev daha sizi bekliyor` : "Event başlasın!";
  renderGames();
  if (fromLiveEvent) {
    const newest = [...Object.values(gameState), ...Object.values(noteState)]
      .filter((change) => change.updatedBy && change.updatedBy !== profile.nickname)
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))[0];
    if (newest) lastActor = newest.updatedBy;
  }
}

function renderGames() {
  const normalizedSearch = searchTerm.toLocaleLowerCase("tr-TR");
  let visibleCount = 0;
  elements.timeline.innerHTML = eras.map((era, eraIndex) => {
    const games = era.games.filter((game) => {
      const done = Boolean(gameState[game.id]?.done);
      const matchesFilter = selectedFilter === "all" || (selectedFilter === "done" ? done : !done);
      const savedNote = noteState[game.id]?.text || "";
      const matchesSearch = !normalizedSearch || `${game.title} ${game.year} ${era.years} ${savedNote}`.toLocaleLowerCase("tr-TR").includes(normalizedSearch);
      return matchesFilter && matchesSearch;
    });
    if (!games.length) return "";
    visibleCount += games.length;
    const completedInEra = era.games.filter((game) => gameState[game.id]?.done).length;
    return `<section class="era-section" style="animation-delay:${eraIndex * 55}ms">
      <div class="era-meta"><span class="era-dot"></span><h3>${escapeHtml(era.years)}: ${escapeHtml(era.title)}</h3><p>${escapeHtml(era.description)}</p><span class="era-count">${completedInEra}/${era.games.length} BİTTİ</span></div>
      <div class="game-grid">${games.map((game, gameIndex) => {
        const status = gameState[game.id];
        const done = Boolean(status?.done);
        const actor = done && status.updatedBy ? ` · ${escapeHtml(status.updatedBy)} bitirdi` : "";
        const savedNote = noteState[game.id];
        const noteText = noteDrafts[game.id] ?? savedNote?.text ?? "";
        const noteByline = savedNote?.updatedBy ? `Ortak not · ${escapeHtml(savedNote.updatedBy)}` : "Arkadaşınızla ortak not";
        return `<article class="game-card${done ? " is-done" : ""}" style="--art-bg:${game.color};animation-delay:${gameIndex * 65}ms">
          <button class="game-toggle" type="button" data-game-id="${game.id}" aria-label="${escapeHtml(game.title)} — ${done ? "tamamlandı" : "tamamlanmadı"}, değiştirmek için tıkla">
            <div class="game-art"><div class="art-grid"></div><span class="game-year">${game.year}</span><span class="game-status"><i class="status-mark"></i>${done ? "TAMAMLANDI" : "SIRADA"}</span><span class="game-emoji" aria-hidden="true">${game.emoji}</span></div>
            <div class="game-info"><div class="game-title-row"><h4>${escapeHtml(game.title)}</h4><span class="game-check" aria-hidden="true">✓</span></div><p>${escapeHtml(game.note)}${actor}</p></div>
          </button>
          <form class="game-note-form" data-note-game-id="${game.id}">
            <label class="visually-hidden" for="note-${game.id}">${escapeHtml(game.title)} için ortak not</label>
            <textarea class="game-note-input" id="note-${game.id}" name="note" rows="2" maxlength="500" placeholder="Bu oyun için ortak not ekle..." aria-label="${escapeHtml(game.title)} için not">${escapeHtml(noteText)}</textarea>
            <div class="note-footer"><span class="note-byline">${noteByline}</span><button class="note-save" type="submit">Kaydet <span aria-hidden="true">↗</span></button></div>
          </form>
        </article>`;
      }).join("")}</div>
    </section>`;
  }).join("");
  elements.emptyState.hidden = visibleCount !== 0;
  elements.timeline.hidden = visibleCount === 0;
}

async function saveGameNote(gameId, text) {
  const response = await fetch(apiUrl(`/api/notes/${gameId}`), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ room: profile.room, nickname: profile.nickname, note: text })
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || "Not kaydedilemedi.");
  delete noteDrafts[gameId];
  renderState(result, false);
  showToast(text.trim() ? "Ortak not kaydedildi." : "Ortak not silindi.");
}

async function toggleGame(gameId) {
  const game = allGames.find((entry) => entry.id === gameId);
  if (!game) return;
  const done = !Boolean(gameState[gameId]?.done);
  const response = await fetch(apiUrl(`/api/games/${gameId}`), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ room: profile.room, nickname: profile.nickname, done })
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || "Değişiklik kaydedilemedi.");
  renderState(result, false);
  showToast(done ? `${game.title} tamamlandı olarak işaretlendi!` : `${game.title} yeniden sıraya alındı.`);
}

elements.welcomeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!elements.welcomeForm.reportValidity()) return;
  setProfile(elements.nickname.value, elements.roomCode.value);
});

elements.timeline.addEventListener("input", (event) => {
  if (!event.target.matches(".game-note-input")) return;
  const form = event.target.closest("[data-note-game-id]");
  noteDrafts[form.dataset.noteGameId] = event.target.value;
});

elements.timeline.addEventListener("click", (event) => {
  const button = event.target.closest(".game-toggle[data-game-id]");
  if (!button) return;
  toggleGame(button.dataset.gameId).catch((error) => showToast(error.message));
});

elements.timeline.addEventListener("submit", (event) => {
  const form = event.target.closest("form[data-note-game-id]");
  if (!form) return;
  event.preventDefault();
  const gameId = form.dataset.noteGameId;
  const input = form.querySelector(".game-note-input");
  noteDrafts[gameId] = input.value;
  saveGameNote(gameId, input.value).catch((error) => showToast(error.message));
});

document.querySelectorAll(".filter-tab").forEach((button) => {
  button.addEventListener("click", () => {
    selectedFilter = button.dataset.filter;
    document.querySelectorAll(".filter-tab").forEach((tab) => tab.classList.toggle("active", tab === button));
    renderGames();
  });
});

elements.search.addEventListener("input", () => {
  searchTerm = elements.search.value.trim();
  renderGames();
});

document.querySelector("#edit-profile").addEventListener("click", showWelcome);

document.querySelector("#copy-room").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(profile.room);
    showToast(`Oda kodu ${profile.room} kopyalandı. Arkadaşınla paylaş!`);
  } catch {
    showToast(`Arkadaşına şu oda kodunu gönder: ${profile.room}`);
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    elements.search.focus();
  }
  if (event.key === "Escape" && !elements.welcomeScreen.hidden) {
    if (profile) elements.welcomeScreen.hidden = true;
  }
});

const savedName = localStorage.getItem(storageKeys.nickname);
const savedRoom = localStorage.getItem(storageKeys.room);
if (savedName && savedRoom) {
  setProfile(savedName, savedRoom);
} else {
  elements.roomCode.value = initialRoom;
  elements.welcomeScreen.hidden = false;
}
