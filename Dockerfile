# syntax=docker/dockerfile:1
# AMG Garage — Next.js (standalone) üretim imajı.
# NOT: Vercel bu Dockerfile'ı kullanmaz; Vercel doğrudan GitHub deposundan derler.

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

FROM node:22-alpine AS builder
WORKDIR /app
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    DOCKER_BUILD=1 \
    NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# İsteğe bağlı: Google yorumlarının derleme sırasında alınması için gizli dosya (imaj katmanına yazılmaz).
#   docker build --secret id=google_env,src=.env.local -t amg-garage .
RUN --mount=type=secret,id=google_env,required=false \
    sh -c 'if [ -f /run/secrets/google_env ]; then set -a; . /run/secrets/google_env; set +a; fi; npm run build'

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
