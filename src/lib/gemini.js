const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // .env dosyasından okunacak

const MOCK_MOTIVATIONS = [
    "Harika gidiyorsun! Bugün bir yıldız gibi parlıyorsun! 🌟",
    "Küçük adımlar büyük zaferlere taşır. Devam et! 🚀",
    "Süper kahramanlar da her gün antrenman yapar. Sen de öylesin! 🦸‍♂️",
    "Bugün yeni şeyler öğrenmek için harika bir gün! 📚",
    "Asla pes etme, her çaba seni hedefine yaklaştırır! 💪",
    "Görevlerini tamamladığında kendine bir ödül vermeyi unutma! 🎁",
    "Enerjin çok yüksek, bu enerjiyi dünyayı değiştirmek için kullan! 🌍"
];

const MOCK_SUGGESTIONS = [
    "Odanı toplayıp bir süper kahraman üssüne çevirebilirsin! 🧹",
    "Bugün en sevdiğin kitabı okumaya ne dersin? 📖",
    "Biraz su içip enerjini tazeleyebilirsin! 💧",
    "Dişlerini fırçalamak sana parlak bir gülüş kazandırır! 🦷",
    "Arkadaşlarına veya ailene güzel bir söz söyle! 💬"
];

export const callGemini = async (prompt, systemPrompt) => {
    // API Key yoksa veya boşsa MOCK (Sahte) veri dön
    if (!API_KEY || API_KEY === "BURAYA_API_ANAHTARINIZI_YAZIN") {
        console.warn("Gemini API Key eksik. Mock modunda çalışıyor.");
        // Yapay bir gecikme ekle (gerçekçi olması için)
        await new Promise(r => setTimeout(r, 1000));
        
        if (prompt.includes("motivasyon") || systemPrompt.includes("motivasyon")) {
            return MOCK_MOTIVATIONS[Math.floor(Math.random() * MOCK_MOTIVATIONS.length)];
        } else {
            return MOCK_SUGGESTIONS[Math.floor(Math.random() * MOCK_SUGGESTIONS.length)];
        }
    }

    let retries = 0;
    const delays = [1000, 2000, 4000];
    while (retries < 3) {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    systemInstruction: { parts: [{ text: systemPrompt }] }
                })
            });
            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text;
        } catch (err) {
            retries++;
            if (retries === 3) throw err;
            await new Promise(r => setTimeout(r, delays[retries - 1]));
        }
    }
};
