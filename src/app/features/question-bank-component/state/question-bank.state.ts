import { QuestionBankState } from "../models/question-bank.models";

export const initialState: QuestionBankState = {
    questions: [],
    topicCounts: [],
    selectedQuestion: null,
    loading: false,
    error: null,
}