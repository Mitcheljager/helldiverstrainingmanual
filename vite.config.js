import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vitest/config"

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	},
	css: {
		preprocessorOptions: {
			scss: {
				appendData: `
					@import "src/lib/scss/_variables.scss";
					@import "src/lib/scss/_mixins.scss";
				`
			}
		}
	}
})
