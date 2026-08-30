<script lang="ts">
	import Cursor from "$core/components/Cursor.svelte";
</script>

<div class="col center not-found">
	<div class="cursor-path cursor-path-1">
		<Cursor content="Lilly" color="var(--color-figma-teal)" x="48%" y="52%" className="cursor-1" />
	</div>

	<h1>404</h1>

	<p>
		The page you are trying to view <span>does not exist</span> or <span>could not be found</span>.
	</p>
</div>

<style>
	.not-found {
		position: relative;
		width: 100%;
		flex: 1;
		gap: var(--space-3);
		color: var(--color-text);
		text-align: center;
	}

	.cursor-path {
		position: absolute;
		inset: 0;
		z-index: 3;
		pointer-events: none;
	}

	h1 {
		margin: 0;
		font-family: var(--font-dotted);
		font-size: var(--font-size-full);
		font-weight: var(--font-weight-2);
		line-height: 1;
	}

	/* The notfound message is at a lower opacity */
	p {
		margin: 0;
		max-width: 50%;
		color: color-mix(in srgb, var(--color-text) 25%, transparent);
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-1);
	}

	/* Spans are highlighted, used for keywords */
	p span {
		color: var(--color-text);
		font-weight: var(--font-weight-2);
	}

	/* Animate the floating cursor */
	.cursor-path-1 {
		animation: cursor-1-x 13s ease-in-out infinite alternate;
	}

	.cursor-path-1 :global(.cursor-1) {
		animation: cursor-1-y 8s ease-in-out infinite alternate;
	}

	@keyframes cursor-1-x {
		0% {
			transform: translateX(0);
		}

		45% {
			transform: translateX(10vw);
		}

		100% {
			transform: translateX(-4vw);
		}
	}

	@keyframes cursor-1-y {
		0% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-5vh);
		}

		100% {
			transform: translateY(9vh);
		}
	}
</style>