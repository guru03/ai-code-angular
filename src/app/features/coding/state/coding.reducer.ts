import { createReducer, on } from '@ngrx/store';
import { initialState } from './coding.state';
import { ProgrammingState } from '../models.ts/coding.models';
import {
  loadProgramming,
  loadProgrammingSuccess,
  loadProgrammingFailure,
  loadProgrammingById,
  loadProgrammingByIdSuccess,
  loadProgrammingByIdFailure,
} from './coding.action';

export const programmingReducer = createReducer(
  initialState,

  // -----------------------------
  // Load Programming
  // -----------------------------
  on(loadProgramming, (state): ProgrammingState => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadProgrammingSuccess, (state, { programmings }): ProgrammingState => ({
    ...state,
    programmings,
    loading: false,
    error: null,
  })),

  on(loadProgrammingFailure, (state, { error }): ProgrammingState => ({
    ...state,
    loading: false,
    error,
  })),

  // -----------------------------
  // Load Programming By Id
  // -----------------------------
  on(loadProgrammingById, (state): ProgrammingState => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadProgrammingByIdSuccess, (state, { programming }): ProgrammingState => ({
    ...state,
    selectedProgram: programming,
    loading: false,
    error: null,
  })),

  on(loadProgrammingByIdFailure, (state, { error }): ProgrammingState => ({
    ...state,
    loading: false,
    error,
  }))
);
