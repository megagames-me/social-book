import { Data, type Post, type User } from "$lib/data/Data";
import type NormalRequestHandler from "$lib/RequestHandler";

let db = new Data();

export interface Output {
    user?: User;
    posts?: Post[];
}

export const GET: NormalRequestHandler<Output> = async({ params }) => {
    let user = db.getUser(Number(params.id));
    if (!user) {
        return {
            status: 404,
        }
    }
    let posts = db.getUserPosts(Number(params.id));
    
    return { 
        status: 200,
        body: {
            user,
            posts
        }
    }
}