#!/bin/sh
cd $TRAVIS_BUILD_DIR/server
yarn install
yarn lint
yarn test:ci
