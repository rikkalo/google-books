FROM node:18-alpine
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
COPY ../model ./model
COPY client ./client

RUN yarn install --pure-lockfile --non-interactive

CMD ["yarn", "run:client"]