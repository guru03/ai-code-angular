import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { angularReducer } from "../angular/state/angular.reducer";


export const appReducer: ActionReducerMap<AppState> = {
    questions: angularReducer
}