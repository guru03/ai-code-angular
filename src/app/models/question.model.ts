export interface Question {
    id: number;
    category: string;
    topic: string;
    visible: boolean;
    contentStatus: string;
    question: string;
    answer: string;
    answer2?: string;
    imageUrl?: string;
    image2Url?: string;
    image3Url?: string;
}

export interface QuestionsState {
    questions: Question[];
    selectedQuestion?: Question | null;
    loading?: boolean;
    error?: string | null;
}