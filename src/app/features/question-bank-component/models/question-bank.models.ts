import { WorkStatus } from "../../../enum/enum";

export interface QuestionBank {
  id: number;
  serialNumber: number;
  language: string;
  label: string;
  category: string;
  topicLabel: string;
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

export interface QuestionBankDto {
  id: number;
  serial_number: number;
  language: string;
  label: string;
  category: string;
  topic: string;
  visible: boolean;
  content_status: WorkStatus;

  question: string;
  answer: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;

  code_language: string;
  code_block_title: string;
  code_block: string;

  code_language2: string;
  code_block_title2: string;
  code_block2: string;

  code_language3: string;
  code_block_title3: string;
  code_block3: string;

  imageUrl?: string;
  image2Url?: string;
  image3Url?: string;
}

export interface QuestionBankState {
  questions: QuestionBank[];
  selectedQuestion: QuestionBank | null;
  loading: boolean;
  error: string | null;
}


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
];

export interface Topic {
  name: string;
  value: string;
}

export const TOPICS: Topic[] = [
  { name: 'angular_fundamentals',   value: 'Angular Fundamentals' },
  { name: 'components_templates',   value: 'Components & Templates' },
  { name: 'directives_pipes',       value: 'Directives & Pipes' },
  { name: 'dependency_injection',   value: 'Dependency Injection & Services' },
  { name: 'component_lifecycle',    value: 'Component Lifecycle' },
  { name: 'routing',                value: 'Routing' },
  { name: 'forms',                  value: 'Forms' },
  { name: 'http',                   value: 'HTTP & APIs' },
  { name: 'rxjs',                   value: 'RxJS' },
  { name: 'signals',                value: 'Signals' },
  { name: 'state_management',       value: 'State Management' },
  { name: 'angular_material',       value: 'Angular Material' },
  { name: 'advanced_angular',       value: 'Advanced Angular' },
  { name: 'ssr_hydration',          value: 'SSR & Hydration' },
  { name: 'testing',                value: 'Testing' },
  { name: 'performance',            value: 'Performance' },
  { name: 'security',               value: 'Security' },
  { name: 'build_deployment',       value: 'Build & Deployment' },
  { name: 'angular_ecosystem',      value: 'Angular Ecosystem' },
  { name: 'expert_angular',         value: 'Expert Angular' },
];

