import { Data, type Post } from "$lib/data/Data";
import type NormalRequestHandler from "$lib/RequestHandler";

let db = new Data();

export interface Output {
    posts?: Post[];
}

export const GET: NormalRequestHandler<Output> = async({ params }) => {
    let posts = db.getPosts();
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


