import { createReducer, on } from '@ngrx/store';
import { loadQuestions, loadQuestionsSuccess, loadQuestionsFailure, loadQuestionByIdSuccess, loadQuestionByIdFailure } from './angular.action';
import { initialState } from './angular.state';


export const angularReducer = createReducer(
  initialState,

  // When loadQuestions is dispatched, set loading true and clear errors
  on(loadQuestions, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  // On success, update questions and stop loading
  on(loadQuestionsSuccess, (state, { questions }) => ({
    ...state,
    questions,
    loading: false,
    error: null,
  })),

  // On failure, capture error and stop loading
  on(loadQuestionsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),


  // Load Question Details Component

  on(loadQuestionByIdSuccess, (state, { question }) => ({
    ...state,
    selectedQuestion: question,
    error: null
  })),
  on(loadQuestionByIdFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
