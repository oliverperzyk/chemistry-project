import { bindings, defineConfig, defineWorker } from "cf/config"

export default defineConfig({
    worker: defineWorker({
        name: "chemistry-infographic",
        entrypoint: "vinext/server/fetch-handler",
        domains: ["chemistry.oliverperzyk.com"],
        workersDev: false,
        previewUrls: false,
        compatibilityDate: "2026-10-30",
        compatibilityFlags: ["nodejs_compat"],
        assets: {
            htmlHandling: "none",
            notFoundHandling: "none",
            runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
        },
        env: {
            ASSETS: bindings.assets(),
            IMAGES: bindings.images(),
            VINEXT_KV_CACHE: bindings.kv(),
        },
    }),
})
