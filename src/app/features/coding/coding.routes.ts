import { Routes } from "@angular/router";
import { Coding } from "./coding";
import { CodingDesignComponent } from "./coding-design-component/coding-design-component";
import { CodingDesign2Component } from "./coding-design2-component/coding-design2-component";
import { CodingPracticeComponent } from "./coding-practice-component/coding-practice-component";
import { CodingListComponent } from "./coding-list-component/coding-list-component";
import { CodingDetailComponent } from "./coding-detail-component/coding-detail-component";

export const CODING_ROUTES: Routes = [
    {
        path: '',
        component: Coding,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'codings' },
            { path: 'codings', component: CodingListComponent },
            { path: 'coding/:id', component: CodingDetailComponent },
        ]
    },
    { path: 'practice', component: CodingPracticeComponent },
    { path: 'design', component: CodingDesignComponent },
    { path: 'design-2', component: CodingDesign2Component },
    // { path: '', pathMatch: 'full', redirectTo: 'Coding' },
];