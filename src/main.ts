import { mount } from "svelte";
import App from "./App.svelte";
import "./app.css";

// Mount the Svelte application inside app
mount(App, {
	target: document.getElementById("app")!,
	intro: true
});