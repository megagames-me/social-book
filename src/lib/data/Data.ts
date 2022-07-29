
import { PrismaClient } from '@prisma/client/edge' 
import 'dotenv/config'

import type { PostResult, PostsResult, UserResult, UsersResult } from "./datatypes";

const prisma = new PrismaClient()


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
                        id: true
                    }
                }
            }
        })
        if (user) return user;
        else return null;
    }
    
}