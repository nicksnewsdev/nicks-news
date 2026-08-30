import { getBlogById, getBlogIdFromUrl, getBlogs, getLatestBlogs } from "../functions/api/blogs/blogs";

interface Env {
	DB: D1Database;
	ASSETS: Fetcher;
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		// Latest Blogs
		if (url.pathname === "/api/blogs/latest") {
			const amount = Number(url.searchParams.get("amount") ?? 5);
			const blogs = await getLatestBlogs(env.DB, amount);

			return Response.json(blogs);
		}

		// Current Blog
		if (url.pathname === "/api/blogs/current") {
			const path = url.searchParams.get("path");

			if (!path) {
				return Response.json(null, { status: 400 });
			}

			const id = getBlogIdFromUrl(path);

			if (!id) {
				return Response.json(null, { status: 400 });
			}

			const blog = await getBlogById(env.DB, id);

			if (!blog) {
				return Response.json(null, { status: 404 });
			}

			return Response.json(blog);
		}

		// All Blogs/Searching Blogs
		if (url.pathname === "/api/blogs/search") {
			const search = url.searchParams.get("search") ?? "";
			const blogs = await getBlogs(env.DB, search);

			return Response.json(blogs);
		}

		return env.ASSETS.fetch(request);
	}
} satisfies ExportedHandler<Env>;