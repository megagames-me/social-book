import { Data } from "$lib/data/Data";
import type { PostsResult } from "$lib/data/datatypes";
import type NormalRequestHandler from "$lib/RequestHandler";

let db = new Data();

export interface Output {
    posts?: PostsResult[];
}

export const GET: NormalRequestHandler<Output> = async({ params }) => {
    let posts = await db.getPosts();
    if (posts) {
        return {
            status: 200,
            body: {
                posts
            }
        }
    } else {
        return {
            status: 404,
        }
    }
}


