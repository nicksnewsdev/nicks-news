<script lang="ts">
	import Markdown from "$core/components/Markdown.svelte";
	import content from "./contact.md?raw";
</script>

<div class="col contact">
	<h1 class="contact-title">Contact</h1>

	<Markdown {content} />
</div>

<style>
	.contact {
		width: 100%;
		gap: var(--space-5);
		flex: 1;
	}

	.contact-title {
		margin: 0;
		color: var(--color-text);
		font-family: var(--font-dotted);
		font-size: var(--font-size-full);
		font-weight: var(--font-weight-2);
		line-height: 1;
	}
</style>