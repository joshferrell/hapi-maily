#!/bin/sh
cd $TRAVIS_BUILD_DIR/server
yarn lint
yarn test:ci
