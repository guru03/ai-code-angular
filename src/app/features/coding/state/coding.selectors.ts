import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CodingState } from '../models.ts/coding.models';

// -----------------------------
// Feature Selector
// -----------------------------
export const selectCodingState =
  createFeatureSelector<CodingState>('codings');

// -----------------------------
// Basic Selectors
// -----------------------------
export const selectCodings = createSelector(
  selectCodingState,
  (state: CodingState) => state.codings
);

export const selectLoading = createSelector(
  selectCodingState,
  (state: CodingState) => state.loading
);

export const selectError = createSelector(
  selectCodingState,
  (state: CodingState) => state.error
);

export const selectSelectedCoding = createSelector(
  selectCodingState,
  (state: CodingState) => state.selectedCoding
);

// -----------------------------
// Derived Selectors
// -----------------------------

// Count codings by category (language + "All")
export const getCategoryCounts = (languages: { name: string }[]) =>
  createSelector(selectCodings, (codings) =>
    codings.reduce<Record<string, number>>(
      (counts, coding) => ({
        ...counts,
        [languages[0].name]: (counts[languages[0].name] ?? 0) + 1,
        [coding.language]: (counts[coding.language] ?? 0) + 1,
      }),
      { [languages[0].name]: 0 }
    )
  );

// Filter by category
export const selectCodingsByCategory = (
  category: string,
  languages: { name: string }[]
) =>
  createSelector(selectCodings, (codings) =>
    category === languages[0].name
      ? codings
      : codings.filter((c) => c.language === category)
  );

// Filter by category + topic
export const selectCodingBankByFilters = (
  category: string,
  topic: string | null,
  languages: { name: string }[]
) =>
  createSelector(selectCodings, (codings) => {
    const normalizedTopic = topic?.toLowerCase();
    return codings.filter((coding) => {
      const matchesCategory =
        category === languages[0].name || coding.language === category;
      const matchesTopic =
        !normalizedTopic || coding.topic.toLowerCase() === normalizedTopic;
      return matchesCategory && matchesTopic;
    });
  });
