<script lang="ts">
	import Markdown from "$core/components/Markdown.svelte";
	import content from "./credits.md?raw";
</script>

<div class="col credits">
	<h1 class="credits-title">Credits</h1>

	<Markdown {content} />
</div>

<style>
	.credits {
		width: 100%;
		gap: var(--space-5);
		flex: 1;
	}

	.credits-title {
		margin: 0;
		color: var(--color-text);
		font-family: var(--font-dotted);
		font-size: var(--font-size-full);
		font-weight: var(--font-weight-2);
		line-height: 1;
	}
</style>