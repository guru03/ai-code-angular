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
  question: string;
  answer: string;
  answer2?: string;

  codeLanguage: string;
  codeTitle: string;
  codeEditor: string;


  codeLanguage2: string;
  codeTitle2: string;
  codeEditor2: string;


  codeLanguage3: string;
  codeTitle3: string;
  codeEditor3: string;

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
  code_title: string;
  code_editor: string;

  code_language2: string;
  code_title2: string;
  code_editor2: string;

  code_language3: string;
  code_title3: string;
  code_editor3: string;

  imageUrl?: string;
  image2Url?: string;
  image3Url?: string;
}

export interface QuestionBankState {
  questions: QuestionBank[];
  selectedQuestion: QuestionBank | null;
  // topicCounts: Record<string, number>;
  topicCounts: TopicCount[];
  loading: boolean;
  error: string | null;
}

export interface TopicCount {
  topic: string;   // the topic key, e.g. "rxjs"
  total: number;   // how many questions belong to that topic
}


