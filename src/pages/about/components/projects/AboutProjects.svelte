<script lang="ts">
	import { onMount } from "svelte";
	import ProjectCard from "$pages/about/components/projects/ProjectCard.svelte";

	// Github repository data structure
	type GithubRepo = {
		id: number;
		name: string;
		description: string | null;
		html_url: string;
		language: string | null;
		fork: boolean;
		archived: boolean;
		updated_at: string;
	};

	type Project = {
		id: number;
		name: string;
		description: string;
		language: string;
		date: string;
		url: string;
	};

	let projects = $state<Project[]>([]);
	let projectList: HTMLDivElement;

	/* Convert github repository data to internal Project type */
	function toProject(repo: GithubRepo): Project {
		return {
			id: repo.id,
			name: repo.name,
			description: repo.description ?? "No description.",
			language: repo.language ?? "No Language.",
			date: new Date(repo.updated_at).getFullYear().toString(),
			url: repo.html_url
		};
	}

	// Allow for scrolling projects with mousewheel
	function handleWheel(event: WheelEvent) {
		if (!projectList || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
			return;
		}

		event.preventDefault();

		projectList.scrollBy({
			left: +event.deltaY,
			behavior: "smooth"
		});
	}

	onMount(async () => {
		const response = await fetch(
			// Fetch my projects from github
			"https://api.github.com/users/nicksnewsdev/repos?sort=updated&direction=desc&per_page=12"
		);

		if (!response.ok) {
			return;
		}

		const repos: GithubRepo[] = await response.json();

		projects = repos
			.filter((repo) => !repo.fork && !repo.archived)
			.map(toProject)
			// Reverse the list so the latest one is always on the left
			.reverse();
	});
</script>

<div class="col projects">
	<h1 class="row projects-title">
		<span>My</span>
		<span class="title">Projects</span>
		<span class="projects-count">({projects.length})</span>
	</h1>

	<div
		bind:this={projectList}
		class="row projects-list"
		onwheel={handleWheel}
	>
		{#each projects as project (project.id)}
			<ProjectCard {...project} />
		{/each}
	</div>
</div>

<style>
	.projects {
		width: 100%;
		gap: var(--space-5);
	}

	.projects-title {
		width: 100%;
		margin: 0;
		gap: var(--space-4);
		justify-content: flex-end;
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

	/* On hover, show an animated pink highlight */
	.title::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: var(--space-2);
		width: 100%;
		height: var(--space-5);
		background: var(--color-figma-pink);
		transform: scaleX(0);
		transform-origin: right;
		transition: transform var(--ease-time-1) var(--ease-bounce);
		z-index: -1;
	}

	.projects:hover .title::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	/* Description has a lower opacity */
	.projects-title span:not(.title) {
		color: var(--color-text);
		font-family: var(--font-main);
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-1);
		opacity: var(--opacity-1);
	}

	.projects-list {
		width: 100%;
		justify-content: flex-start;
		gap: var(--space-5);
		overflow-x: auto;
		padding: var(--space-1) 0 var(--space-3) 0;
		direction: rtl;
		scroll-behavior: smooth;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	.projects-list::-webkit-scrollbar {
		width: 0;
		height: 0;
		display: none;
	}

	.projects-list :global(.project-card) {
		flex: 0 0 260px;
		direction: ltr;
	}
</style>