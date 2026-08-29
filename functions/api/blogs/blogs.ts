// Blog database table shema
export type Blog = {
	id: number;
	title: string;
	description: string;
	content: string;
	tags: string;
	sources: string;
	created_at: string;
	updated_at: string;
};

// Get the blog Id from a URL
export function getBlogIdFromUrl(input: string): number | null {
	const url = new URL(input);

	// Use the second segment, wich stores the id
	const segments = url.pathname
		.split("/")
		.filter(Boolean);

	const id = Number(segments[1]);

	return Number.isNaN(id) ? null : id;
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
		.prepare("SELECT * FROM blogs ORDER BY created_at DESC LIMIT ?")
		.bind(amount)
		.all<Blog>();

	return result.results;
}