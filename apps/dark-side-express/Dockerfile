FROM node:lts-alpine

WORKDIR /app
COPY ./dist/apps/dark-side-express .

ENV PORT=3333
EXPOSE ${PORT}

RUN npm install --production
RUN npm install reflect-metadata tslib rxjs compression

CMD node ./main.js
