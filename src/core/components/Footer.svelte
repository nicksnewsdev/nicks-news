<script lang="ts">
	import Icon from "$core/components/icon/Icon.svelte";
</script>

<footer class="row footer">
	<div class="row row-1">
		<a class="footer-item" href="/credits">Credits</a>
		<span class="footer-line"></span>
	</div>

	<span class="row row-2">
		<span>nicks.news</span>
		<Icon name="copyright" />
		<span>2026</span>
	</span>
</footer>

<style>
	.footer {
		width: 100%;
		align-items: center;
		justify-content: space-between;
		z-index: 2;
		margin-top: var(--space-5);
		gap: var(--space-5);
		color: color-mix(in srgb, var(--color-text) 25%, transparent);
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-1);
	}

	.row-1 {
		align-items: center;
		gap: var(--space-5);
	}

	.row-2 {
		align-items: center;
		gap: var(--space-2);
		line-height: 1;
	}

	.row-2 :global(.icon) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.footer-line {
		width: 8vw;
		max-width: 120px;
		height: 1px;
		background: color-mix(in srgb, var(--color-text) 25%, transparent);
	}

	.footer-item {
		color: var(--color-text);
		opacity: var(--opacity-1);
		transition: opacity var(--ease-time-1) var(--ease-bounce),
					transform var(--ease-time-1) var(--ease-bounce);
	}

	/* On hover, highlight and shift the item upward */
	.footer-item:hover {
		opacity: 1;
		transform: translateY(-2px);
	}
</style>