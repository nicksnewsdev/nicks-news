<script lang="ts">
	let {
		name = "",
		description = "",
		language = "",
		date = "",
		url = "",
		className = ""
	}: {
		name?: string;
		description?: string;
		language?: string;
		date?: string;
		url?: string;
		className?: string;
	} = $props();
</script>

<a
	class={`col github-project ${className}`}
	href={url}
	target="_blank"
	rel="noreferrer"
>
	<div class="col project-content">
		<h2>{name}</h2>
		<p>{description}</p>
	</div>

	<div class="row project-data">
		<span>{language}</span>
		<span>{date}</span>
	</div>
</a>

<style>
	.github-project {
		width: 260px;
		aspect-ratio: 1 / 0.7;
		justify-content: space-between;
		gap: var(--space-3);
		padding: var(--space-5);
		color: var(--color-text);
		border: 1px solid color-mix(in srgb, var(--color-text) 25%, transparent);
		border-radius: var(--radius-1);
		transition: border-color var(--ease-time-1) var(--ease-bounce),
			        transform var(--ease-time-1) var(--ease-bounce);
	}

    /* On hover, highlight the project */
	.github-project:hover {
		border-color: var(--color-text);
		transform: translateY(-2px);
	}

	.project-content {
		gap: var(--space-2);
	}

	h2 {
		margin: 0;
		color: var(--color-text);
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-2);
		line-height: 1;
	}

    /* Description has a lower opacity */
	p {
		margin: 0;
		color: var(--color-text);
		opacity: var(--opacity-1);
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-1);
	}

    /* Project Metadata is displayed as a seperate bottom bar */
	.project-data {
		align-items: center;
		justify-content: space-between;
		gap: var(--space-5);
		color: var(--color-text);
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-1);
		line-height: 1;
	}
</style>