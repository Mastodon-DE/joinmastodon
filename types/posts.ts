export interface FrontMatter {
    title: string;
    description: string;
    image: string;
    created_at: string;
    private?: string;
    author: string;
    author_image: string;
    author_handle: string;
}

export interface Post {
    title: string;
    description: string;
    image: string;
    banner?: string;
    author: Author;
    private: boolean;
    created_at: string;
    content: string;
    path: string;
}

export interface Author {
    name: string;
    image: string;
    handle: string;
}
