import { RouterReducerState } from "@ngrx/router-store";
import { QuestionsState } from "../models/question.model";


export interface AppState {
    questions: QuestionsState;
    router: RouterReducerState;
}
