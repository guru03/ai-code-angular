import { createAction, props } from "@ngrx/store";
import { Question } from "../../models/question.model";

// Load Questions
export const loadQuestions = createAction(
    '[Angular] Load Questions'
);

// Load Questions Success
export const loadQuestionsSuccess = createAction(
    '[Angular] Load Questions Success',
    props<{ questions: Question[] }>()
);

// Load Questions Failure
export const loadQuestionsFailure = createAction(
    '[Angular] Load Questions Failure',
    props<{ error: string }>()
);

// Load Question Details Component

export const loadQuestionById = createAction(
  '[Angular] Load Question By Id',
  props<{ id: number }>()
);

export const loadQuestionByIdSuccess = createAction(
  '[Angular] Load Question By Id Success',
  props<{ question: Question }>()
);

export const loadQuestionByIdFailure = createAction(
  '[Angular] Load Question By Id Failure',
  props<{ error: string }>()
);
