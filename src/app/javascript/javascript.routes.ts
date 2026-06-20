import { Routes } from "@angular/router";
import { Javascript } from "./javascript";
import { JavascriptQuestionList } from "./javascript-question-list/javascript-question-list";
import { JavascriptQuestionDetails } from "./javascript-question-details/javascript-question-details";

export const JAVASCRIPT_ROUTES: Routes = [
    {
        path: '',
        component: Javascript,
        children: [
            { path: 'questions', component: JavascriptQuestionList },
            { path: 'questions/:id', component: JavascriptQuestionDetails },
        ]
    },
];