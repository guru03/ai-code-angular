import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuestionsState } from "../../models/question.model";


const selectAngularState = createFeatureSelector<QuestionsState>('questions');

export const getQuestions = createSelector(
    selectAngularState,
    (state: QuestionsState) => {
        return state.questions;
    }
);

// Load Question Details Component

export const getSelectedQuestion = createSelector(
    selectAngularState,
    (state: QuestionsState) => state.selectedQuestion ?? null
);