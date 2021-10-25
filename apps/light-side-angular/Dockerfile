FROM node:lts-alpine

WORKDIR /app
COPY ./dist/apps/light-side-angular .

ENV PORT=4200
EXPOSE ${PORT}

RUN npm install --production
RUN npm install reflect-metadata tslib rxjs

CMD node ./main.js
