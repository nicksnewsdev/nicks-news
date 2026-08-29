<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import { cubicOut } from "svelte/easing";

	let {
		className = ""
	}: {
		className?: string;
	} = $props();

	// List of welcome words
	const welcomeWords = [
		"Hello",
		"Hola",
		"Hallo",
		"Bonjour",
		"Ciao",
		"Olá",
		"Salut",
		"Hej",
		"Halo",
		"Aloha",
		"Namaste",
		"Konnichiwa",
		"Annyeong",
		"Merhaba",
		"Shalom",
		"Hei",
		"Servus",
		"Grüezi"
	];

	let wordIndex = $state(0);

	onMount(() => {
		// Cycle through random welcome words in the header
		const timeout = window.setInterval(() => {
			let nextIndex = Math.floor(Math.random() * welcomeWords.length);

			if (welcomeWords.length > 1) {
				while (nextIndex === wordIndex) {
					nextIndex = Math.floor(Math.random() * welcomeWords.length);
				}
			}

			wordIndex = nextIndex;
		}, 2000);

		return () => window.clearInterval(timeout);
	});
</script>

<section class={`col about-hero ${className}`}>
	<h1 class="hero-welcome">
		{#key wordIndex}
			<span in:fly={{ y: 8, duration: 600, easing: cubicOut }}>
				{welcomeWords[wordIndex]}
			</span>
		{/key}
	</h1>

	<p class="hero-text">
		I am Nick, a <span>programmer</span> and <span>UI/UX designer</span> from Brandenburg, Germany. I aim to create <span>minimalist</span> interfaces and applications that <span>serve their purpose</span>.
	</p>
</section>

<style>
    .about-hero {
        width: 100%;
    }

	.hero-welcome {
		margin: 0;
		color: var(--color-text);
		font-family: var(--font-dotted);
		font-size: var(--font-size-full);
		font-weight: var(--font-weight-2);
	}

	.hero-welcome span {
		display: inline-block;
		font-family: inherit;
		font-weight: inherit;
	}

    /* Use color mix for opacity instead so that spans can use full opacity */
    .hero-text {
        max-width: 80%;
        margin: 0;
        color: color-mix(in srgb, var(--color-text) 25%, transparent);
        font-size: var(--font-size-2);
        font-weight: var(--font-weight-1);
    }

    /* Spans are highlighted, used for keywords */
    .hero-text span {
        color: var(--color-text);
        font-weight: var(--font-weight-2);
    }
</style>