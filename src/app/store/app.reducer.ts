import { Action, ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { angularReducer } from "../angular/state/angular.reducer";
import { javascriptReducer } from "../javascript/state/javascript.reducer";
import { routerReducer } from "@ngrx/router-store";
import { blogReducer } from "../blogs/state/blog.reducer";
import { QuestionsState } from "../models/question.model";

const questionsReducer = (state: QuestionsState | undefined, action: Action) => {
    const angularState = angularReducer(state, action);
    return javascriptReducer(angularState, action);
};


export const appReducer: ActionReducerMap<AppState> = {
    router: routerReducer,
    questions: questionsReducer,
    blogs: blogReducer
}
