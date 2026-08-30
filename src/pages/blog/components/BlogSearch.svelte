<script lang="ts">
	import Icon from "$core/components/icon/Icon.svelte";

	let {
		value = $bindable(""),
		onSearch
	}: {
		value?: string;
		onSearch?: () => void;
	} = $props();

	function handleInput(event: Event) {
		value = (event.target as HTMLInputElement).value;
		onSearch?.();
	}
</script>

<label class="row blog-search">
	<Icon name="search" />

	<input
		type="search"
		placeholder="Search"
		bind:value
		oninput={handleInput}
	/>
</label>

<style>
    /* Search bar for searching for specific blog posts */
	.blog-search {
		align-items: center;
		gap: var(--space-3);
		width: 100%;
		padding: var(--space-3) var(--space-4);
		color: var(--color-text);
		border: 1px solid var(--color-text-muted);
		border-radius: var(--radius-1);
		transition: border-color var(--ease-time-1) var(--ease-bounce),
			        transform var(--ease-time-1) var(--ease-bounce);
	}

	.blog-search:hover,
	.blog-search:focus-within {
		border-color: var(--color-text);
		transform: translateY(-2px);
	}

	.blog-search :global(svg) {
		flex: 0 0 auto;
		opacity: var(--opacity-1);
	}

	input {
		width: 100%;
		min-width: 0;
		color: var(--color-text);
		background: transparent;
		border: 0;
		outline: 0;
		font-family: var(--font-main);
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-1);
	}

	input::placeholder {
		color: var(--color-text);
		opacity: var(--opacity-1);
	}

    /* Hide native search clear button */
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
        appearance: none;
        -webkit-appearance: none;
    }
</style>