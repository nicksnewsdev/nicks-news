<script lang="ts">
	import { onMount, tick } from "svelte";
	import SvelteMarkdown from "@humanspeak/svelte-markdown";

	let {
		content = "",
		className = ""
	}: {
		content?: string;
		className?: string;
	} = $props();

	let markdown: HTMLDivElement | null = null;

	// List of figma colors as seen in the css varaibles
	const linkColors = [
		"var(--color-figma-blue)",
		"var(--color-figma-green)",
		"var(--color-figma-pink)",
		"var(--color-figma-orange)",
		"var(--color-figma-violet)",
		"var(--color-figma-red)",
		"var(--color-figma-yellow)",
		"var(--color-figma-teal)"
	];

	// Color links a random one of the figma colors
	function colorLinks() {
		if (!markdown) {
			return;
		}

		const links = markdown.querySelectorAll("a");

		for (const link of links) {
			const color = linkColors[Math.floor(Math.random() * linkColors.length)];

			(link as HTMLElement).style.setProperty("--link-color", color);
		}
	}

	onMount(() => {
		colorLinks();
	});

	$effect(() => {
		content;

		tick().then(colorLinks);
	});
</script>

<div
	bind:this={markdown}
	class={`col blog-markdown ${className}`}
>
	<SvelteMarkdown source={content} />
</div>

<style>
	.blog-markdown {
		width: 100%;
		gap: var(--space-5);
		color: var(--color-text);
	}

	.blog-markdown :global(h2),
	.blog-markdown :global(h3) {
		margin: 0;
		color: var(--color-text);
		font-weight: var(--font-weight-2);
		line-height: 1;
	}

	/* The blogs dont use a primary h1, so its not styled here */

	.blog-markdown :global(h2) {
		font-size: var(--font-size-2);
	}

	.blog-markdown :global(h3) {
		font-size: var(--font-size-1);
	}

	.blog-markdown :global(p),
	.blog-markdown :global(li) {
		margin: 0;
		color: var(--color-text-muted);
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-1);
	}

	.blog-markdown :global(strong) {
		color: var(--color-text);
		font-weight: var(--font-weight-2);
	}

	.blog-markdown :global(a) {
		color: var(--link-color, var(--color-main));
		text-decoration: underline;
		text-decoration-color: var(--link-color, var(--color-main));
		text-underline-offset: var(--space-1);
	}

	.blog-markdown :global(ul),
	.blog-markdown :global(ol) {
		margin: 0;
		padding-left: var(--space-5);
	}

	/* Code blocks generally use fira-code as their font */
	.blog-markdown :global(code) {
		color: var(--color-text);
		background: var(--color-panel);
		border: 1px solid var(--color-text-muted);
		border-radius: var(--radius-1);
		padding: var(--space-1) var(--space-2);
		font-family: var(--font-code);
		font-size: 12px;
	}

	.blog-markdown :global(pre) {
		margin: 0;
		padding: var(--space-5);
		background: var(--color-panel);
		border: 1px solid var(--color-text-muted);
		border-radius: var(--radius-1);
		overflow-x: auto;
	}

	.blog-markdown :global(pre code) {
		padding: 0;
		background: transparent;
		border: 0;
	}
</style>