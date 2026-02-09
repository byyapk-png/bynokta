# ByNoKTa Çarkıfelek

Altın Günü için çarkıfelek uygulaması. İsim ekleyip çevir, kazananlar listesi otomatik oluşur.

## GitHub’a yükleme

1. **Git kur** (yoksa): [git-scm.com/download/win](https://git-scm.com/download/win) → indir, kur, kurulumda “Add to PATH” seçeneğini işaretle.

2. **GitHub’da yeni depo oluştur**: [github.com/new](https://github.com/new) → depo adı (örn. `bynokta`), Public, “Add a README” işaretleme.

3. **Projeyi bağla ve gönder** (PowerShell veya CMD’de bu klasörde):

```bash
git init
git add .
git commit -m "İlk commit - ByNoKTa Çarkıfelek"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/bynokta.git
git push -u origin main
```

`KULLANICI_ADIN` yerine kendi GitHub kullanıcı adını yaz; depo adı farklıysa `bynokta` yerine onu kullan.

## GitHub Pages ile yayınlama

1. Depo sayfasında **Settings** → sol menüden **Pages**.
2. **Source**: “Deploy from a branch” seç.
3. **Branch**: `main`, klasör `/ (root)` → **Save**.
4. Birkaç dakika sonra site şu adreste açılır:  
   `https://KULLANICI_ADIN.github.io/bynokta/`