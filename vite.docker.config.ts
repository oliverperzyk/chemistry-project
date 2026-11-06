import { defineConfig } from "vite"
import vinext from "vinext"
import nextConfig from "./next.config"

export default defineConfig({
    plugins: [
        vinext({
            nextConfig: { ...nextConfig, output: "standalone" },
            prerender: { routes: "*" },
        }),
    ],
})
