import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuestionsState } from "../../models/question.model";

const getAngularState = createFeatureSelector<QuestionsState>('questions');

export const getQuestions = createSelector(
    getAngularState,
    (state: QuestionsState) => {
        return state.questions;
    }
);
