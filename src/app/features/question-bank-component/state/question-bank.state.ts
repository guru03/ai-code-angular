import { QuestionBankState } from "./models/question-bank.models";

export const initialState: QuestionBankState = {
    questions:[],
    selectedQuestion: null,
    loading: false,
    error: null
}