import { Routes } from "@angular/router";
import { AngularDesign } from "./angular-design/angular-design";
import { Interview } from "./interview/interview";
import { Interview1 } from "./interview-1/interview-1";
import { Blogs } from "./blogs/blogs";


export const DESIGN_ROUTES: Routes = [
    {
        path: 'design', component: AngularDesign
    },
    { path: 'interview-1', component: Interview1 },
    { path: 'interview', component: Interview },
    { path: 'blogs', component: Blogs },
];