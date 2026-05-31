import { Routes } from "@angular/router";
import { BlogDetail } from "./blog-detail/blog-detail";
import { BlogList } from "./blog-list/blog-list";

export const BLOGS_ROUTES: Routes = [
    {
        path: '',
        component: BlogList,
        children: [
            { path: 'angular-list', component: BlogList },
            { path: 'angular/:id', component: BlogDetail },
        ]
    },
];