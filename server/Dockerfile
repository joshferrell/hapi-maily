FROM node:8.9.1

MAINTAINER Josh Ferrell "josh@joshferrell.me"

# create working directory
RUN mkdir -p /usr/src/app
COPY .babelrc /usr/src/app
COPY .env.example /usr/src/app
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
COPY src /usr/src/app/src

WORKDIR /usr/src/app

# build server
RUN yarn install
RUN yarn build

# Expose docker port
EXPOSE 3000

CMD [ "node", "build/server.js"]
