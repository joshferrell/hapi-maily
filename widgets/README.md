# ![Hapi Maily](http://i.imgur.com/Ko5GT7a.png?1) Email Widgets

A collection of email widgets for use with [MJML](https://mjml.io)

## Basic Usage

***Install Widgets***
```sh
yarn add hapi-maily-widgets
```

***Usage***
```js
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

[View Storybook of Components](https://joshferrell.github.io/hapi-maily/)

## Theming

You are able to customize the look of the mail components by passing a
theme property to the `renderMJML` method.

The structure of the theme should be as follows

```js
const theme = {
    colors: {
        primary: '#E91E63'
        // you can use additional colors
        // below, so long as it is
        // string: 'HEX'
    },
    headerImage: {
        src: 'url to hosted image',
        alt: 'alt text describing image'
    }
}
```

Then you can simply call the renderMJML method with your components.

```js
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button, renderMJML } from 'header';

const theme = {
    colors: {
        primary: '#03A9F4',
        secondary: '#009688',
        paul: '#8BC34A'
    }
};

const buttonComponent = (
    <Button
        url="http://google.com"
        buttonType="paul"
    >
        Hi Im Paul!
    </Button>
)

const emailComponent = renderMJML(buttonComponent, theme);
const staticEmail = renderToStaticMarkup(emailComponent);

console.log(staticEmail); // Static Themed HTML email
```


## Contributing

### Available Commands

#### `yarn start`
Generates the email widgets in storybook mode.
Open http://localhost:9009 to view it in the browser.

[Read more about storybook](https://storybook.js.org/basics/introduction/)

#### `yarn lint`
Runs the linting command, should be done before pull requests are made.
This application follows the airbnb linting styleguide with minor changes.

[Read more about the styleguide](https://github.com/airbnb/javascript)

## TODO
[] Create styles default for when style is missing, override styles to use defaults
    * example: if headerImage is present, but colors is not, use default colors
    * if colors is present but header image is not, use no headerimage styles
    * include check that if colors is present, then make sure structure is valid
[] Create add with info checks for storybook so that markdown can be included
