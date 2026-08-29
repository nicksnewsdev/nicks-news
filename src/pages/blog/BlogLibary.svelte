<script lang="ts">
	import BlogsLatest from "$pages/blog/components/BlogLatest.svelte";
</script>

<div class="col blog-library">
	<h1 class="blog-title">Blog</h1>

	<p class="blog-text">
		If you are interested in <span>UI/UX design</span>, you can read some of my blogs about my <span>design philosophy</span> and much more.
	</p>

	<BlogsLatest amount={5} />
</div>

<style>
	.blog-library {
		width: 100%;
        gap: var(--space-5);
		flex: 1;
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
	.blog-text {
		max-width: 80%;
		margin: calc(var(--space-2) * -1) 0 0 0;
		color: color-mix(in srgb, var(--color-text) 25%, transparent);
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-1);
	}

	/* Spans are highlighted, used for keywords */
	.blog-text span {
		color: var(--color-text);
		font-weight: var(--font-weight-2);
	}
</style>