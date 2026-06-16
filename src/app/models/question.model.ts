import { WorkStatus } from "../enum/enum";

export interface Question {
  id: number;
  serial_number: number;
  language: string;
  topic: string;
  visible: boolean;
  content_status: WorkStatus;
  // status: WorkStatus;
  question: string;
  answer: string;
  answer2?: string;
  code_block: string;
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

// export interface QuestionCategory {
//   categories: [];
// }

export interface Category {
  id: number;
  name: string;  // backend value (e.g. "angular")
  value: string; // human‑friendly label (e.g. "Angular")
}

export const LANGUAGES: Category[] = [
  { id: 1, name: 'All', value: 'All' },
  { id: 2, name: 'angular', value: 'Angular' },
  { id: 3, name: 'ngrx', value: 'NgRx' },
  { id: 4, name: 'rxjs', value: 'RxJS' },
  { id: 5, name: 'signals', value: 'Signals' },
  { id: 6, name: 'javascript', value: 'JavaScript' },
  { id: 7, name: 'hr', value: 'HR' },
  { id: 8, name: 'ai', value: 'Artificial Intelligence' },
  { id: 9, name: 'question_design', value: 'Question Design' },
  { id: 10, name: 'question_design2', value: 'Question Design2' },
  { id: 11, name: 'question_design22', value: 'Question Design22' },
];