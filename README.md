# CROX SELLECTOR

ROBLOX AV 20 etkinlik panosu. Siteyi ve ortak canlı ilerleme sunucusunu birlikte çalıştırır; durumlar ve oyun notları kalıcı disk üzerinde saklanır. Firebase veya Supabase kullanılmaz.

## Siteyi bir kez internete yayınla

Bu proje için GitHub kaynak deposu ve Render web servisi gerekir. Render, uygulamayı ve canlı kayıt API'sini tek HTTPS adresinde yayınlar. GitHub Pages tek başına ortak kayıt/senkron sunmadığı için kullanılmıyor.

1. GitHub'da boş bir **public repository** oluştur; README veya başka başlangıç dosyası ekleme.
2. `node_modules`, `release` ve `data` klasörlerini yükleme (`.gitignore` bunları dışarıda tutar). Yüklemen gereken kaynaklar: `index.html`, `styles.css`, `app.js`, `config.js`, `server.js`, `package.json`, `package-lock.json`, `render.yaml`, `.gitignore`.
3. Render hesabında **New → Blueprint** seç, GitHub deposunu bağla ve içindeki `render.yaml` dosyasını seç.
4. Onay ekranında web servisi, bölge ve **kalıcı disk için gösterilen güncel ücreti** inceleyip onayla. Disk oda ilerlemesini korur; ücretli kaynak oluşturmadan önce toplam maliyeti kontrol et.
5. Dağıtım başarılı olunca Render'ın verdiği `https://...onrender.com` adresini açıp siteyi kontrol et.
6. Bu site adresini arkadaşına gönder. İkiniz sitede oyuncu adınızı yazın; ilk oyuncunun oluşturduğu oda kodunu **ODA** düğmesiyle paylaşın ve aynı kodla katılın.

Site ile API aynı domainde çalışır. Farklı şehirlerde olmanız sorun değildir; ikiniz de aynı internet adresine bağlanırsınız. Sunucu tek örnek olarak çalışmalıdır. Render'daki kalıcı diski veya servisi silmek kayıtları silebilir. Oda kodu davet bağlantısı gibi çalışır; yalnızca arkadaşınla paylaş.

## Yerelde çalıştırma

Node.js 18 veya üzerini kur. Proje klasöründe Windows PowerShell'den `npm.cmd start`, macOS/Linux'tan `npm start` komutunu çalıştır ve `http://localhost:3000` adresini aç.

Sunucu oyun durumları ve notları `data` dizininde tutar. `PORT` ve `DATA_DIR` ortam değişkenlerini destekler. Render Blueprint diski `/var/data` yoluna bağlar ve kayıt dizinini bu yola ayarlar.
