import { createAction, props } from '@ngrx/store';
import { Coding } from '../models.ts/coding.models';

// -----------------------------
// Types
// -----------------------------
export type Language = 'angular' | 'javascript' | 'coding';

// -----------------------------
// Coding Actions
// -----------------------------

// Load Coding List
export const loadCoding = createAction(
  '[Coding] Load',
  props<{ language: Language }>()
);

// Load Coding Success
export const loadCodingSuccess = createAction(
  '[Coding] Load Success',
  props<{ codings: Coding[] }>()
);

// Load Coding Failure
export const loadCodingFailure = createAction(
  '[Coding] Load Failure',
  props<{ error: string }>()
);

// Load Coding Details by Id
export const loadCodingById = createAction(
  '[Coding] Load By Id',
  props<{ id: number; language: Language }>()
);

// Load Coding Details Success
export const loadCodingByIdSuccess = createAction(
  '[Coding] Load By Id Success',
  props<{ coding: Coding }>()
);

// Load Coding Details Failure
export const loadCodingByIdFailure = createAction(
  '[Coding] Load By Id Failure',
  props<{ error: string }>()
);
