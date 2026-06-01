import { createReducer, on } from "@ngrx/store";
import { initialState } from "./blog.state";
import { createBlog, loadBlogs, loadBlogsFailure, loadBlogsSuccess } from "./blog.action";

export const blogReducer = createReducer(
    initialState,
    on(loadBlogs, (state) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(loadBlogsSuccess, (state, { blogs }) => ({
        ...state,
        blogs,
        loading: false,
        error: null
    })),

    on(loadBlogsFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    // CREATE
    on(createBlog, (state, { blog }) => ({
        ...state,
        blogs: [...state.blogs, blog],
    })),

    //TODO blog detail will be written here
)