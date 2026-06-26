import { createReducer, on } from '@ngrx/store';
import { initialState } from './coding.state';
import { CodingState } from '../models.ts/coding.models';
import {
  loadCoding,
  loadCodingSuccess,
  loadCodingFailure,
  loadCodingById,
  loadCodingByIdSuccess,
  loadCodingByIdFailure,
} from './coding.action';

export const codingReducer = createReducer(
  initialState,

  // -----------------------------
  // Load Coding List
  // -----------------------------
  on(loadCoding, (state): CodingState => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadCodingSuccess, (state, { codings }): CodingState => ({
    ...state,
    codings,
    loading: false,
    error: null,
  })),

  on(loadCodingFailure, (state, { error }): CodingState => ({
    ...state,
    loading: false,
    error,
  })),

  // -----------------------------
  // Load Coding By Id
  // -----------------------------
  on(loadCodingById, (state): CodingState => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadCodingByIdSuccess, (state, { coding }): CodingState => ({
    ...state,
    selectedCoding: coding,
    loading: false,
    error: null,
  })),

  on(loadCodingByIdFailure, (state, { error }): CodingState => ({
    ...state,
    loading: false,
    error,
  }))
);
