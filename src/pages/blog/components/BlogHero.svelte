<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		title = "",
		content,
		tags = [],
		className = ""
	}: {
		title?: string;
		content: Snippet;
		tags?: string[];
		className?: string;
	} = $props();
</script>

<div class={`col blog-hero ${className}`}>
	<h1 class="blog-title">{title}</h1>

	<p class="blog-content">
		{@render content()}
	</p>

    <div class="row row-1">
		{#each tags as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>
</div>

<style>
	.blog-hero {
		width: 100%;
        gap: var(--space-5);
	}

	.blog-title {
		margin: 0;
		color: var(--color-text);
		font-family: var(--font-dotted);
		font-size: var(--font-size-full);
		font-weight: var(--font-weight-2);
		line-height: 1;
	}

	/* Use color mix for opacity instead so that spans can use full opacity */
	.blog-content {
		max-width: 80%;
		margin: calc(var(--space-2) * -1) 0 0 0;
		color: color-mix(in srgb, var(--color-text) 25%, transparent);
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-1);
	}

	/* Spans are highlighted, used for keywords */
	.blog-content :global(span) {
		color: var(--color-text);
		font-weight: var(--font-weight-2);
	}

	.row-1 {
		align-items: center;
		gap: var(--space-3);
	}

	.tag {
		padding: var(--space-2) var(--space-4);
		color: var(--color-text);
		border: 1px solid color-mix(in srgb, var(--color-text) 25%, transparent);
		border-radius: var(--radius-1);
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-1);
		line-height: 1;
		transition: border-color var(--ease-time-1) var(--ease-bounce),
			        transform var(--ease-time-1) var(--ease-bounce);
	}

    /* On hover, highlight the tag */
	.tag:hover {
		border-color: var(--color-text);
		transform: translateY(-2px);
	}
</style>