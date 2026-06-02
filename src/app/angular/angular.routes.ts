import { Routes } from "@angular/router";
import { Angular } from "./angular";
import { AngularQuestionDetails } from "./angular-question-details/angular-question-details";
import { AngularQuestionList } from "./angular-question-list/angular-question-list";
import { QuestionDetails } from "./question-details/question-details";


export const ANGULAR_ROUTES: Routes = [
    {
        path: '',
        component: Angular,
        children: [
            { path: 'questions', component: AngularQuestionList },
            { path: 'questions/:id', component: AngularQuestionDetails },
            { path: 'redesign', component: QuestionDetails },
        ]
    },
];