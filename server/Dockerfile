FROM node:18-alpine as build

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
COPY ../model ./model
COPY server ./server

RUN yarn install --pure-lockfile --non-interactive

RUN yarn build:model
RUN yarn build:server

FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

COPY --from=build /usr/src/app/server/package.json /usr/src/app/server/package.json
COPY --from=build /usr/src/app/server/dist /usr/src/app/server/dist
COPY --from=build /usr/src/app/model/package.json /usr/src/app/model/package.json
COPY --from=build /usr/src/app/model/dist /usr/src/app/model/dist

ENV NODE_ENV development

RUN yarn install --pure-lockfile --non-interactive --development

CMD ["yarn", "start:server"]