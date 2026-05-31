import { createReducer, on } from "@ngrx/store";
import { initialState } from "./blog.state";
import { loadBlogs, loadBlogsFailure, loadBlogsSuccess } from "./blog.action";

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
    }))

    //TODO blog detail will be written here
)