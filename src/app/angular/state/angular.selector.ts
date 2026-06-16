import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LANGUAGES, QuestionsState } from "../../models/question.model";


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
                // instead of hardcoding "All", use the first entry from LANGUAGES
                [LANGUAGES[0].name]: (counts[LANGUAGES[0].name] ?? 0) + 1,
                [question.language]: (counts[question.language] ?? 0) + 1,
            }),
            { [LANGUAGES[0].name]: 0 } // initialize with dynamic "All"
        );
    }
);

export const selectQuestionsByCategory = (category: string) =>
    createSelector(
        selectAngularState,
        (state: QuestionsState) => {
            if (category === LANGUAGES[0].name) {
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
