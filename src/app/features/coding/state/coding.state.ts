import { CodingState } from "../models.ts/coding.models";

export const initialState: CodingState = {
    codings: [],
    selectedCoding: null,
    loading: false,
    error: null
};
