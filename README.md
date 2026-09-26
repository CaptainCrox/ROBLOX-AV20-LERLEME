# CROX SELLECTOR

ROBLOX AV 20 etkinlik panosu. Site ile ortak ilerleme ve notlar aynı Node.js hizmetinde çalışır; Firebase veya Supabase kullanılmaz.

## Yayındaki site

https://crox-sellector.onrender.com

İkiniz siteyi açıp oyuncu adınızı girin. İlk oyuncu için rastgele bir oda kodu oluşturulur; üstteki **ODA** düğmesiyle kodu arkadaşına gönder. İkiniz aynı oda kodunu kullanınca tamamlanan görevler ve oyun notları canlı paylaşılır.

Bu hizmet Render'ın ücretsiz planında çalışır. Ücretsiz servis boşta kalınca uykuya geçebilir; sonraki ilk isteğin açılması biraz sürebilir. Ücretsiz planda kalıcı disk yoktur: servis yeniden dağıtılır veya kayıt dosyaları sıfırlanırsa oda ilerlemesi silinebilir. Bu planda önemli/kalıcı verileri saklamayın. Kayıtların yeniden başlamalardan sonra da korunması gerekiyorsa ücretli, kalıcı diskli bir hizmete yükseltmek gerekir.

## Dağıtım

GitHub deposu: https://github.com/CaptainCrox/ROBLOX-AV20-LERLEME

Render servisi Node.js runtime, `npm ci --omit=dev` build komutu ve `npm start` start komutuyla oluşturulmuştur. [`render.yaml`](./render.yaml) aynı ücretsiz, kalıcı disksiz ayarların Blueprint tanımıdır. GitHub'daki `main` dalına yeni commit geldiğinde Render otomatik dağıtım yapar.

## Yerelde çalıştırma

Node.js 18 veya üzerini kur. Proje klasöründe Windows PowerShell'den `npm.cmd start`, macOS/Linux'tan `npm start` komutunu çalıştır ve `http://localhost:3000` adresini aç.

Sunucu oyun durumları ve notları `data` dizininde tutar. `PORT` ve `DATA_DIR` ortam değişkenlerini destekler.
