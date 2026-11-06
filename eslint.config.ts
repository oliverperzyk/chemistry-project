import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import pluginNext from "@next/eslint-plugin-next"
import json from "@eslint/json"
import markdown from "@eslint/markdown"
import css from "@eslint/css"
import { defineConfig, globalIgnores } from "eslint/config"

/**
 * @summary Configuration of ESLint.
 * @description Used to configure rules for whole codebase, to keep code quality.
 * @see {@link https://eslint.org}
 */
export default defineConfig([
    globalIgnores([
        "**/.idea/**",
        "**/.vscode/**",
        "**/node_modules/**",
        "**/dist/**",
        "**/out/**",
        "**/build/**",
        "**/.next/**",
        "**/.vercel/**",
        "**/.cloudflare/**",
        "**/.vinext/**",
        "**/*.tsbuildinfo",
        "**/*.env*",
        "!.env.example",
        "**/.DS_Store",
        "postcss.config.js",
        "next-env.d.ts",
    ]),
    {
        files: ["**/*.{ts,tsx,mts,cts}"],
        extends: [tseslint.configs.recommended],
    },
    {
        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
        extends: [pluginReact.configs.flat.recommended, pluginReact.configs.flat["jsx-runtime"]],
        settings: { react: { version: "19.2" } },
    },
    {
        files: ["**/*.{ts,tsx}"],
        plugins: { js },
        extends: ["js/recommended", pluginNext.configs.recommended],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            /**
             * @remarks It's better to use `@typescript-eslint/no-unused-vars` as this rule throws
             * errors on enumerations, even though they're used in other files.
             */
            "no-unused-vars": "off",
        },
    },
    {
        files: ["**/*.json"],
        plugins: { json },
        language: "json/json",
        extends: ["json/recommended"],
    },
    {
        files: ["**/*.jsonc", "tsconfig.json"],
        plugins: { json },
        language: "json/jsonc",
        extends: ["json/recommended"],
    },
    {
        files: ["**/*.json5"],
        plugins: { json },
        language: "json/json5",
        extends: ["json/recommended"],
    },
    {
        files: ["**/*.md"],
        plugins: { markdown },
        language: "markdown/gfm",
        extends: ["markdown/recommended"],
    },
    {
        files: ["**/*.css"],
        plugins: { css },
        language: "css/css",
        extends: ["css/recommended"],
        languageOptions: {
            customSyntax: {
                atrules: {
                    theme: {
                        prelude: "[ inline | reference ]*",
                        block: {
                            style: true,
                        },
                    },
                },
            },
        },
        rules: {
            "css/no-invalid-properties": [
                "error",
                {
                    allowUnknownVariables: true,
                },
            ],
        },
    },
])
