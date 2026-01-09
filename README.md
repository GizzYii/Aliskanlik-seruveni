# 🚀 Alışkanlık Serüveni (Habit Adventure)

**"Yazılım, hayatımızdaki küçük problemlere büyük ve sade çözümler üretme sanatıdır."**

Alışkanlık Serüveni; çocukların günlük rutinlerini birer sorumluluk bilincine dönüştürmek isteyen ebeveynler için tasarlanmış, **kayıt gerektirmeyen**, gizlilik odaklı ve **ödül temelli** bir takip aracıdır. Bir ebeveynin gerçek hayat tecrübelerinden yola çıkarak, disiplini bir zorunluluktan çıkarıp motivasyon dolu bir yolculuğa dönüştürmeyi hedefler.

---

## 📱 Ekran Görüntüleri

| Ana Ekran | Görev Takibi | Tema Seçimi |
| :---: | :---: | :---: |
| ![Ana Ekran](https://via.placeholder.com/300x600?text=Ana+Ekran+Görseli) | ![Görevler](https://via.placeholder.com/300x600?text=Görev+Takibi+Görseli) | ![Temalar](https://via.placeholder.com/300x600?text=Tema+Seçimi+Görseli) |
*Not: Kendi ekran görüntülerinizi `public/screenshots/` klasörüne ekleyip yukarıdaki linkleri güncelleyebilirsiniz.*

---

## ✨ Neden Alışkanlık Serüveni?

* **Hemen Başla (UX Dostu):** Hesap açma, e-posta onayı veya karmaşık formlar yok. Uygulamayı açtığınız anda kullanmaya başlayabilirsiniz.
* **Ödül Temelli Motivasyon:** Çocuklar görevlerini tamamladıkça puan toplar. Bu puanlar, ebeveynlerin belirlediği gerçek hayat ödülleri (parka gitmek, sevdiği bir yemeği seçmek vb.) için birer basamaktır.
* **Yaşa Özel AI Rehberliği:** Google Gemini AI desteğiyle, çocuğun yaşına en uygun ve pedagojik olarak doğru görev önerileri sunulur.
* **Çocuk Dostu Görsellik:** Uzay, Şeker Diyarı ve Dinozor gibi farklı temalarla çocukların ilgisini canlı tutar.

---

## ⚙️ Teknik Mimari ve Kararlar

Bu proje, aktif bir geliştirme (Beta/MVP) aşamasındadır ve **"Hafiflik"** ile **"Hız"** prensipleriyle inşa edilmiştir.

### 1. Veri Yönetimi (Local-First Design)
* **Bilinçli Sadelik:** Çocukların rutinleri gibi hassas veriler internet üzerindeki sunuculara gönderilmez.
* **Local Storage:** Veriler tamamen tarayıcınızda saklanır. Bu tercih, hem sunucu taraflı veri sızıntısı riskini sıfıra indirir hem de uygulamanın internet hızı fark etmeksizin "anında" çalışmasını sağlar.

### 2. Yapay Zeka (Gemini AI) Entegrasyonu
* **Contextual Prompting:** Kullanıcının girdiği çocuk yaşı parametresi, AI'a bir bağlam olarak gönderilir. Böylece 5 yaşındaki bir çocuk ile 12 yaşındaki bir çocuk için üretilen görev önerileri birbirinden farklı ve yaşa uygun olur.

### 3. Modern Tech Stack
* **React + Vite:** Hızlı render ve modern geliştirme deneyimi için.
* **Tailwind CSS:** Dinamik tema değişimlerini (renk paletleri) performanslı bir şekilde yönetmek için.
* **Lucide Icons:** Erişilebilir ve anlaşılır bir görsel dil oluşturmak için.

---

## 🔒 Gizlilik ve Güvenlik

* **Kayıt Yok, Takip Yok:** Kişisel verilerinizi paylaşmanıza gerek yoktur. Uygulama "Aman aman" veriler toplamaz; sadece sizin belirlediğiniz görevleri ve kazandığınız puanları yerel olarak işler.
* **Güvenlik:** Veriler cihazınızdan çıkmadığı için gizlilik en üst düzeydedir. 
* **Uyarı:** Tarayıcı temizliği yapıldığında yerel veriler silinebilir. Bu, gizliliği ön planda tutan mimari bir tercihtir.

---

## 📦 Kurulum ve Çalıştırma

Projeyi yerelinizde test etmek için:

```bash
# 1. Projeyi klonlayın
git clone [https://github.com/kullaniciadi/aliskanlik-seruveni.git](https://github.com/kullaniciadi/aliskanlik-seruveni.git)

# 2. Klasöre girin
cd aliskanlik-seruveni

# 3. Bağımlılıkları yükleyin
npm install

# 4. Uygulamayı başlatın
npm run dev
npm run dev
