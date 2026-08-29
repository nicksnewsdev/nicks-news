<script lang="ts">
	let {
		title,
		description,
		date,
		className = ""
	}: {
		title: string;
		description: string;
		date: string;
		className?: string;
	} = $props();
</script>

<div class={`col experience ${className}`}>
	<div class="col experience-content">
		<h2>{title}</h2>
		<p>{description}</p>
	</div>

	<span class="experience-date">{date}</span>
</div>

<style>
	.experience {
		width: 100%;
		padding: var(--space-5);
		color: var(--color-text);
		border: 1px solid color-mix(in srgb, var(--color-text) 25%, transparent);
		border-radius: var(--radius-1);
		transition: border-color var(--ease-time-1) var(--ease-bounce),
			        transform var(--ease-time-1) var(--ease-bounce);
	}

	/* On hover, highlight the experience */
	.experience:hover {
		border-color: var(--color-text);
		transform: translateY(-2px);
	}

	.experience-content {
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

	/* Ensure date also uses higher opacity */
	.experience-date {
		align-self: flex-end;
		margin-top: auto;
		color: var(--color-text);
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-1);
	}
</style>