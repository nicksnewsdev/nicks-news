// Blog database table shema
export type Blog = {
	id: number;
	title: string;
	description: string;
	content?: string;
	tags: string;
	sources?: string;
	created_at: string;
	updated_at: string;
};

// Escape sqlite LIKE wildcards so search behaves like normal text search
function toLikeSearch(search: string): string {
	return `%${search.trim().replace(/[\\%_]/g, "\\$&")}%`;
}

export async function getBlogs(db: D1Database, search = "", limit = 10, offset = 0): Promise<Blog[]> {
	const cleanedSearch = search.trim();

	if (!cleanedSearch) {
		const result = await db
			.prepare("SELECT id, title, description, tags, created_at, updated_at FROM blogs ORDER BY created_at DESC LIMIT ? OFFSET ?")
			.bind(limit, offset)
			.all<Blog>();

		return result.results;
	}

	const likeSearch = toLikeSearch(cleanedSearch);

	const result = await db
		.prepare(`
			SELECT id, title, description, tags, created_at, updated_at
			FROM blogs
			WHERE title LIKE ? ESCAPE '\\'
				OR description LIKE ? ESCAPE '\\'
				OR tags LIKE ? ESCAPE '\\'
				OR content LIKE ? ESCAPE '\\'
			ORDER BY
				CASE
					WHEN title LIKE ? ESCAPE '\\' THEN 1
					WHEN description LIKE ? ESCAPE '\\' THEN 2
					WHEN tags LIKE ? ESCAPE '\\' THEN 3
					WHEN content LIKE ? ESCAPE '\\' THEN 4
					ELSE 5
				END,
				created_at DESC
			LIMIT ? OFFSET ?
		`)
		.bind(
			likeSearch,
			likeSearch,
			likeSearch,
			likeSearch,
			likeSearch,
			likeSearch,
			likeSearch,
			likeSearch,
			limit,
			offset
		)
		.all<Blog>();

	return result.results;
}

// Get the blog Id from a URL path
export function getBlogIdFromUrl(path: string): number | null {
	const segments = path
		.split("/")
		.filter(Boolean);

	const id = Number(segments[1]);

	return Number.isInteger(id) && id > 0 ? id : null;
}

// Get content of a blog by Id
export async function getBlogById(db: D1Database, id: number): Promise<Blog | null> {
	const blog = await db
		.prepare("SELECT * FROM blogs WHERE id = ?")
		.bind(id)
		.first<Blog>();

	return blog ?? null;
}

// Get the latest blogs
export async function getLatestBlogs(db: D1Database, amount: number): Promise<Blog[]> {
	const result = await db
		.prepare("SELECT id, title, description, tags, created_at, updated_at FROM blogs ORDER BY created_at DESC LIMIT ?")
		.bind(amount)
		.all<Blog>();

	return result.results;
}