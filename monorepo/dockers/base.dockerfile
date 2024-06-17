# ---- Bases ----
FROM node:lts-alpine3.20 AS base
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm

# ---- Dependencies ----
FROM base AS dependencies
RUN pnpm install --frozen-lockfile