import { Routes } from "@angular/router";
import { Angular } from "./angular";
import { AngularQuestionDetails } from "./angular-question-details/angular-question-details";


export const angularRoutes: Routes = [
    { path: 'angular', component: Angular },
    { path: 'angular/:id', component: AngularQuestionDetails },
];