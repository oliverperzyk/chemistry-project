# syntax=docker/dockerfile:1

FROM oven/bun:canary AS builder

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json bun.lock ./
RUN LEFTHOOK=0 bun install --frozen-lockfile
COPY . .
ARG NEXT_PUBLIC_WEBSITE_ENDPOINT_URL=https://chemistry.oliverperzyk.com
RUN NEXT_PUBLIC_WEBSITE_ENDPOINT_URL=${NEXT_PUBLIC_WEBSITE_ENDPOINT_URL} \
    bunx --bun vite build --config vite.docker.config.ts

FROM oven/bun:canary-slim AS runner

WORKDIR /app
ARG APP_PORT=3000
ARG APP_HOSTNAME=0.0.0.0
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    APP_PORT=${APP_PORT} \
    PORT=${APP_PORT} \
    HOST=${APP_HOSTNAME}

LABEL org.opencontainers.image.title="chemistry-infographic" \
    org.opencontainers.image.description="Website about octane rating, created as a chemistry project." \
    org.opencontainers.image.version="0.0.1" \
    org.opencontainers.image.authors="Oliwier Perzyński <olek@oliverperzyk.com>" \
    org.opencontainers.image.licenses="MIT" \
    org.opencontainers.image.url="https://chemistry.oliverperzyk.com" \
    org.opencontainers.image.documentation="https://github.com/oliverperzyk/chemistry-infographic" \
    org.opencontainers.image.source="https://github.com/oliverperzyk/chemistry-infographic.git"

COPY --from=builder --chown=bun:bun /app/dist/standalone ./
COPY --from=builder --chown=bun:bun /app/scripts/Healthcheck.ts ./scripts/Healthcheck.ts

USER bun
EXPOSE ${APP_PORT}
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD ["bun", "./scripts/Healthcheck.ts"]
CMD ["bun", "server.js"]
