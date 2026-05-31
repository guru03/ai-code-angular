import { BlogState } from "../../models/blog.model";


export const initialState: BlogState = {
    blogs: [
        {
            id: '1',
            title: 'First Blog Post',
            content: 'This is the content of the first blog post.',
        },

        {
            id: '2',
            title: 'Second Blog Post',
            content: 'This is the content of the second blog post.',
        },
        {
            id: '3',
            title: 'Third Blog Post',
            content: 'This is the content of the third blog post.',
        },
        {
            id: '4',
            title: 'Fourth Blog Post',
            content: 'This is the content of the fourth blog post.',
        },
        {
            id: '5',
            title: 'Fifth Blog Post',
            content: 'This is the content of the fifth blog post.',
        }
    ],
    selectedBlog: null,
    loading: true,
    error: null,
};