FROM node:8

MAINTAINER Josh Ferrell "josh@joshferrell.me"

# create working directory
RUN mkdir -p /usr/src/app
COPY .babelrc /usr/src/app
COPY .env.example /usr/src/app
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
COPY src /usr/src/app

WORKDIR /usr/src/app

# build server
RUN yarn install
RUN yarn build

# Expose docker port
EXPOSE 3000

CMD [ "node", "lib/server.js"]
