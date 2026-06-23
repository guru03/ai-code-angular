import { Routes } from "@angular/router";
import { Coding } from "./coding";
import { CodingDesignComponent } from "./coding-design-component/coding-design-component";
import { CodingDesign2Component } from "./coding-design2-component/coding-design2-component";
import { CodingPracticeComponent } from "./coding-practice-component/coding-practice-component";

export const CODING_ROUTES: Routes = [
    { path: '', component: Coding },
    { path: 'coding', component: Coding },
    { path: 'practice', component: CodingPracticeComponent },
    { path: 'design', component: CodingDesignComponent },
    { path: 'design-2', component: CodingDesign2Component },
    { path: '', pathMatch: 'full', redirectTo: 'Coding' },
];