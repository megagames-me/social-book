import { Data, type Post } from "$lib/data/Data";
import type NormalRequestHandler from "$lib/RequestHandler";

let db = new Data();

export interface Output {
    post?: Post;
}

export const GET: NormalRequestHandler<Output> = async({ params }) => {
    let post = db.getPost(Number(params.id));
    if (post) {
        return {
            status: 200,
            body: {
                post
            }
        }
    } else {
        return {
            status: 404,
        }
    }
}


