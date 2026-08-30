<script lang="ts">
	import Markdown from "$core/components/Markdown.svelte";
	import content from "./demos.md?raw";
</script>

<div class="col demos">
	<h1 class="demos-title">Demos</h1>

	<Markdown {content} />
</div>

<style>
	.demos {
		width: 100%;
		gap: var(--space-5);
		flex: 1;
	}

	.demos-title {
		margin: 0;
		color: var(--color-text);
		font-family: var(--font-dotted);
		font-size: var(--font-size-full);
		font-weight: var(--font-weight-2);
		line-height: 1;
	}
</style>