#!/bin/sh
cd $TRAVIS_BUILD_DIR/server
greenkeeper-lockfile-update
cd $TRAVIS_BUILD_DIR/widgets
greenkeeper-lockfile-update
