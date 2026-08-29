import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { viteSingleFile } from "vite-plugin-singlefile";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
	base: "./",
	// Vite requires the Svelte plugin to execute Svelte files
	plugins: [
		svelte(),
		viteSingleFile(),
	],
	server: {
    	port: 5173
  	},
	resolve: {
		alias: {
			$core: fileURLToPath(new URL("./src/core", import.meta.url)),
			$pages: fileURLToPath(new URL("./src/pages", import.meta.url)),
			$api: fileURLToPath(new URL("./functions/api", import.meta.url)),
		},
	},
});