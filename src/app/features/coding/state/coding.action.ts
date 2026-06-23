import { createAction, props } from '@ngrx/store';
import { Programming } from '../models.ts/coding.models';

// -----------------------------
// Types
// -----------------------------
export type Language = 'angular' | 'javascript';

// -----------------------------
// Programming Actions
// -----------------------------

// Load Programming
export const loadProgramming = createAction(
  '[Programming] Load',
  props<{ language: Language }>()
);

// Load Programming Success
export const loadProgrammingSuccess = createAction(
  '[Programming] Load Success',
  props<{ programmings: Programming[] }>()
);

// Load Programming Failure
export const loadProgrammingFailure = createAction(
  '[Programming] Load Failure',
  props<{ error: string }>()
);

// Load Programming Details by Id
export const loadProgrammingById = createAction(
  '[Programming] Load By Id',
  props<{ id: number; language: Language }>()
);

// Load Programming Details Success
export const loadProgrammingByIdSuccess = createAction(
  '[Programming] Load By Id Success',
  props<{ programming: Programming }>()
);

// Load Programming Details Failure
export const loadProgrammingByIdFailure = createAction(
  '[Programming] Load By Id Failure',
  props<{ error: string }>()
);
