#!/bin/sh

# build project with babel
cd $TRAVIS_BUILD_DIR/widgets
yarn install
yarn build

# pubish to npm
npm install -g npm-cli-login
npm-cli-login
npm publish
