<script lang="ts">
	import { onMount } from "svelte";
	import { loadTheme } from "$core/theme";
	import Header from "$core/components/Header.svelte";
	import Footer from "$core/components/Footer.svelte";
	import About from "$pages/about/About.svelte";
	// Demos will be replaced with the DemosLibary, once i have some
	import Demos from "$pages/demos/Demos.svelte";
	import Contact from "$pages/contact/Contact.svelte";
	import Credits from "$pages/credits/Credits.svelte";
	import Blog from "$pages/blog/Blog.svelte";
	import BlogLibary from "$pages/blog/BlogLibary.svelte";
	import NotFound from "$pages/NotFound.svelte";

	// Avaraible routes of the website
	// The App.svelte acts as a router
	const routes = {
		"/": About,
		"/about": About,
		"/contact": Contact,
		"/blog": BlogLibary,
		"/credits": Credits,
		"/demos": Demos,
	};

	let pathname = $state(window.location.pathname);

	// Sub pages for blogs use a seperate component
	const Page = $derived(
		pathname.startsWith("/blog/")
			? Blog
			: routes[pathname as keyof typeof routes] ?? NotFound
	);

	onMount(() => {
		loadTheme();
	});
</script>

<main class="col app">
	<Header />

	{#key pathname}
		<Page />
	{/key}

	<Footer />
</main>

<style>
	/* Ensure the main app takes all avaraible width and height */
	.app {
		width: 100%;
		max-width: 1000px;
		min-height: 100vh;
		margin: 0 auto;
		padding: var(--space-5);
		overflow: hidden;
	}
</style>