import { createAction, props } from '@ngrx/store';
import { QuestionBank, TopicCount } from '../models/question-bank.models';
import { SupportedLanguage } from '../models/language.models';


// -----------------------------
// Types
// -----------------------------
// export type Language = 'angular' | 'javascript';

// -----------------------------
// Question Bank Actions
// -----------------------------

// Load Question Bank
export const loadQuestionBank = createAction(
  '[Question Bank] Load',
  props<{ language: SupportedLanguage['name'] }>()
);

// Load Question Bank Success
export const loadQuestionBankSuccess = createAction(
  '[Question Bank] Load Success',
  props<{ questions: QuestionBank[] }>()
);

// Load Question Bank Failure
export const loadQuestionBankFailure = createAction(
  '[Question Bank] Load Failure',
  props<{ error: string }>()
);

// Load Question Bank Details by Id
export const loadQuestionBankById = createAction(
  '[Question Bank] Load By Id',
  props<{ id: number; language: SupportedLanguage['name'] }>()
);

// Load Question Bank Details Success
export const loadQuestionBankByIdSuccess = createAction(
  '[Question Bank] Load By Id Success',
  props<{ question: QuestionBank }>()
);

// Load Question Bank Details Failure
export const loadQuestionBankByIdFailure = createAction(
  '[Question Bank] Load By Id Failure',
  props<{ error: string }>()
);


// -----------------------------
// Topic Count Actions
// -----------------------------
export const loadTopicCounts = createAction('[Question Bank] Load Topic Counts');

export const loadTopicCountsSuccess = createAction(
  '[Question Bank] Load Topic Counts Success',
  props<{ summary: TopicCount[] }>()
);

export const loadTopicCountsFailure = createAction(
  '[Question Bank] Load Topic Counts Failure',
  props<{ error: string }>()
);