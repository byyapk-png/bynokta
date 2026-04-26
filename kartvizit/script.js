// Sayfa başladığında tasarımın içine data.js'deki verileri dolduran kodlar
document.addEventListener('DOMContentLoaded', () => {
    // data.js dosyasından VIZIT_DATA geldiğini varsayıyoruz.

    const tamIsim = `${VIZIT_DATA.kisisel.isim} ${VIZIT_DATA.kisisel.soyisim}`;

    // Sayfa başlığı (Tab Title)
    document.title = `${tamIsim} - Dijital Kartvizit`;

    // 1. Profil Bilgilerini Doldur
    document.getElementById('profileName').textContent = tamIsim;
    document.getElementById('profileTitle').textContent = VIZIT_DATA.kisisel.unvan;
    document.getElementById('profileBio').textContent = VIZIT_DATA.kisisel.biyografi;

    const avatarUrl = VIZIT_DATA.kisisel.profilFotografi ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(tamIsim)}&background=0d0f15&color=fff&size=150`;
    document.getElementById('profileAvatar').src = avatarUrl;


    // 2. Aksiyon Butonlarını Doldur
    document.getElementById('btnPhone').href = `tel:${VIZIT_DATA.iletisim.telefon}`;
    document.getElementById('btnEmail').href = `mailto:${VIZIT_DATA.iletisim.email}`;
    document.getElementById('btnWhatsapp').href = `https://wa.me/${VIZIT_DATA.iletisim.whatsappMesajNumarasi}`;
    document.getElementById('btnMap').href = VIZIT_DATA.iletisim.konumGoogleMapsLink;


    // 3. Sosyal Linkleri Dinamik Oluştur
    const linksContainer = document.getElementById('socialLinksContainer');
    linksContainer.innerHTML = ''; // Temizle

    VIZIT_DATA.sosyalMedya.forEach(item => {
        const a = document.createElement('a');
        a.href = item.link;
        a.className = 'link-card';
        a.target = '_blank';

        const styleProp = item.renk.includes('gradient') ? 'background' : 'background-color';

        a.innerHTML = `
            <div class="link-icon" style="${styleProp}: ${item.renk};">
                <i class="${item.ikon}"></i>
            </div>
            <div class="link-text">${item.baslik}</div>
            <i class="fas fa-chevron-right link-arrow"></i>
        `;
        linksContainer.appendChild(a);
    });

    // Yükleniyor yazısını gizle, asıl içeriği göster
    document.getElementById('loading').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';

    // 4. vCard (Rehbere Kaydet) oluşturma butonu işlemleri
    document.getElementById('saveContactBtn').addEventListener('click', function () {

        let vcard = `BEGIN:VCARD
VERSION:3.0
FN:${tamIsim}
N:${VIZIT_DATA.kisisel.soyisim};${VIZIT_DATA.kisisel.isim};;;
TITLE:${VIZIT_DATA.kisisel.unvan}
ORG:${VIZIT_DATA.kisisel.sirket}
TEL;TYPE=CELL:${VIZIT_DATA.iletisim.telefon}
EMAIL;TYPE=WORK,INTERNET:${VIZIT_DATA.iletisim.email}
URL:${VIZIT_DATA.iletisim.webSitesi}
END:VCARD`;

        const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
        const url = URL.createObjectURL(blob);

        const newLink = document.createElement('a');
        newLink.download = `${VIZIT_DATA.kisisel.isim}_${VIZIT_DATA.kisisel.soyisim}.vcf`;
        newLink.href = url;

        document.body.appendChild(newLink);
        newLink.click();

        document.body.removeChild(newLink);
        URL.revokeObjectURL(url);

        // Görsel geri bildirim
        const btn = this;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Rehbere Kaydedildi';
        btn.style.backgroundColor = '#10b981'; // Yeşil
        btn.style.color = '#ffffff';

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.backgroundColor = '';
            btn.style.color = '';
        }, 2500);
    });
});
