FROM node:lts-alpine AS builder

WORKDIR /app
COPY ./dist/apps/light-side-angular .
RUN npm install --production


FROM nginx:1.19.2

WORKDIR /usr/share/nginx/html

COPY --from=builder /app ./
COPY ./apps/light-side-angular/nginx.conf /etc/nginx/nginx.conf
