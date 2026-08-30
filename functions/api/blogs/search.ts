import { getBlogs } from "./blogs";

interface Env {
	DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
	const url = new URL(context.request.url);
	const search = url.searchParams.get("search") ?? "";

	const blogs = await getBlogs(context.env.DB, search);

	return Response.json(blogs);
};