<script lang="ts">
	import { onMount } from "svelte";
	import Icon from "$core/components/icon/Icon.svelte";
	import { getTheme, setTheme, toggleTheme } from "$core/theme";

	let theme = $state<"dark" | "light">("dark");

	onMount(() => {
		theme = getTheme();
		setTheme(theme);
	});

	function handleTheme(event: MouseEvent) {
		theme = toggleTheme(event);
	}
</script>

<button
	class="theme"
	type="button"
	onclick={handleTheme}
	aria-label="Toggle theme"
>
	<Icon name={theme === "light" ? "sun-light" : "half-moon"} />
</button>

<style>
	.theme {
		all: unset;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-text);
		opacity: var(--opacity-1);
		cursor: pointer;
		transition: opacity var(--ease-time-1) var(--ease-bounce),
			        transform var(--ease-time-1) var(--ease-bounce);
	}

	.theme:hover {
		opacity: 1;
		transform: translateY(2px);
	}
</style>