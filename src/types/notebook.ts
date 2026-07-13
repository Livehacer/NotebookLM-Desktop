export interface Notebook {
  id: string;
  title: string;
  sources: string[];
  createdAt: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
