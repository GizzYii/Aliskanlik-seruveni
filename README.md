# 🚀 Alışkanlık Serüveni (Habit Adventure)

Çocuklar için geliştirişmiş, eğlenceli ve motive edici bir alışkanlık takip uygulaması.

## 🎯 Özellikler

*   **Çocuk Dostu Arayüz:** Canlı renkler, büyük butonlar ve eğlenceli animasyonlar.
*   **Gamification (Oyunlaştırma):** Görevleri tamamlayarak puan toplama ve ödül kazanma sistemi.
*   **Kişiselleştirme:**
    *   Farklı temalar (Uzay, Şeker Diyarı, Dinozor, vb.)
    *   Avatar seçimi
*   **AI Destekli:** Google Gemini AI ile motive edici sözler ve akıllı görev önerileri.
*   **Veri Gizliliği:** Tüm veriler tarayıcınızın `Local Storage` alanında saklanır, hiçbir sunucuya gönderilmez.

## 🛠️ Teknolojiler

*   [React](https://reactjs.org/) - UI Kütüphanesi
*   [Vite](https://vitejs.dev/) - Build Tool
*   [Tailwind CSS](https://tailwindcss.com/) - Styling
*   [Lucide React](https://lucide.dev/) - İkonlar
*   [Google Gemini API](https://deepmind.google/technologies/gemini/) - Yapay Zeka Entegrasyonu

## 📦 Kurulum

1.  Projeyi bilgisayarınıza klonlayın:
    ```bash
    git clone https://github.com/kullaniciadi/aliskanlik-seruveni.git
    cd aliskanlik-seruveni
    ```

2.  Gerekli paketleri yükleyin:
    ```bash
    npm install
    ```

3.  Uygulamayı çalıştırın:
    ```bash
    npm run dev
    ```

## 🔑 AI Özellikleri İçin Kurulum (Opsiyonel)

AI özelliklerini (motivasyon mesajları vb.) kullanmak için bir Google Gemini API anahtarına ihtiyacınız vardır.

1.  `src/lib/gemini.js` dosyasını açın.
2.  `YOUR_API_KEY_HERE` kısmına kendi API anahtarınızı yapıştırın veya `.env` dosyası oluşturarak `VITE_GEMINI_API_KEY` değişkenini tanımlayın.

## 📱 Ekran Görüntüleri

*(Buraya uygulama ekran görüntüleri eklenebilir)*

## 🤝 Katkıda Bulunma

1.  Forklayın
2.  Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3.  Commit atın (`git commit -m 'Add some AmazingFeature'`)
4.  Pushlayın (`git push origin feature/AmazingFeature`)
5.  Pull Request açın

---
*Geliştirici: [Geliştirici Adı]*
