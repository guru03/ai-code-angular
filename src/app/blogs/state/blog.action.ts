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


export const selectBlog = createAction(
    '[Blog List] Select Blog',
    props<{ blogId: string }>()
);

export const selectBlogSuccess = createAction(
    '[Blog List] Select Blog Success',
    props<{ blog: Blog }>()
);

export const selectBlogFailure = createAction(
    '[Blog List] Select Blog Failure',
    props<{ error: any }>()
);

// CREATE
export const createBlog = createAction(
    '[Blog] Create Blog',
    props<{ blog: Blog }>()
);
export const createBlogSuccess = createAction(
    '[Blog] Create Blog Success',
    props<{ blog: Blog }>()
);
export const createBlogFailure = createAction(
    '[Blog] Create Blog Failure',
    props<{ error: any }>()
);

// UPDATE
export const updateBlog = createAction(
    '[Blog] Update Blog',
    props<{ blog: Blog }>()
);
export const updateBlogSuccess = createAction(
    '[Blog] Update Blog Success',
    props<{ blog: Blog }>()
);
export const updateBlogFailure = createAction(
    '[Blog] Update Blog Failure',
    props<{ error: any }>()
);

// DELETE
export const deleteBlog = createAction(
    '[Blog] Delete Blog',
    props<{ id: string }>()
);
export const deleteBlogSuccess = createAction(
    '[Blog] Delete Blog Success',
    props<{ id: string }>()
);
export const deleteBlogFailure = createAction(
    '[Blog] Delete Blog Failure',
    props<{ error: any }>()
);
