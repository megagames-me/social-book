// temporary structure
export interface Post {
    id: number;
    title: string;
    creator: string;
    content: string;
    creatorId: number;
}

export interface User {
    id: number;
    username: string;
    description: string;
}

export interface PostStructure extends Record<string, Post> {}

export interface UserStructure extends Record<string, User> {}

let posts: PostStructure = {
    "1": {
        id: 1,
        title: "Sussy Baka",
        creator: "Anvay",
        content: "I am a frickin sussy baka lol",
        creatorId: 1,
    },
    "2": {
        id: 2,
        title: "Bussy Saka",
        creator: "Azure",
        content: "bussy saka sussy baka bussy saka sussy baka",
        creatorId: 2,
    },
    "3": {
        id: 3,
        title: " Amogus sus lol",
        creator: "Anvay",
        content: "Dear sir diary, today i played amogus and ate the imposter",
        creatorId: 1
    },
    "4": {
        id: 4,
        title: "null",
        creator: "Azure",
        content: "Congratulations! You win absolutely nothing.",
        creatorId: 2
    }
}

let users: UserStructure = {
    "1": {
        id: 1,
        username: "Anvay",
        description: "I am also a human who likes to code.",
    },
    "2": {
        id: 2,
        username: "Azure",
        description: "I am a human who likes to code.",
    }
}

export class Data {
    constructor() {

    }

    public getPosts(): Post[] {
        return Object.values(posts);
    }

    public getPost(id: number): Post | null {
        let post = posts[id];
        if (post) return post;
        return null;
    }

    public getUsers(): User[] {
        return Object.values(users);
    }

    public getUser(id: number): User | null {
        let user = users[id];
        if (user) return user;
        return null;
    }
    public getUserPosts(id: number): Post[] {
        return Object.values(posts).filter(post => post.creatorId === id);
    }
}