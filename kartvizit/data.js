// Tüm bilgilerini sadece bu dosyayı değiştirerek düzenleyebilirsin!
// İsim, telefon, sosyal medya onaylarını buradan yapman yeterli. Sistem kalanı kendi halledecektir.

const VIZIT_DATA = {
    // 1. KİŞİSEL BİLGİLER
    kisisel: {
        isim: "Ahmet",
        soyisim: "Yılmaz",
        unvan: "Yazılım Mühendisi & Tasarımcı",
        sirket: "Örnek Teknoloji A.Ş.",
        biyografi: "Merhaba! Dijital dünyada yaratıcı ve modern çözümler üretiyorum. İletişime geçmekten çekinmeyin.",
        // Profil fotoğrafın için bir link yapıştırabilirsin. (Örn: https://site.com/resim.jpg) 
        // Veya silersen sistem otomatik olarak baş harflerinden bir resim oluşturur.
        profilFotografi: ""
    },

    // 2. İLETİŞİM BİLGİLERİ
    iletisim: {
        telefon: "+905320000000",
        email: "ahmet@ornek.com",
        whatsappMesajNumarasi: "905320000000", // Başında + olmadan ülke koduyla
        konumGoogleMapsLink: "https://maps.app.goo.gl/ornek",
        webSitesi: "https://ornek.com"
    },

    // 3. SOSYAL MEDYA LİNKLERİ
    // İstediğin kadar ekleyip çıkarabilirsin.
    sosyalMedya: [
        {
            baslik: "Instagram Profilim",
            link: "https://instagram.com/ornek",
            ikon: "fab fa-instagram",
            renk: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
        },
        {
            baslik: "Web Sitem",
            link: "https://ornek.com",
            ikon: "fas fa-globe",
            renk: "#1e293b"
        }
    ]
};
