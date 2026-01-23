import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Message } from '../types';

const MODEL_NAME = 'gemini-3-flash-preview';

export class GeminiService {
  private chat: Chat | null = null;
  private ai: GoogleGenAI | null = null;

  constructor() {
    this.initializeAI();
  }

  private initializeAI() {
    const apiKey = import.meta.env.VITE_API_KEY;
    
    if (!apiKey || apiKey === 'your_actual_gemini_api_key_here') {
      console.warn('API Key not configured. Please add VITE_API_KEY to your .env file.');
      return;
    }
    
    this.ai = new GoogleGenAI({ apiKey });
    this.initChat();
  }

  private initChat() {
    if (!this.ai) {
      this.initializeAI();
    }
    
    if (this.ai) {
      this.chat = this.ai.chats.create({
        model: MODEL_NAME,
        config: {
          systemInstruction: "You are a helpful, intelligent, and concise AI assistant. You can analyze files and content provided by users. Format your responses with clear paragraphs and use markdown where appropriate.",
        },
      });
    }
  }

  public async sendMessageStream(
    message: string,
    onChunk: (text: string) => void
  ): Promise<void> {
    if (!this.ai) {
      throw new Error('API Key Error: Your API key is missing, invalid, or expired. Please check your .env file and ensure VITE_API_KEY is set correctly.');
    }

    if (!this.chat) {
      this.initChat();
    }

    if (!this.chat) throw new Error("Failed to initialize chat");

    try {
      const resultStream = await this.chat.sendMessageStream({ message });

      for await (const chunk of resultStream) {
        const responseChunk = chunk as GenerateContentResponse;
        if (responseChunk.text) {
          onChunk(responseChunk.text);
        }
      }
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      
      const errorMessage = error instanceof Error ? error.message : String(error);
      
      if (errorMessage.includes('401') || errorMessage.includes('Unauthorized') || errorMessage.includes('API key')) {
        throw new Error('API Key Error: Your API key is missing, invalid, or expired. Please check your .env file and ensure VITE_API_KEY is set correctly.');
      } else if (errorMessage.includes('404') || errorMessage.includes('not found') || errorMessage.includes('Model not found')) {
        throw new Error('Model Error: The specified model (gemini-3-flash-preview) was not found. Please check that the model name is correct.');
      } else if (errorMessage.includes('429') || errorMessage.includes('rate limit')) {
        throw new Error('Rate Limit: You have exceeded the API rate limit. Please wait a moment and try again.');
      } else if (errorMessage.includes('503') || errorMessage.includes('unavailable')) {
        throw new Error('Service Unavailable: The Gemini API is currently unavailable. Please try again in a few moments.');
      } else if (errorMessage.includes('Network') || errorMessage.includes('fetch')) {
        throw new Error('Network Error: Unable to connect to the Gemini API. Please check your internet connection.');
      } else {
        throw new Error(`Error: ${errorMessage || 'An unexpected error occurred while processing your request.'}`);
      }
    }
  }

  public resetChat() {
    this.initChat();
  }

  public restoreChatHistory(messages: Message[]) {
    if (!this.ai) {
      this.initializeAI();
    }
    
    if (this.ai && messages.length > 0) {
      const history = messages
        .filter(msg => !msg.isStreaming && !msg.isError)
        .map(msg => ({
          role: msg.role as 'user' | 'model',
          parts: [{ text: msg.content }]
        }));

      this.chat = this.ai.chats.create({
        model: MODEL_NAME,
        config: {
          systemInstruction: "You are a helpful, intelligent, and concise AI assistant. You can analyze files and content provided by users. Format your responses with clear paragraphs and use markdown where appropriate.",
        },
        history: history
      });
    }
  }
}

export const geminiService = new GeminiService();
