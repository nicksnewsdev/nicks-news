import { getLatestBlogs } from "./blogs";

interface Env {
	DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
	const url = new URL(context.request.url);
	const amount = Number(url.searchParams.get("amount"));

	const blogs = await getLatestBlogs(context.env.DB, amount);

	return Response.json(blogs);
};