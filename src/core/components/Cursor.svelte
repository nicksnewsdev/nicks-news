<script lang="ts">
	import Icon from "$core/components/icon/Icon.svelte";

	let {
		content = "",
		color = "#3DADFF",
		x = "50%",
		y = "50%",
		className = ""
	}: {
		content?: string;
		color?: string;
		x?: string;
		y?: string;
		className?: string;
	} = $props();
</script>

<div
	class={`cursor ${className}`}
	style={`--cursor-color: ${color}; --x: ${x}; --y: ${y};`}
>
	<Icon name="cursor" size={24} />
	<span class="cursor-content">{content}</span>
</div>

<style>
	.cursor {
		position: absolute;
		left: var(--x);
		top: var(--y);
		display: flex;
		align-items: flex-start;
		gap: var(--space-1);
		color: var(--cursor-color);
		pointer-events: none;
		user-select: none;
		z-index: 3;
	}

	.cursor-content {
		margin-top: var(--space-4);
		padding: var(--space-2) var(--space-3);
		color: var(--color-text);
		background: var(--cursor-color);
		border-radius: var(--radius-full);
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-1);
		line-height: 1;
	}
</style>