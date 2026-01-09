# 🚀 Alışkanlık Serüveni (Habit Adventure)

"Yazılım, hayatın küçük zorluklarını sade çözümlerle iyileştirme sanatıdır."

Alışkanlık Serüveni; çocuklar için sorumluluk kazanmayı bir ödül yolculuğuna dönüştüren, **kayıt gerektirmeyen**, gizlilik odaklı ve **ödül temelli** bir takip aracıdır. Bir ebeveynin gerçek hayat tecrübelerinden yola çıkarak, disiplini bir zorunluluktan çıkarıp motivasyon dolu bir yolculuğa dönüştürmeyi hedefler.

---

## 📱 Ekran Görüntüleri

| Ana Ekran | Görev Takibi | Tema Seçimi |
| :---: | :---: | :---: |
| ![Ana Ekran](https://via.placeholder.com/300x600?text=Ana+Ekran+Görseli) | ![Görevler](https://via.placeholder.com/300x600?text=Görev+Takibi+Görseli) | ![Temalar](https://via.placeholder.com/300x600?text=Tema+Seçimi+Görseli) |

https://aliskanlik-seruveni.onrender.com/

---

## ✨ Neden Alışkanlık Serüveni?

* **Hemen Başla (Kullanıcı Dostu):** Hesap açma, e-posta onayı veya karmaşık formlar yok. Uygulamayı açtığınız anda kullanmaya başlayabilirsiniz.
* **Ödül Temelli Motivasyon:** Çocuklar görevlerini tamamladıkça puan toplar. Bu puanlar, ebeveynlerin belirlediği gerçek hayat ödülleri için birer basamaktır.
* **Yaşa Özel AI Rehberliği:** Google Gemini AI desteğiyle, çocuğun yaşına en uygun görev önerileri sunulur.
* **Eğlenceli Görsellik:** Farklı temalarla (Uzay, Dinozor vb.) çocukların ilgisini canlı tutar.

---

## ⚙️ Teknik Mimari ve Kararlar

Bu proje, şu an en baz (minimum viable product) haliyle yayındadır ve aktif bir gelişim sürecindedir.

### 1. Veri Yönetimi ve Gizlilik (Local-First)
* **Bilinçli Sadelik:** Çocukların rutinleri gibi hassas veriler internete çıkarılmaz. Veriler tamamen tarayıcınızın `Local Storage` alanında saklanır. 
* **Hız:** Sunucu trafiği olmadığı için uygulama her cihazda anında çalışır.

### 2. Yapay Zeka (Gemini AI) Entegrasyonu
* **Bağlamsal Öneriler:** Kullanıcının girdiği çocuk yaşı parametresi, AI'a bir bağlam olarak gönderilerek pedagojik açıdan en uygun görevlerin üretilmesi sağlanır.

### 3. Modern Teknoloji Yığını
* **React + Vite:** Hızlı render ve performanslı geliştirme süreci.
* **Tailwind CSS:** Dinamik tema değişimlerini yönetmek için esnek tasarım kütüphanesi.

---

## 🚀 Gelişim ve Gelecek Vizyonu

Bu proje benim için sadece bir uygulama değil, sürekli devam eden bir öğrenme serüvenidir. Öğrendiğim yeni teknolojiler doğrultusunda projeyi şu yönde geliştirmeyi hedefliyorum:

* **Mobil Uygulama Dönüşümü:** Mevcut yapıyı ileride **React Native** veya **Flutter** kullanarak tam kapsamlı bir mobil uygulamaya dönüştürmeyi planlıyorum.
* **Kullanıcı Panelleri:** Ebeveyn ve çocuk için ayrı girişlerin yapılabileceği, özelleştirilmiş kullanıcı panelleri eklenecek.
* **Bulut Senkronizasyonu:** Gelişim aşamasına bağlı olarak, verilerin farklı cihazlardan erişilebilmesi için güvenli hesap ve bulut veritabanı (Firebase/Supabase vb.) entegrasyonu yapılacak.
* **Veri Yedekleme:** Yerel verilerin `.json` formatında dışa aktarılması sağlanacak.

---

## 📦 Kurulum ve Çalıştırma

```bash
# 1. Projeyi klonlayın
git clone [https://github.com/kullaniciadi/aliskanlik-seruveni.git](https://github.com/kullaniciadi/aliskanlik-seruveni.git)

# 2. Bağımlılıkları yükleyin
npm install

# 3. Uygulamayı başlatın
npm run dev
