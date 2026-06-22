import { WorkStatus } from "../enum/enum";

export interface Question {
  id: number;
  serial_number: number;
  language: string;
  label: string;
  category: string;
  topic: string;
  visible: boolean;
  content_status: WorkStatus;
  // status: WorkStatus;
  question: string;
  answer: string;
  answer2?: string;

  code_language: string;
  code_block_title: string;
  code_block: string;


  code_language2: string;
  code_block_title2: string;
  code_block2: string;


  code_language3: string;
  code_block_title3: string;
  code_block3: string;

  answer3?: string;
  answer4?: string;
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

export interface Topics {
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
];

export const TOPICS: Topics[] = [
  { id: 1, name: 'pipes', value: 'Pipes' },
  { id: 2, name: 'compilation', value: 'Compilation' },
  { id: 3, name: 'Components', value: 'components' },
  { id: 3, name: 'Web Storage', value: 'Web Storage' },
  
];

// export interface Label {
//   id: number;
//   name: string;   // backend value
//   label: string;  // frontend display
// }

// export const LABELS: Label[] = [
//   { id: 1, name: 'beginner', label: 'Beginner' },
//   { id: 2, name: 'intermediate', label: 'Intermediate' },
//   { id: 3, name: 'advanced', label: 'Advanced' },
//   { id: 4, name: 'expert', label: 'Expert' },
//   { id: 5, name: 'mastery', label: 'Mastery' },
// ];