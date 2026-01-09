const API_KEY = ""; // Kullanıcıdan alınacak veya .env dosyasına eklenecek

export const callGemini = async (prompt, systemPrompt) => {
    if (!API_KEY) {
        console.warn("Gemini API Key is missing");
        return "API Key eksik.";
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
