import { createReducer, on } from '@ngrx/store';
import { loadQuestions, loadQuestionsSuccess, loadQuestionsFailure } from './angular.action';
import { Question, QuestionsState } from '../../models/question.model';

export const initialState: QuestionsState = {
  questions: [],
  loading: false,
  error: null,
};

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
  }))
);
