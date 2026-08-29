<script lang="ts">
	import { onMount } from "svelte";
	import type { Blog } from "../../../../functions/api/blogs/blogs";
    import { slug } from "$core/slug";
	import BlogCard from "$pages/blog/components/BlogCard.svelte";

	let {
		amount = 5,
		className = ""
	}: {
		amount?: number;
		className?: string;
	} = $props();

	let blogs = $state<Blog[]>([]);

	onMount(async () => {
        // Fetch the latest articles based on amount
		const response = await fetch(`/api/blogs/latest?amount=${amount}`);

		if (!response.ok) {
			return;
		}

		blogs = await response.json();
	});
</script>

<div class={`col blogs-latest ${className}`}>
	<h1 class="row blogs-title">
		<span>Latest</span>
		<span class="title">Blogs</span>
		<span class="blogs-count">({blogs.length})</span>
	</h1>

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
	.blogs-latest {
		width: 100%;
		gap: var(--space-5);
	}

	.blogs-title {
		width: 100%;
		margin: 0;
		gap: var(--space-4);
		justify-content: flex-end;
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

	/* On hover, show an animated orange highlight */
	.title::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: var(--space-2);
		width: 100%;
		height: var(--space-5);
		background: #FF9E42;
		transform: scaleX(0);
		transform-origin: right;
		transition: transform var(--ease-time-1) var(--ease-bounce);
		z-index: -1;
	}

	.blogs:hover .title::after {
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