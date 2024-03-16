import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vitest/config"

export default defineConfig({
	plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "mitchel-jager",
            project: "javascript-sveltekit"
        }
    }), sveltekit()],
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