import type { RequestHandler } from "@sveltejs/kit";

export default interface NormalRequestHandler<Output> extends RequestHandler<Record<string, string>, Output> {

}