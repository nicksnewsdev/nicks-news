import { getBlogById, getBlogIdFromUrl } from "./blogs";

interface Env {
	DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
	const id = getBlogIdFromUrl(context.request.url);

	if (!id) {
		return Response.json(null, { status: 400 });
	}

	const blog = await getBlogById(context.env.DB, id);

	if (!blog) {
		return Response.json(null, { status: 404 });
	}

	return Response.json(blog);
};