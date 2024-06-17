# ---- Copy Files/Build ----
FROM base:latest AS build
COPY . .
RUN pnpm run build \
    && pnpm prune --prod

# ---- Release ----
FROM node:lts-alpine3.20 AS release
WORKDIR /app
COPY --from=build /app/dist/apps/sms ./dist/apps/sms
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
USER node
CMD ["node", "dist/apps/sms/main"]