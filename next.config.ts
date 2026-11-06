import type { NextConfig } from "next"
import { NavigationLinks } from "./src/lib/globals/NavigationLinks"

/**
 * @summary Configuration of Next.js
 * @description Enforces React & Next.js rules to be even stricter.
 */
export default {
    reactStrictMode: true,
    reactCompiler: true,
    typedRoutes: true,
    redirects: async () =>
        ["/github", "/code"].map((route) => ({
            source: route,
            destination: NavigationLinks.SOURCE_CODE_URL.toString(),
            statusCode: 301 as const,
        })),
} satisfies NextConfig
