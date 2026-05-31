import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { angularReducer } from "../angular/state/angular.reducer";
import { routerReducer } from "@ngrx/router-store";
import { blogReducer } from "../blogs/state/blog.reducer";


export const appReducer: ActionReducerMap<AppState> = {
    router: routerReducer,
    questions: angularReducer,
    blogs: blogReducer
}
