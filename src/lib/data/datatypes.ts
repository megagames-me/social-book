export interface PostsResult {
    id: number;
    title: string;
    creatorId: number;
    creator: {
        name: string;
    }
}

export interface PostResult extends PostsResult {
    content: string;
}

export interface UsersResult {
    id: number;
    name: string;
    description: string | null;
}

export interface UserResult extends UsersResult {
    posts: {
        id: number;
        title: string;
    }[];
}
