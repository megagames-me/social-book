import { Data, type UserResult } from "$lib/data/Data";
import type NormalRequestHandler from "$lib/RequestHandler";

let db = new Data();

export interface Output {
    user?: UserResult;
}

export const GET: NormalRequestHandler<Output> = async({ params }) => {
    let user = await db.getUser(Number(params.id));
    if (!user) {
        return {
            status: 404,
        }
    }
    
    return { 
        status: 200,
        body: {
            user,
        }
    }
}