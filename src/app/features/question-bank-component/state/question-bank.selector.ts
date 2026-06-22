import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LANGUAGES, QuestionBankState } from "./models/question-bank.models";


const selectAngularState = createFeatureSelector<QuestionBankState>('questions');

export const getQuestions = createSelector(
    selectAngularState,
    (state: QuestionBankState) => {
        return state.questions;
    }
);

export const selectLoading = createSelector(
    selectAngularState,
    (state: QuestionBankState) => state.loading
);

export const getCategoryCounts = createSelector(
    selectAngularState,
    (state: QuestionBankState) => {
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
        (state: QuestionBankState) => {
            if (category === LANGUAGES[0].name) {
                return state.questions;
            } else {
                return state.questions.filter(q => q.language === category);
            }
        }
    );

export const selectQuestionBankByFilters = (category: string, topic: string | null) =>
    createSelector(
        selectAngularState,
        (state: QuestionBankState) => {
            const normalizedTopic = topic?.toLowerCase();

            return state.questions.filter(question => {
                const matchesCategory =
                    category === LANGUAGES[0].name || question.language === category;
                const matchesTopic =
                    !normalizedTopic || question.topic.toLowerCase() === normalizedTopic;

                return matchesCategory && matchesTopic;
            });
        }
    );

// Load Question Details Component

export const getSelectedQuestion = createSelector(
    selectAngularState,
    (state: QuestionBankState) => state.selectedQuestion ?? null
);
