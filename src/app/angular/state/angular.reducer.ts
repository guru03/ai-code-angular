import { createReducer } from "@ngrx/store";
import { initialState } from "./angular.state";


const _angularReducer = createReducer(initialState);

export function angularReducer(state: any, action: any) {
    return _angularReducer(state, action);
}