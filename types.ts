export interface Game {
  id: number;
  title: string;
  genre: string;
  image: string;
  videoUrl?: string;
  rating: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ViewState {
  HOME = 'HOME',
  GAMES = 'GAMES',
  PRICING = 'PRICING'
}