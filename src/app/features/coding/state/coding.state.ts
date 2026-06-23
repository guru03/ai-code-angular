import { ProgrammingState } from "../models.ts/coding.models";


export const initialState: ProgrammingState = {
    programmings:[],
    selectedProgram: null,
    loading: false,
    error: null
}