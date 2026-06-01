import { Routes } from "@angular/router";
import { BlogDetail } from "./blog-detail/blog-detail";
import { BlogList } from "./blog-list/blog-list";
import { AddBlog } from "./add-blog/add-blog";

export const BLOGS_ROUTES: Routes = [
    {
        path: '',
        component: BlogList,
        children: [
            // { path: 'blogs', component: BlogList },
            { path: ':id', component: BlogDetail },
            { path: 'add-blog', component: AddBlog },
            { path: 'edit/:id', component: AddBlog },
        ]
    },
];