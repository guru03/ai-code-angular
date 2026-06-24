import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProgrammingState } from '../models.ts/coding.models';

// -----------------------------
// Feature Selector
// -----------------------------
export const selectProgrammingState =
  createFeatureSelector<ProgrammingState>('codings');

// -----------------------------
// Basic Selectors
// -----------------------------
export const selectProgrammings = createSelector(
  selectProgrammingState,
  (state: ProgrammingState) => state.programmings
);

export const selectLoading = createSelector(
  selectProgrammingState,
  (state: ProgrammingState) => state.loading
);

export const selectError = createSelector(
  selectProgrammingState,
  (state: ProgrammingState) => state.error
);

export const selectSelectedProgram = createSelector(
  selectProgrammingState,
  (state: ProgrammingState) => state.selectedProgram
);

// -----------------------------
// Derived Selectors
// -----------------------------

// Count questions by category (language + "All")
export const getCategoryCounts = (languages: { name: string }[]) =>
  createSelector(selectProgrammings, (programmings) =>
    programmings.reduce<Record<string, number>>(
      (counts, program) => ({
        ...counts,
        [languages[0].name]: (counts[languages[0].name] ?? 0) + 1,
        [program.language]: (counts[program.language] ?? 0) + 1,
      }),
      { [languages[0].name]: 0 }
    )
  );

// Filter by category
export const selectQuestionsByCategory = (category: string, languages: { name: string }[]) =>
  createSelector(selectProgrammings, (programmings) =>
    category === languages[0].name
      ? programmings
      : programmings.filter((p) => p.language === category)
  );

// Filter by category + topic
export const selectQuestionBankByFilters = (
  category: string,
  topic: string | null,
  languages: { name: string }[]
) =>
  createSelector(selectProgrammings, (programmings) => {
    const normalizedTopic = topic?.toLowerCase();

    return programmings.filter((program) => {
      const matchesCategory =
        category === languages[0].name || program.language === category;
      const matchesTopic =
        !normalizedTopic || program.topic.toLowerCase() === normalizedTopic;

      return matchesCategory && matchesTopic;
    });
  });
