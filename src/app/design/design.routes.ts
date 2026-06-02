import { Routes } from "@angular/router";
import { AngularDesign } from "./angular-design/angular-design";


export const DESIGN_ROUTES: Routes = [
    {
        path: '',
        component: AngularDesign,
        children: [
            { path: 'angular-design', component: AngularDesign },
        ]
    },
];