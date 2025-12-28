// Removido a dependência do Google para usar a API customizada via fetch
// import { GoogleGenAI } from "@google/genai";

const API_URL = 'https://apidark.squareweb.app/chat';
const API_KEY = 'Apikey-3EBC-9889-FA92';

export const generateAssistantResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        prompt: `Você é o Nuvify AI, um assistente virtual especialista em cloud gaming. Responda de forma curta e gamer. Usuário diz: ${userMessage}`
      })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    
    // Tratamento flexível da resposta baseada no retorno comum dessa API
    // Geralmente retorna { "response": "texto" } ou { "reply": "texto" }
    return data.response || data.reply || data.text || data.message || "Conexão estabelecida, mas sem dados de voz.";

  } catch (error) {
    console.error("Error calling AI API:", error);
    return "Falha na conexão neural. Servidores ocupados. Tente novamente.";
  }
};