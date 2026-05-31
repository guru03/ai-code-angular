export interface Blog {
    id: string;
    title: string;
    content: string;
}

export interface BlogState {
    blogs: Blog[],
    selectedBlog: Blog | null,
    loading: boolean,
    error?: string | null,
}