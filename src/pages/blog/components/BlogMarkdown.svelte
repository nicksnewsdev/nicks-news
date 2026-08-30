<script lang="ts">
	import SvelteMarkdown from "@humanspeak/svelte-markdown";

	let {
		content = "",
		className = ""
	}: {
		content?: string;
		className?: string;
	} = $props();
</script>

<div class={`col blog-markdown ${className}`}>
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
        color: color-mix(in srgb, var(--color-text) 25%, transparent);
        font-size: var(--font-size-1);
        font-weight: var(--font-weight-1);
    }

	.blog-markdown :global(strong) {
		color: var(--color-text);
		font-weight: var(--font-weight-2);
	}

	.blog-markdown :global(a) {
		color: var(--color-main);
		text-decoration: none;
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
        border: 1px solid color-mix(in srgb, var(--color-text) 25%, transparent);
        border-radius: var(--radius-1);
        padding: var(--space-1) var(--space-2);
        font-family: var(--font-code);
        font-size: 12px;
    }

    .blog-markdown :global(pre) {
        margin: 0;
        padding: var(--space-5);
        background: var(--color-panel);
        border: 1px solid color-mix(in srgb, var(--color-text) 25%, transparent);
        border-radius: var(--radius-1);
        overflow-x: auto;
    }

    .blog-markdown :global(pre code) {
        padding: 0;
        background: transparent;
        border: 0;
    }
</style>