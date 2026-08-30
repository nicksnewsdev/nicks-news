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

	const currentProject = $derived(name === "nicks-news");
</script>

<a
	class={`col project-card ${currentProject ? "current-project" : ""} ${className}`}
	href={url}
	target="_blank"
	rel="noreferrer"
>
	{#if currentProject}
		<span class="project-handle top-left"></span>
		<span class="project-handle top-right"></span>
		<span class="project-handle bottom-left"></span>
		<span class="project-handle bottom-right"></span>
	{/if}

	<div class="col project-content">
		<h2>{name}</h2>
		<p>{description}</p>
	</div>

	<div class="row project-data">
		<span class="project-language">{language}</span>
		<span>{date}</span>
	</div>
</a>

<style>
	.project-card {
		position: relative;
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
	.project-card:hover {
		border-color: var(--color-text);
		transform: translateY(-2px);
	}

	/* Current project, nicks-news, is highlighted with edit visual */
	.current-project {
		border-color: var(--color-figma-blue);
		border-radius: 0;
	}

	.project-handle {
		position: absolute;
		width: var(--space-4);
		height: var(--space-4);
		background: #fffef4;
		border: 1px solid var(--color-figma-blue);
		z-index: 2;
	}

	/* Position all the handles */
	.top-left {
		left: 0;
		top: 0;
		transform: translate(calc(var(--space-2) * -1), calc(var(--space-2) * -1));
	}

	.top-right {
		right: 0;
		top: 0;
		transform: translate(var(--space-2), calc(var(--space-2) * -1));
	}

	.bottom-left {
		left: 0;
		bottom: 0;
		transform: translate(calc(var(--space-2) * -1), var(--space-2));
	}

	.bottom-right {
		right: 0;
		bottom: 0;
		transform: translate(var(--space-2), var(--space-2));
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

	.project-language {
		padding: var(--space-1) var(--space-3);
		color: var(--color-text);
		border: 1px solid color-mix(in srgb, var(--color-text) 25%, transparent);
		border-radius: var(--radius-1);
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-1);
		line-height: 1;
	}
</style>