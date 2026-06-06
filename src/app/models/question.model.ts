import { WorkStatus } from "../enum/enum";

export interface Question {
    id: number;
    category: string;
    topic: string;
    visible: boolean;
    content_status: WorkStatus;
    // status: WorkStatus;
    question: string;
    answer: string;
    answer2?: string;
    imageUrl?: string;
    image2Url?: string;
    image3Url?: string;
}

export interface QuestionsState {
    questions: Question[];
    selectedQuestion: Question | null;
    loading: boolean;
    error: string | null;
}

export interface QuestionCategory {
    categories: [];
}

export interface Category {
  id: number;
  name: string;
}

export const CATEGORIES: Category[] = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Angular' },
  { id: 3, name: 'NgRx' },
  { id: 4, name: 'Signals' },
  { id: 5, name: 'JavaScript' },
  { id: 6, name: 'HR' },
  { id: 7, name: 'MCP' },
  { id: 8, name: 'AI' },
];