import { RouterReducerState } from "@ngrx/router-store";
import { QuestionsState } from "../models/question.model";
import { BlogState } from "../models/blog.model";


export interface AppState {
    questions: QuestionsState;
    blogs: BlogState;
    router: RouterReducerState;
}
