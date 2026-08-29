// Simple slugging
export function slug(input: string): string {
	return input
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, "")
		.trim()
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");
}

// Reverse slugging, not always accurate as it will capitalize every word
export function unSlug(input: string): string {
	return input
		.trim()
		.replace(/-+/g, " ")
		.replace(/\s+/g, " ")
		.replace(/\b\w/g, (letter) => letter.toUpperCase());
}