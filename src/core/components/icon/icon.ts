import iconoirData from "@iconify-json/iconoir/icons.json";
import type { IconifyIcon, IconifyJSON } from "@iconify/types";
import { iconToSVG, getIconData } from "@iconify/utils";

const iconSet = iconoirData as IconifyJSON;

// Cusrom icons, currently only used for a figma-style cursor
const customIcons: Record<string, IconifyIcon> = {
	cursor: {
		width: 27,
		height: 28,
		body: `<path d="M11.8924 23.7113L7.33378 7.71979C7.0984 6.89406 7.95602 6.18103 8.73584 6.5541L23.8385 13.7792C24.6416 14.1633 24.5812 15.3159 23.7425 15.6131L17.5312 17.8139C17.3056 17.8938 17.1164 18.0511 16.9978 18.2573L13.7318 23.9361C13.2908 24.7028 12.1347 24.5616 11.8924 23.7113Z" fill="currentColor"/>`
	}
};

const iconCache: Record<string, string> = {};

export const setIcon = (name: string): string | null => {
	const cacheKey = name;

	// If the icon is already stored in cache, return it from there
	if (iconCache[cacheKey]) return iconCache[cacheKey];

	const iconData = customIcons[name] ?? getIconData(iconSet, name);
	if (!iconData) return null;

	const svgData = iconToSVG(iconData, { height: "auto" });

	// Check if the icon uses stroke so the SVG can inherit text color cleanly
	const isStroke = svgData.body.includes("stroke=");

	const svgString = `<svg
		viewBox="${svgData.attributes.viewBox}"
		width="100%"
		height="100%"
		${isStroke ? 'stroke="currentColor" fill="none"' : 'fill="currentColor"'}
		${isStroke ? 'stroke-width="2" stroke-linecap="round" stroke-linejoin="round"' : ''}
	>${svgData.body}</svg>`;

	iconCache[cacheKey] = svgString;
	return svgString;
};