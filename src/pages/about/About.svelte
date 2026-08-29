<script lang="ts">
	import AboutHero from "./components/AboutHero.svelte";
	import AboutProjects from "./components/projects/AboutProjects.svelte";
	import AboutExperiences from "./components/experience/AboutExperiences.svelte";
	import Cursor from "$core/components/Cursor.svelte";
</script>

<div class="col col-1">
	<div class="cursor-path cursor-path-1">
		<Cursor content="Nick" color="#3DADFF" x="52%" y="12%" />
	</div>

	<div class="cursor-path cursor-path-2">
		<Cursor content="Kate" color="#66D575" x="11%" y="80%" />
	</div>

	<div class="cursor-path cursor-path-3">
		<Cursor content="John" color="#F849C1" x="82%" y="52%" />
	</div>

	<AboutHero />
	<AboutProjects />
	<AboutExperiences />
</div>

<style>
	.col-1 {
		position: relative;
		align-items: flex-start;
		gap: var(--space-5);
		width: 100%;
		flex: 1;
	}

	.cursor-path {
		position: absolute;
		inset: 0;
		z-index: 3;
		pointer-events: none;
	}

	/* Animate the floating cursors */
	/* These have a bunch of different x, y and time values so it feels natural */
	.cursor-path-1 {
		animation: cursor-1-x 11s ease-in-out infinite alternate;
	}

	.cursor-path-1 :global(.cursor) {
		animation: cursor-1-y 7s ease-in-out 1s infinite alternate;
	}

	.cursor-path-2 {
		animation: cursor-2-x 8s ease-in-out 0.6s infinite alternate;
	}

	.cursor-path-2 :global(.cursor) {
		animation: cursor-2-y 10s ease-in-out infinite alternate;
	}

	.cursor-path-3 {
		animation: cursor-3-x 13s ease-in-out 1.4s infinite alternate-reverse;
	}

	.cursor-path-3 :global(.cursor) {
		animation: cursor-3-y 6s ease-in-out infinite alternate;
	}

	@keyframes cursor-1-x {
		to {
			transform: translateX(-5vw);
		}
	}

	@keyframes cursor-1-y {
		to {
			transform: translateY(9vh);
		}
	}

	@keyframes cursor-2-x {
		to {
			transform: translateX(6vw);
		}
	}

	@keyframes cursor-2-y {
		to {
			transform: translateY(-7vh);
		}
	}

	@keyframes cursor-3-x {
		to {
			transform: translateX(4vw);
		}
	}

	@keyframes cursor-3-y {
		to {
			transform: translateY(-8vh);
		}
	}
</style>