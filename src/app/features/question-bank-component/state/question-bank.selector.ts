import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LANGUAGES, QuestionBank, QuestionBankState } from "../models/question-bank.models";

const selectQuestionBankState = createFeatureSelector<QuestionBankState>('questionBank');

const normalizeValue = (value?: string | null): string =>
    (value ?? '').toString().trim().toLowerCase();

export const getQuestions = createSelector(
    selectQuestionBankState,
    (state: QuestionBankState) => state.questions
);

export const selectLoading = createSelector(
    selectQuestionBankState,
    (state: QuestionBankState) => state.loading
);

export const getCategoryCounts = createSelector(
    selectQuestionBankState,
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
        selectQuestionBankState,
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
        selectQuestionBankState,
        (state: QuestionBankState) => {
            const normalizedTopic = normalizeValue(topic);

            return state.questions.filter((question: QuestionBank) => {
                const matchesCategory =
                    category === LANGUAGES[0].name || question.language === category;
                const matchesTopic =
                    !normalizedTopic || normalizeValue(question.topicLabel) === normalizedTopic;

                return matchesCategory && matchesTopic;
            });
        }
    );

// Load Question Details Component

export const getSelectedQuestion = createSelector(
    selectQuestionBankState,
    (state: QuestionBankState) => state.selectedQuestion ?? null
);
