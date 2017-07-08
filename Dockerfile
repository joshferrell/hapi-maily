FROM node:6.11

MAINTAINER Josh Ferrell "josh@joshferrell.me"

# create working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy all apps into image
COPY . /usr/src/app

# build server
RUN yarn install \
    && yarn build

# Expose docker port
EXPOSE 3000

CMD [ "node", "lib/server.js"]
