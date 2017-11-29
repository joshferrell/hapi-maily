#!/bin/sh
cd $TRAVIS_BUILD_DIR/plugin
yarn install
yarn lint
yarn test:ci
