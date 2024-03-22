import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-cloudflare"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		preserve: ["ld+json"],
		scss: {
			includePaths: ["src"],
			prependData: `
				@import "src/lib/scss/_variables.scss";
				@import "src/lib/scss/_mixins.scss";
			`
		}
	}),

	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: false
		}
	}
}

export default config
