# ![Hapi Maily](http://i.imgur.com/Ko5GT7a.png?1) Hapi Maily
[![Join the chat at https://gitter.im/hapi-smiles/hapi-maily](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square)](https://gitter.im/hapi-smiles/hapi-maily?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://img.shields.io/travis/joshferrell/hapi-maily/master.svg?style=flat-square)](https://travis-ci.org/joshferrell/hapi-maily)
[![Coverage Status](https://img.shields.io/coveralls/joshferrell/hapi-maily/master.svg?style=flat-square)](https://coveralls.io/github/joshferrell/hapi-maily?branch=master)

This is a plugin for sending out emails by defining a custom handler. When the route is hit, an
email is sent to the user in the email attribute of the payload.

## Install

You can add the module to your Hapi Server using npm or yarn
```sh
npm install hapi-maily --save
# or
yarn add hapi-maily
```

## Documentation
### [Options Reference](./docs/options-reference.md)

Read about options for the plugin and route options. Useful if you wish to extend the plugin
beyond the setup used in the [example server](../server).

[Read More](./docs/options-reference.md)

## Quick Start

In your Hapi apps main JavaScript file add the following code to a created Hapi server object.
You will also add the routes for your API as described on the [hapijs documentation](http://hapijs.com).

For an example server see the [example hapi server](../server). To see a simple implementation.
