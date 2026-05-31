import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogState } from "../../models/blog.model";


export const selectBlogState = createFeatureSelector<BlogState>('blogs');

export const selectAllBlogs = createSelector(
    selectBlogState,
    (state: BlogState) => state.blogs
);

export const selectLoading = createSelector(
    selectBlogState,
    (state: BlogState) => state.loading
);

export const selectError = createSelector(
    selectBlogState,
    (state: BlogState) => state.error
)