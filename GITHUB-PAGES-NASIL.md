# GitHub Pages Yayınlanmıyor – Çözüm Adımları

## 1. GitHub Actions ile yayınlama (en sağlam yöntem)

Projeye **GitHub Actions** workflow’u eklendi. Şunları yap:

1. **Yeni dosyaları GitHub’a gönder**
   - Cursor’da veya klasörde: `.github/workflows/deploy-pages.yml` dosyası var.
   - Terminalde:
   ```bash
   cd C:\Users\Administrator\Desktop\bynokta
   git add .
   git commit -m "GitHub Pages workflow eklendi"
   git push
   ```

2. **Pages ayarını değiştir**
   - GitHub’da depona gir → **Settings** (üst menü).
   - Sol menüden **Pages**’e tıkla.
   - **Build and deployment** bölümünde:
     - **Source** (Kaynak): **GitHub Actions** seç.
     - (“Deploy from a branch” seçili kalmasın.)
   - Sayfayı kaydet (değişiklik otomatik kaydediliyorsa bir şey yapma).

3. **Workflow’un çalışmasını bekle**
   - Depoda **Actions** sekmesine gir.
   - “Deploy to GitHub Pages” workflow’u görünecek; bir süre sonra yeşil tik olacak.
   - İlk seferde 1–2 dakika sürebilir.

4. **Site adresini aç**
   - Format: `https://KULLANICI_ADIN.github.io/REPO_ADI/`
   - Örnek: Depo adı `bynokta`, kullanıcı adın `ahmet` ise:  
     **https://ahmet.github.io/bynokta/**

---

## 2. Hâlâ yayınlanmıyorsa kontrol listesi

| Kontrol | Açıklama |
|--------|----------|
| **Repo Public mi?** | Repo → **Settings** → en altta “Danger Zone” üstünde “Change repository visibility” – **Public** olmalı. Private repo’da (ücretsiz hesapta) GitHub Pages çalışmaz. |
| **Doğru adres mi?** | Adres tam şöyle olmalı: `https://KULLANICI_ADIN.github.io/REPO_ADI/` – sondaki `/` ile dene. Repo adı büyük/küçük harf duyarlı olabilir. |
| **Pages kaynağı** | **Settings → Pages** → Source mutlaka **GitHub Actions** (veya denediysen “Deploy from a branch” + branch: main, folder: / (root)). |
| **Actions’ta hata var mı?** | **Actions** sekmesi → “Deploy to GitHub Pages” → en son çalıştırmaya tıkla. Kırmızı X varsa “Build” / “Deploy” adımına girip hata mesajını oku. |
| **Biraz bekledin mi?** | İlk yayında 2–5 dakika beklemek gerekebilir. Tarayıcıda Ctrl+F5 ile önbelleksiz yenile. |

---

## 3. “Deploy from a branch” kullanıyorsan

- **Settings → Pages** → Source: **Deploy from a branch**.
- Branch: **main** (veya kodun olduğu branch).
- Folder: **/ (root)**.
- **Save** de.  
Yine birkaç dakika sonra `https://KULLANICI_ADIN.github.io/REPO_ADI/` adresinden açılır.

---

GitHub kullanıcı adın ve depo adın ne? Ona göre tam linki yazabilirim.
