import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuestionsState } from "../../models/question.model";


const selectAngularState = createFeatureSelector<QuestionsState>('questions');

export const getQuestions = createSelector(
    selectAngularState,
    (state: QuestionsState) => {
        return state.questions;
    }
);

export const getLanguageCounts = createSelector(
    selectAngularState,
    (state: QuestionsState) => {
        return state.questions.reduce<Record<string, number>>((counts, question) => {
            counts['All'] = (counts['All'] ?? 0) + 1;
            const lang = question.language.name;
            counts[lang] = (counts[lang] ?? 0) + 1;
            return counts;
        }, { All: 0 });
    }
);

export const selectQuestionsByLanguage = (language: string) =>
    createSelector(
        selectAngularState,
        (state: QuestionsState) => {
            if (language === 'All') {
                return state.questions;
            } else {
                return state.questions.filter(q => q.language.name === language);
            }
        }
    );

// Load Question Details Component

export const getSelectedQuestion = createSelector(
    selectAngularState,
    (state: QuestionsState) => state.selectedQuestion ?? null
);
