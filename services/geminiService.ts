import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAssistantResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "Você é o Nuvify AI, um assistente virtual especialista em jogos e suporte técnico para a plataforma de cloud gaming Nuvify. Você é amigável, usa gírias de gamer moderadas (como 'GG', 'drop', 'lag zero') e fala português do Brasil. Ajude os usuários a escolherem jogos, resolverem problemas de conexão e explique por que a Nuvify é a melhor plataforma (0 lag, 4k, roda em qualquer PC). Seja conciso.",
      }
    });

    return response.text || "Desculpe, tive um glitch na matrix. Pode repetir?";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Ops! Parece que os servidores estão sobrecarregados. Tente novamente em breve.";
  }
};