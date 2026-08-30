<script lang="ts">
	let {
		title,
		description,
		tags = [],
		date,
		url,
		className = ""
	}: {
		title: string;
		description: string;
		tags?: string[];
		date: string;
		url: string;
		className?: string;
	} = $props();

    // Strip to spans form the description provided from the database
    const cleanDescription = $derived(description.replace(/<\/?span>/g, ""));
</script>

<a
	class={`col blog-card ${className}`}
	href={url}
>
	<div class="col blog-content">
		<h2>{title}</h2>
		<p>{cleanDescription}</p>
	</div>

	<div class="row row-1">
		<div class="row tags">
			{#each tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>

		<span class="blog-date">{date}</span>
	</div>
</a>

<style>
	.blog-card {
		width: 100%;
		padding: var(--space-5);
		color: var(--color-text);
		border: 1px solid color-mix(in srgb, var(--color-text) 25%, transparent);
		border-radius: var(--radius-1);
		transition:
			border-color var(--ease-time-1) var(--ease-bounce),
			transform var(--ease-time-1) var(--ease-bounce);
	}

	/* On hover, highlight the blog */
	.blog-card:hover {
		border-color: var(--color-text);
		transform: translateY(-2px);
	}

	.blog-content {
		gap: var(--space-2);
	}

	h2 {
		margin: 0;
		color: var(--color-text);
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-2);
	}

	/* Description has a lower opacity */
	p {
		width: 80%;
		margin: 0;
		color: var(--color-text);
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-1);
		opacity: var(--opacity-1);
	}

	.row-1 {
		align-items: center;
		justify-content: space-between;
		gap: var(--space-5);
		margin-top: var(--space-3);
	}

	.tags {
		align-items: center;
		gap: var(--space-2);
	}

	.tag {
		padding: var(--space-1) var(--space-3);
		color: var(--color-text);
		border: 1px solid color-mix(in srgb, var(--color-text) 25%, transparent);
		border-radius: var(--radius-1);
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-1);
		line-height: 1;
	}

	/* Ensure date also uses higher opacity */
	.blog-date {
		color: var(--color-text);
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-1);
		white-space: nowrap;
	}
</style>