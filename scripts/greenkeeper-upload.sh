#!/bin/sh
cd $TRAVIS_BUILD_DIR/server
greenkeeper-lockfile-upload
cd $TRAVIS_BUILD_DIR/widgets
greenkeeper-lockfile-upload
