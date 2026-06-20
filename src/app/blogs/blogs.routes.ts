import { Routes } from "@angular/router";
import { BlogDetail } from "./blog-detail/blog-detail";
import { BlogList } from "./blog-list/blog-list";
import { AddBlog } from "./add-blog/add-blog";
import { Blogs } from "./blogs/blogs";

export const BLOGS_ROUTES: Routes = [
    {
        path: '',
        component: BlogList,
        children: [

            { path: 'details/:id', component: BlogDetail },
            { path: 'add-blog', component: AddBlog },
            { path: 'edit/:id', component: AddBlog },
        ]
    },
    { path: 'blogs', component: Blogs }, //todo this Component will be removed after modification blog list
];