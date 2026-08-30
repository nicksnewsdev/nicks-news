<script lang="ts">
	import { onMount } from "svelte";
	import type { Blog } from "../../../../functions/api/blogs/blogs";
	import { slug } from "$core/slug";
	import BlogCard from "$pages/blog/components/BlogCard.svelte";
	import BlogSearch from "$pages/blog/components/BlogSearch.svelte";

	let {
		className = ""
	}: {
		className?: string;
	} = $props();

	// How many articles to be loaded at once
    // Currently, there is no load more feature, so this just fetches a set amount at once
	const limit = 10;

	let blogs = $state<Blog[]>([]);
	let search = $state("");

	async function loadBlogs() {
		// Fetch all articles, or articles matching the current search
		const response = await fetch(
			`/api/blogs/search?search=${encodeURIComponent(search)}&limit=${limit}&offset=0`
		);

		if (!response.ok) {
			return;
		}

		blogs = await response.json();
	}

	onMount(async () => {
		await loadBlogs();
	});
</script>

<div class={`col blogs-all ${className}`}>
	<h1 class="row blogs-title">
		<span class="blogs-count">({blogs.length})</span>
		<span class="title">Blogs</span>
		<span>Overview</span>
	</h1>

	<BlogSearch bind:value={search} onSearch={loadBlogs} />

	<div class="col blogs-list">
		{#each blogs as blog (blog.id)}
			<BlogCard
				title={blog.title}
				description={blog.description}
				tags={JSON.parse(blog.tags)}
				date={new Date(blog.created_at).getFullYear().toString()}
				url={`/blog/${blog.id}/${slug(blog.title)}`}
			/>
		{/each}
	</div>
</div>

<style>
	.blogs-all {
		width: 100%;
		gap: var(--space-5);
	}

	.row-1 {
		width: 100%;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-5);
	}

	.blogs-title {
		margin: 0;
		gap: var(--space-4);
		align-items: baseline;
	}

	.title {
		position: relative;
		color: var(--color-text);
		font-family: var(--font-dotted);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-2);
		z-index: 1;
	}

	/* On hover, show an animated violet highlight */
	.title::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: var(--space-2);
		width: 100%;
		height: var(--space-5);
		background: var(--color-figma-violet);
		transform: scaleX(0);
		transform-origin: right;
		transition: transform var(--ease-time-1) var(--ease-bounce);
		z-index: -1;
	}

	.blogs-all:hover .title::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	/* Description has a lower opacity */
	.blogs-title span:not(.title) {
		color: var(--color-text);
		font-family: var(--font-main);
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-1);
		opacity: var(--opacity-1);
	}

	.blogs-list {
		width: 100%;
		gap: var(--space-3);
	}
</style>