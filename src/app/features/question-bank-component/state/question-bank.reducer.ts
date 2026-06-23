import { createReducer, on } from "@ngrx/store";
import { initialState } from "./question-bank.state";
import { QuestionBankState } from "../models/question-bank.models";
import {
    loadQuestionBank,
    loadQuestionBankSuccess,
    loadQuestionBankFailure,
    loadQuestionBankById,
    loadQuestionBankByIdSuccess,
    loadQuestionBankByIdFailure,
} from "./question-bank.action";

export const questionBankReducer = createReducer(
    initialState,

    // Load Question Bank
    on(loadQuestionBank, (state): QuestionBankState => ({
        ...state,
        loading: true,
        error: null,
    })),

    // Load Question Bank Success
    on(loadQuestionBankSuccess, (state, { questions }): QuestionBankState => ({
        ...state,
        questions,
        loading: false,
        error: null,
    })),

    // Load Question Bank Failure
    on(loadQuestionBankFailure, (state, { error }): QuestionBankState => ({
        ...state,
        loading: false,
        error,
    })),

    // Load Question Bank By Id
    on(loadQuestionBankById, (state): QuestionBankState => ({
        ...state,
        loading: true,
        error: null,
    })),

    // Load Question Bank By Id Success
    on(loadQuestionBankByIdSuccess, (state, { question }): QuestionBankState => ({
        ...state,
        selectedQuestion: question,
        loading: false,
        error: null,
    })),

    // Load Question Bank By Id Failure
    on(loadQuestionBankByIdFailure, (state, { error }): QuestionBankState => ({
        ...state,
        loading: false,
        error,
    }))
);
