<script lang="ts">
	import ExperienceCard from "./ExperienceCard.svelte";

	const experiences = [
		{
			title: "Education",
			description: "Learning UI/UX for website and application design/development. I am also currently learning Electron/Tauri for desktop development.",
			date: "2023 - Present"
		}
	];
</script>

<div class="col experiences">
	<h1 class="row experiences-title">
		<span class="title">Experience</span>
		<span>Overview</span>
	</h1>

	<div class="col experiences-list">
		{#each experiences as experience}
			<ExperienceCard {...experience} />
		{/each}
	</div>
</div>

<style>
	.experiences {
		width: 100%;
		gap: var(--space-5);
	}

	.experiences-title {
		width: 100%;
		margin: 0;
		gap: var(--space-4);
		align-items: baseline;
	}

	.title {
		position: relative;
		color: var(--color-text);
		font-family: var(--font-dotted);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-2);
		z-index: 1;
	}

	/* On hover, show an animated green highlight */
	.title::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: var(--space-2);
		width: 100%;
		height: var(--space-5);
		background: #66D575;
		transform: scaleX(0);
		transform-origin: right;
		transition: transform var(--ease-time-1) var(--ease-bounce);
		z-index: -1;
	}

	.experiences:hover .title::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	.experiences-title span:not(.title) {
		color: var(--color-text);
		font-family: var(--font-main);
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-1);
		opacity: var(--opacity-1);
	}

	.experiences-list {
		width: 100%;
		gap: var(--space-5);
	}
</style>