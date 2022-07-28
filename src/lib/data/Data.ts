import { PrismaClient } from "@prisma/client";
import type { User, Post } from "@prisma/client";

const prisma = new PrismaClient();

// temporary structure
// export interface Post {
//     id: number;
//     title: string;
//     creator: string;
//     content: string;
//     creatorId: number;
// }

// export interface User {
//     id: number;
//     username: string;
//     description: string;
// }

// export interface PostStructure extends Record<string, Post> {}

// export interface UserStructure extends Record<string, User> {}

// let posts: PostStructure = {
//     "1": {
//         id: 1,
//         title: "Sussy Baka",
//         creator: "Anvay",
//         content: "I am a frickin sussy baka lol",
//         creatorId: 1,
//     },
//     "2": {
//         id: 2,
//         title: "Bussy Saka",
//         creator: "Azure",
//         content: "bussy saka sussy baka bussy saka sussy baka",
//         creatorId: 2,
//     },
//     "3": {
//         id: 3,
//         title: " Amogus sus lol",
//         creator: "Anvay",
//         content: "Dear sir diary, today i played amogus and ate the imposter",
//         creatorId: 1
//     },
//     "4": {
//         id: 4,
//         title: "null",
//         creator: "Azure",
//         content: "Congratulations! You win absolutely nothing.",
//         creatorId: 2
//     }
// }

// let users: UserStructure = {
//     "1": {
//         id: 1,
//         username: "Anvay",
//         description: "I am also a human who likes to code.",
//     },
//     "2": {
//         id: 2,
//         username: "Azure",
//         description: "I am a human who likes to code.",
//     }
// }

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
        title: string;
    }[];
}

export class Data {
    constructor() {

    }

    public async getPosts(): Promise<PostsResult[]> {
        return await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                creatorId: true,
                creator: {
                    select: {
                        username: true
                    }
                }
            }
        });
    }

    public async getPost(id: number): Promise<PostResult | null> {
        const post = await prisma.post.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                title: true,
                creatorId: true,
                content: true,
                creator: {
                    select: {
                        username: true
                    }
                }
            }
        })
        if (post) return post;
        else return null;
    }

    public async getUsers(): Promise<UsersResult[]> {
        return await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                description: true,
            }
        });
    }

    public async getUser(id: number): Promise<UserResult | null> {
        const user = await prisma.user.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                username: true,
                description: true,
                posts: {
                    select: {
                        title: true,
                    }
                }
            }
        })
        if (user) return user;
        else return null;
    }
    
}