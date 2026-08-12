'use server'

import { generateSystemPrompt } from '@/app/data/portfolioData'

export async function askGemini(history: {role: string, text: string}[]) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return "Error: The site owner hasn't configured the Gemini API key yet!"
  }

  try {
    // Gemini API requires the first message in the history to be from the user.
    // We strip out the initial hardcoded bot greeting to prevent validation errors.
    const validHistory = history.filter((m, i) => !(i === 0 && m.role === 'bot'))
    const formattedContents = validHistory.map(m => ({
      role: m.role === 'bot' ? 'model' : 'user',
      parts: [{ text: m.text }]
    }))

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // generateSystemPrompt() is called at request time — always reflects
        // the latest portfolio data without any redeployment needed.
        system_instruction: { parts: [{ text: generateSystemPrompt() }] },
        contents: formattedContents
      })
    })

    const d = await res.json()
    return d.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't process that — please try again!"
  } catch (err) {
    console.error(err)
    return "Something went wrong communicating with the server."
  }
}
