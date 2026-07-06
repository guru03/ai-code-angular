import { Routes } from "@angular/router";
import { QuestionBankComponent } from "./question-bank-component";
import { QuestionListComponent } from "./question-list-component/question-list-component";
import { QuestionDetailsComponent } from "./question-details-component/question-details-component";
import { QuestionBankEditComponent } from "./question-bank-edit-component/question-bank-edit-component";
import { QuestionEditDesignComponent } from "./question-edit-design-component/question-edit-design-component";
import { QuestionEditDesign2Component } from "./question-edit-design2-component/question-edit-design2-component";
import { Component } from "@angular/core";
import { QuestionEditDesign4Component } from "./question-edit-design4-component/question-edit-design4-component";
import { QuestionEditDesign3Component } from "./question-edit-design3-component/question-edit-design3-component";


export const QUESTION_BANK_ROUTES: Routes = [
    {
        path: '',
        component: QuestionBankComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'questions' },
            { path: 'questions', component: QuestionListComponent },
            { path: 'questions/:id', component: QuestionDetailsComponent },
            { path: 'edit/:id', component: QuestionEditDesignComponent },
        ]
    },
    { path: 'edit2', component: QuestionEditDesign2Component },
    { path: 'edit3', component: QuestionEditDesign3Component },
    { path: 'edit4', component: QuestionEditDesign4Component },
];
