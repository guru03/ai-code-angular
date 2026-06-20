import { Routes } from "@angular/router";
import { Coding } from "./coding";
import { CodingPractice } from "../coding-practice/coding-practice";
import { CodingDesignComponent } from "./coding-design-component/coding-design-component";
import { CodingDesign2Component } from "./coding-design2-component/coding-design2-component";

export const CODING_ROUTES: Routes = [
    {
        path: '',
        component: Coding,
        children: [
            { path: 'practice', component: CodingPractice },
            { path: 'design', component: CodingDesignComponent },
            { path: 'design-2', component: CodingDesign2Component },
        ]
    }
];
