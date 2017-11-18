# Email Widgets

A collection of email widgets for use with [MJML](https://mjml.io)

## Basic Usage

***Install Widgets***
```
yarn add hapi-maily-widgets
```

***Usage***
```
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Footer, renderMJML } from 'header';

const emailComponent = renderMJML(<Footer />);
const staticEmail = renderToStaticMarkup(emailComponent);

console.log(staticEmail); // Static HTML email
```

## Available Components

Preview available widgets in react storybook, each story item
needs to be served through `renderMJML` in order to convert
mjml into valid HTML markup.

[View Storybook](./storybook-static/index.html)

## Contributing

### Available Commands

#### `yarn start`
Generates the email widgets in storybook mode.
Open http://localhost:9009 to view it in the browser.

[Read more about storybook](https://storybook.js.org/basics/introduction/)

### `yarn lint`
Runs the linting command, should be done before pull requests are made.
This application follows the airbnb linting styleguide with minor changes.

[Read more about the styleguide](https://github.com/airbnb/javascript)
