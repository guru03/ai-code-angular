import { createReducer, on } from "@ngrx/store";
import { initialState } from "./blog.state";
import { createBlog, deleteBlog, loadBlogs, loadBlogsFailure, loadBlogsSuccess, updateBlog } from "./blog.action";

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

    // UPDATE
    on(updateBlog, (state, { blog }) => ({
        ...state,
        blogs: state.blogs.map(item => item.id === blog.id ? blog : item),
    })),

    // DELETE
    on(deleteBlog, (state, { id }) => ({
        ...state,
        blogs: state.blogs.filter(b => b.id !== id),
    }))

    //TODO blog detail will be written here
)
