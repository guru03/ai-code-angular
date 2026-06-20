import { createReducer, on } from '@ngrx/store';
import { loadQuestions, loadQuestionsSuccess, loadQuestionsFailure, loadQuestionByIdSuccess, loadQuestionByIdFailure } from './javascript.action';
import { initialState } from './javascript.state';
import { QuestionsState } from '../../models/question.model';


export const javascriptReducer = createReducer(
  initialState,

  // When loadQuestions is dispatched, set loading true and clear errors
  on(loadQuestions, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  // On success, update questions and stop loading
  on(loadQuestionsSuccess, (state: QuestionsState, { questions }) => ({
    ...state,
    questions,
    loading: false,
    error: null,
  })),

  // On failure, capture error and stop loading
  on(loadQuestionsFailure, (state: QuestionsState, { error }) => ({
    ...state,
    loading: false,
    error,
  })),


  // Load Question Details Component

  on(loadQuestionByIdSuccess, (state: QuestionsState, { question }) => ({
    ...state,
    selectedQuestion: question,
    error: null
  })),
  on(loadQuestionByIdFailure, (state: QuestionsState, { error }) => ({
    ...state,
    error
  }))
);
