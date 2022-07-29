import { Data } from "$lib/data/Data";
import type { PostResult } from "$lib/data/datatypes";
import type NormalRequestHandler from "$lib/RequestHandler";

let db = new Data();

export interface Output {
    post?: PostResult;
}

export const GET: NormalRequestHandler<Output> = async({ params }) => {
    let post = await db.getPost(Number(params.id));
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


