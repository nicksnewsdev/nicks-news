type ViewTransitionDocument = Document & {
	startViewTransition?: (callback: () => void) => {
		ready: Promise<void>;
	};
};

// Avariable themes
export type Theme = "dark" | "light";
const themeStorageKey = "nicks.news:selectedTheme";

export function getTheme(): Theme {
	const savedTheme = localStorage.getItem(themeStorageKey);

	if (savedTheme === "light" || savedTheme === "dark") {
		return savedTheme;
	}

	return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function setTheme(theme: Theme): void {
	document.documentElement.dataset.theme = theme;
	localStorage.setItem(themeStorageKey, theme);
}

export function loadTheme(): Theme {
	const theme = getTheme();

	document.documentElement.dataset.theme = theme;

	return theme;
}

// Toggle the theme between all avaraible themes
export function toggleTheme(event: MouseEvent): Theme {
	const currentTheme = getTheme();
	const nextTheme: Theme = currentTheme === "light" ? "dark" : "light";

	const x = event.clientX;
	const y = event.clientY;

	const documentWithTransition = document as ViewTransitionDocument;

	if (!documentWithTransition.startViewTransition) {
		setTheme(nextTheme);
		return nextTheme;
	}

	const transition = documentWithTransition.startViewTransition(() => {
		setTheme(nextTheme);
	});

	transition.ready.then(() => {
		const radius = Math.hypot(
			Math.max(x, window.innerWidth - x),
			Math.max(y, window.innerHeight - y)
		);

		// Animate a site change transition using viewtransitions api
		document.documentElement.animate(
			{
				clipPath: [
					`circle(0px at ${x}px ${y}px)`,
					`circle(${radius}px at ${x}px ${y}px)`
				]
			},
			{
				duration: 600,
				easing: "cubic-bezier(.22, 1, .36, 1)",
				pseudoElement: "::view-transition-new(root)"
			}
		);
	});

	return nextTheme;
}