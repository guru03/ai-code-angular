import { Routes } from "@angular/router";
import { Angular } from "./angular";
import { AngularQuestionDetails } from "./angular-question-details/angular-question-details";
import { AngularQuestionList } from "./angular-question-list/angular-question-list";


export const ANGULAR_ROUTES: Routes = [
    {
        path: '',
        component: Angular,
        children: [
            { path: 'angular-list', component: AngularQuestionList },
            { path: 'angular/:id', component: AngularQuestionDetails },
        ]
    },
];