import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuestionsState } from "../../models/question.model";


const selectAngularState = createFeatureSelector<QuestionsState>('questions');

export const getQuestions = createSelector(
    selectAngularState,
    (state: QuestionsState) => {
        return state.questions;
    }
);

export const getCategoryCounts = createSelector(
    selectAngularState,
    (state: QuestionsState) => {
        return state.questions.reduce<Record<string, number>>(
            (counts, question) => ({
                ...counts,
                All: counts['All'] + 1,
                [question.language]: (counts[question.language] ?? 0) + 1,
            }),
            { All: 0 }
        );
    }
);

export const selectQuestionsByCategory = (category: string) =>
    createSelector(
        selectAngularState,
        (state: QuestionsState) => {
            if (category === 'All') {
                return state.questions;
            } else {
                return state.questions.filter(q => q.language === category);
            }
        }
    );

// Load Question Details Component

export const getSelectedQuestion = createSelector(
    selectAngularState,
    (state: QuestionsState) => state.selectedQuestion ?? null
);
