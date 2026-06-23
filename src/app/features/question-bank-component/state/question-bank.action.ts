import { createAction, props } from "@ngrx/store";
import { QuestionBank } from "../models/question-bank.models";

// Load Question Bank
export const loadQuestionBank = createAction(
  "[Question Bank] Load",
  props<{ language: "angular" | "javascript" }>()
);

// Load Question Bank Success
export const loadQuestionBankSuccess = createAction(
  "[Question Bank] Load Success",
  props<{ questions: QuestionBank[] }>()
);

// Load Question Bank Failure
export const loadQuestionBankFailure = createAction(
  "[Question Bank] Load Failure",
  props<{ error: string }>()
);

// Load Question Bank Details
export const loadQuestionBankById = createAction(
  "[Question Bank] Load By Id",
  props<{ id: number; language: "angular" | "javascript" }>()
);

export const loadQuestionBankByIdSuccess = createAction(
  "[Question Bank] Load By Id Success",
  props<{ question: QuestionBank }>()
);

export const loadQuestionBankByIdFailure = createAction(
  "[Question Bank] Load By Id Failure",
  props<{ error: string }>()
);
