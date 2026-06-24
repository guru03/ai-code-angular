import { RouterReducerState } from "@ngrx/router-store";
import { QuestionsState } from "../models/question.model";
import { BlogState } from "../models/blog.model";
import { QuestionBankState } from "../features/question-bank-component/models/question-bank.models";
import { ProgrammingState } from "../features/coding/models.ts/coding.models";


export interface AppState {
    questionBank: QuestionBankState;
    codings: ProgrammingState;
    questions: QuestionsState;
    blogs: BlogState;
    router: RouterReducerState;
}
