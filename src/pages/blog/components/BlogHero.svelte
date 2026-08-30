<script lang="ts">
	import { onMount } from "svelte";

	let {
		id = 0,
		title = "",
		content = "",
		tags = [],
		className = ""
	}: {
		id?: number;
		title?: string;
		content?: string;
		tags?: string[];
		className?: string;
	} = $props();

	let currentTag = $state(-1);

	onMount(() => {
		if (tags.length <= 0) {
			return;
		}

		// Select a random tag to apply an edit visual
		currentTag = Math.floor(Math.random() * tags.length);
	});
</script>

<div class={`col blog-hero ${className}`}>
	<div class="row row-2">
		<h1 class="blog-title">{title}</h1>
		<span class="blog-id">#{id + 1}</span>
	</div>

	<p class="blog-content">
        {@html content}
    </p>

	<div class="row row-1">
		{#each tags as tag, index}
			<span class={`tag ${index === currentTag ? "current-tag" : ""}`}>
				{#if index === currentTag}
					<span class="tag-handle top-left"></span>
					<span class="tag-handle top-right"></span>
					<span class="tag-handle bottom-left"></span>
					<span class="tag-handle bottom-right"></span>
				{/if}

				{tag}
			</span>
		{/each}
	</div>
</div>

<style>
	.blog-hero {
		width: 100%;
		gap: var(--space-3);
	}

	.row-2 {
		align-items: flex-start;
		gap: var(--space-4);
		width: 100%;
	}

	.blog-title {
		margin: 0;
		color: var(--color-text);
		font-family: var(--font-dotted);
		font-size: var(--font-size-full);
		font-weight: var(--font-weight-2);
		line-height: 1;
	}

	.blog-id {
		margin-top: var(--space-5);
		color: var(--color-text);
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-1);
		opacity: var(--opacity-1);
		white-space: nowrap;
	}

	.blog-content {
		max-width: 80%;
		margin: calc(var(--space-2) * -1) 0 0 0;
		color: var(--color-text-muted);
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
		position: relative;
		padding: var(--space-2) var(--space-4);
		color: var(--color-text);
		border: 1px solid var(--color-text-muted);
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

	.current-tag {
		border-color: #3DADFF;
		border-radius: 0;
	}

	.tag-handle {
		position: absolute;
		width: var(--space-2);
		height: var(--space-2);
		background: var(--color-text);
		border: 1px solid #3DADFF;
		z-index: 2;
	}

	/* Position all the handles */
	.top-left {
		left: 0;
		top: 0;
		transform: translate(calc(var(--space-1) * -1), calc(var(--space-1) * -1));
	}

	.top-right {
		right: 0;
		top: 0;
		transform: translate(var(--space-1), calc(var(--space-1) * -1));
	}

	.bottom-left {
		left: 0;
		bottom: 0;
		transform: translate(calc(var(--space-1) * -1), var(--space-1));
	}

	.bottom-right {
		right: 0;
		bottom: 0;
		transform: translate(var(--space-1), var(--space-1));
	}
</style>