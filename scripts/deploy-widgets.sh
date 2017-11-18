#!/bin/sh
cd $TRAVIS_BUILD_DIR/widgets
yarn install
yarn deploy-docs
