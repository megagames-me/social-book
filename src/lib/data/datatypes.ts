export interface PostsResult {
    id: number;
    title: string;
    creatorId: number;
    creator: {
        username: string;
    }
}

export interface PostResult extends PostsResult {
    content: string;
    creator: {
        username: string;
    }
}

export interface UsersResult {
    id: number;
    username: string;
    description: string;
}

export interface UserResult extends UsersResult {
    posts: {
        id: number;
        title: string;
    }[];
}
