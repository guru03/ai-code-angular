import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { angularReducer } from "../angular/state/angular.reducer";
import { routerReducer } from "@ngrx/router-store";


export const appReducer: ActionReducerMap<AppState> = {
    questions: angularReducer,
    router: routerReducer
}
