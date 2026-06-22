import { RouterReducerState } from "@ngrx/router-store";
import { QuestionsState } from "../models/question.model";
import { BlogState } from "../models/blog.model";
import { QuestionBankState } from "../features/question-bank-component/state/models/question-bank.models";


export interface AppState {
    questionBank: QuestionBankState;
    questions: QuestionsState;
    blogs: BlogState;
    router: RouterReducerState;
}
