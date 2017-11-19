#!/bin/sh

# build project with babel
cd $TRAVIS_BUILD_DIR/widgets
yarn install
yarn build
