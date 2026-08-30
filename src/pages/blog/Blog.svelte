<script lang="ts">
	import { onMount } from "svelte";
	import BlogHero from "$pages/blog/components/BlogHero.svelte";
	import BlogMarkdown from "$pages/blog/components/BlogMarkdown.svelte";
	import type { Blog } from "$api/blogs/blogs";

	let {
		className = ""
	}: {
		className?: string;
	} = $props();

	let blog = $state<Blog | null>(null);
	let tags = $derived(blog ? JSON.parse(blog.tags) as string[] : []);

	onMount(async () => {
		// Fetch the current viewed blog with url
		const response = await fetch(
            `/api/blogs/current?path=${encodeURIComponent(window.location.pathname)}`
        );

		if (!response.ok) {
			return;
		}

		blog = await response.json();
	});
</script>

<div class={`col blog ${className}`}>
	{#if blog}
		<BlogHero
			title={blog.title}
			tags={tags}
            content={blog.description}
		></BlogHero>

		<BlogMarkdown content={blog.content} />
	{/if}
</div>

<style>
	.blog {
		width: 100%;
		gap: 42px;
		flex: 1;
	}
</style>