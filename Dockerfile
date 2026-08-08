# syntax=docker/dockerfile:1

# ---- build stage: compile the Astro site to static files ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- runtime stage: serve the static output with nginx ----
FROM nginx:1.27-alpine AS runtime
# Patch base-image OS packages to clear fixable CVEs (added by infra-audit shift-left)
RUN apk upgrade --no-cache
# Drop the default server config and add ours.
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/site.conf
RUN nginx -t
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1
CMD ["nginx", "-g", "daemon off;"]
