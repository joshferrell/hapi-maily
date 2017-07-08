# ![Hapi Maily](http://i.imgur.com/Ko5GT7a.png?1) Hapi Maily

[![Join the chat at https://gitter.im/hapi-maily/Lobby](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square)](https://gitter.im/hapi-maily/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://img.shields.io/travis/joshferrell/hapi-maily/master.svg?style=flat-square)](https://travis-ci.org/joshferrell/hapi-maily)
[![Coverage Status](https://img.shields.io/coveralls/joshferrell/hapi-maily/master.svg?style=flat-square)](https://coveralls.io/github/joshferrell/hapi-maily?branch=master)
![Ready for use](https://img.shields.io/badge/ready%20for%20use-no-red.svg?style=flat-square)

An email service that generates html email templates using [mjml](https://mjml.io/), then sends the emails to the requested user.

## Getting Started

Before starting, you will first need to look at the `.env.example` file for your environment variables.
To get up and running, simply duplicate the `.env.example` file to `.env`.

***Install Application***
```
yarn install
```

***Run Application***
```
yarn start
```

## Available Commands

### `yarn start`
Runs the app in development mode.
Open http://localhost:3000/documentation to view documentation
for the server in the browser.

The server will reload if you make edits.

[View Server Documentation](http://localhost:3000/documentation)<br />
[View Email Templates](http://localhost:3000/templates)

### `yarn storybook`
Generates the email templates in interactive mode.
Open http://localhost:6006 to view it in the browser.

[Read more about storybook](https://storybook.js.org/basics/introduction/)

### `yarn test`
Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

[Read more about testing](https://facebook.github.io/jest/docs/en/getting-started.html)
### `yarn lint`
Runs the linting command, should be done before pull requests are made.
This application follows the airbnb linting styleguide with minor changes.

[Read more about the styleguide](https://github.com/airbnb/javascript)
### `yarn coverage`
Runs the jest coverage command, checks the current code coverage of the application.
The standard is keeping coverage above or at yellow status.

### `yarn deploy`
Builds a local docker container that can be accessed based on the environment
variables locally.
