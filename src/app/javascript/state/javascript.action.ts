import { createAction, props } from "@ngrx/store";
import { Question } from "../../models/question.model";

// Load Questions
export const loadQuestions = createAction(
    '[Javascript] Load Questions'
);

// Load Questions Success
export const loadQuestionsSuccess = createAction(
    '[Javascript] Load Questions Success',
    props<{ questions: Question[] }>()
);

// Load Questions Failure
export const loadQuestionsFailure = createAction(
    '[Javascript] Load Questions Failure',
    props<{ error: string }>()
);

// Load Question Details Component

export const loadQuestionById = createAction(
  '[Javascript] Load Question By Id',
  props<{ id: number }>()
);

export const loadQuestionByIdSuccess = createAction(
  '[Javascript] Load Question By Id Success',
  props<{ question: Question }>()
);

export const loadQuestionByIdFailure = createAction(
  '[Javascript] Load Question By Id Failure',
  props<{ error: string }>()
);
