

import pkg, { type User } from '@prisma/client';

import type { PostResult, PostsResult, UserResult, UsersResult } from "./datatypes";


let prisma = new pkg.PrismaClient();


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
                        name: true
                    }
                }
            }
        });
    }
// here, go to the bottom of the file
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
                        name: true
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
                name: true,
                description: true,
            }
        });
    }

    /**
     * Gets an api-safe user object using an ID
     * @param id ID of the user
     * @returns The user with the corresponding ID
     */
    public async getUser(id: number): Promise<UserResult | null> {
        const user = await prisma.user.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                description: true,
                posts: {
                    select: {
                        title: true,
                        id: true
                    }
                }
            }
        })
        if (user) return user;
        else return null;
    }

    /**
     * This method should not be used for an endpoint as it gives private information. This is solely used for authentication
     * @param email Email of user
     * @returns The user with the corresponding email
     */
    public async getUserByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (user) return user;
        else return null;
    }

    /**
     * This method should not be used for an endpoint as it gives private information. This is solely used for authentication
     * @param email Email of user, from profile
     * @param name Full name of user, from profile
     */
    public async createUser(email: string, name: string): Promise<boolean> {
        console.log(email, name);
        if (!Data.allowedEmail(email)) return false;
        const user = await prisma.user.create({
            data: {
                email: email,
                name: name,
                description: "Hi, I am a proud SocialBook user!"
            }
        });
        if (user) {
            return true
        } else return false;
    }

    public static allowedEmail(email: string): boolean {
        return true;
    }
}