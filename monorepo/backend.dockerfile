# ---- Bases ----
FROM node:lts-alpine3.20 AS base
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm

# ---- Dependencies ----
FROM base AS dependencies
RUN pnpm install --frozen-lockfile

# ---- Copy Files/Build ----
FROM dependencies AS build
COPY . .
RUN npx prisma generate \
    && pnpm run build \
    && pnpm prune --prod

# ---- Release ----
FROM node:lts-alpine3.20 AS release
WORKDIR /app
COPY --from=build /app/dist/apps/backend ./dist/apps/backend
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
USER node
CMD ["node", "dist/apps/backend/main"]