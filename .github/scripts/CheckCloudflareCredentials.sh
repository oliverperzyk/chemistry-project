#!/usr/bin/env bash

if [[ -z "$CLOUDFLARE_API_TOKEN" ]]; then
    echo "::error::Missing repository secret CLOUDFLARE_API_TOKEN."
    exit 1
fi
if [[ -z "$CLOUDFLARE_ACCOUNT_ID" ]]; then
    echo "::error::Missing repository secret CLOUDFLARE_ACCOUNT_ID."
    exit 1
fi
