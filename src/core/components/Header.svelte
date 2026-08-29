<script lang="ts">
	import Icon from "$core/components/icon/Icon.svelte";

	let {
		className = ""
	}: {
		className?: string;
	} = $props();

	// Clickable links in the Header
	const items = ["About", "Blog", "Demos", "Contact"];
</script>

<nav class={`row header ${className}`}>
	<div class="row row-1">
		<a
			class="header-icon"
			href="https://github.com/nicksnewsdev"
			target="_blank"
			rel="noreferrer"
			aria-label="GitHub"
		>
			<Icon name="github" />
		</a>

		<a
			class="header-icon"
			href="https://www.linkedin.com/in/nicks-news-20b6a0298/"
			target="_blank"
			rel="noreferrer"
			aria-label="LinkedIn"
		>
			<Icon name="linkedin" />
		</a>
	</div>

	<div class="row">
		<span class="header-line"></span>

		{#each items as item}
			<a class="header-item" href={`/${item.toLowerCase()}`}>
				{item}
			</a>
		{/each}
	</div>
</nav>

<style>
	.header {
		align-items: center;
		justify-content: space-between;
        z-index: 2;
		gap: var(--space-5);
		width: 100%;
	}

	.header .row {
		align-items: center;
		gap: var(--space-5);
	}

	/* Icons are spaced apart less */
	.header .row-1 {
		gap: var(--space-3);
	}

	.header-line {
		width: 8vw;
		max-width: 120px;
		height: 1px;
		background: var(--color-text);
		opacity: var(--opacity-1);
	}

	.header-icon,
	.header-item {
		color: var(--color-text);
		opacity: var(--opacity-1);
		transition: opacity var(--ease-time-1) var(--ease-bounce),
			        transform var(--ease-time-1) var(--ease-bounce);
	}

	.header-item {
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-2);
	}

	/* On hover, highlight and shift the item downward */
	.header-icon:hover,
	.header-item:hover {
		opacity: 1;
		transform: translateY(2px);
	}
</style>