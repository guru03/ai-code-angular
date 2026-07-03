import { Routes } from "@angular/router";
import { QuestionBankComponent } from "./question-bank-component";
import { QuestionListComponent } from "./question-list-component/question-list-component";
import { QuestionDetailsComponent } from "./question-details-component/question-details-component";
// import { QuestionBankEditComponent } from "./question-bank-edit-component/question-bank-edit-component";


export const QUESTION_BANK_ROUTES: Routes = [
    {
        path: '',
        component: QuestionBankComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'questions' },
            { path: 'questions', component: QuestionListComponent },
            { path: 'questions/:id', component: QuestionDetailsComponent },
        ]
    },
];
