<script lang="ts">
	import Cursor from "$core/components/Cursor.svelte";
	import BlogsLatest from "$pages/blog/components/BlogLatest.svelte";
</script>

<div class="col blog-library">
	<div class="cursor-path cursor-path-1">
		<Cursor content="Aiden" color="var(--color-figma-orange)" x="54%" y="30%" />
	</div>

	<h1 class="blog-title">Blog</h1>

	<p class="blog-text">
		If you are interested in <span>UI/UX design</span>, you can read some of my blogs. I post about my <span>design philosophy</span> and other <span>things of interest</span>.
	</p>

	<BlogsLatest amount={5} />
</div>

<style>
	.blog-library {
		position: relative;
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
		color: var(--color-text-muted);
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-1);
	}

	/* Spans are highlighted, used for keywords */
	.blog-text span {
		color: var(--color-text);
		font-weight: var(--font-weight-2);
	}

	/* Animate the floating cursor */
	.cursor-path {
		position: absolute;
		inset: 0;
		z-index: 3;
		pointer-events: none;
	}

	.cursor-path-1 {
		animation: cursor-1-x 10s ease-in-out infinite alternate;
	}

	.cursor-path-1 :global(.cursor) {
		animation: cursor-1-y 7s ease-in-out 0.5s infinite alternate;
	}

	@keyframes cursor-1-x {
		to {
			transform: translateX(4vw);
		}
	}

	@keyframes cursor-1-y {
		to {
			transform: translateY(-6vh);
		}
	}
</style>