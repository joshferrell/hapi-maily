#!/bin/sh

# build project with babel
cd $TRAVIS_BUILD_DIR/plugin
yarn install
yarn build
