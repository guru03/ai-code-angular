import { createAction, props } from "@ngrx/store";
import { Blog } from "../../models/blog.model";

export const loadBlogs = createAction('[Blog List] Load Blogs');

export const loadBlogsSuccess = createAction(
    '[Blog List] Load Blogs Success',
    props<{ blogs: Blog[] }>()
);
export const loadBlogsFailure = createAction(
    '[Blog List] Load Blogs Failure',
    props<{ error: any }>()
);

//TODO Select Blog

// export const selectBlog = createAction(
//     '[Blog List] Select Blog',
//     props<{ blogId: string }>()
// );

// export const selectBlogSuccess = createAction(
//     '[Blog List] Select Blog Success',
//     props<{ blog: Blog }>()
// );

// export const selectBlogFailure = createAction(
//     '[Blog List] Select Blog Failure',
//     props<{ error: any }>()
// );