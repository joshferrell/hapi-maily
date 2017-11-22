# ![Hapi Maily](http://i.imgur.com/Ko5GT7a.png?1) Hapi Maily

[![Join the chat at https://gitter.im/hapi-maily/Lobby](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square)](https://gitter.im/hapi-maily/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://img.shields.io/travis/joshferrell/hapi-maily/master.svg?style=flat-square)](https://travis-ci.org/joshferrell/hapi-maily)
[![Coverage Status](https://img.shields.io/coveralls/joshferrell/hapi-maily/master.svg?style=flat-square)](https://coveralls.io/github/joshferrell/hapi-maily?branch=master)
[![Docker Pulls](https://img.shields.io/docker/pulls/jferrell/hapi-maily.svg?style=flat-square)](https://hub.docker.com/r/jferrell/hapi-maily/)

An email service that generates html email templates using [mjml](https://mjml.io/), then sends the emails to the requested user.

## Component Library

The project includes a component library that allows users to
create widgets in React and then preview them in Storybook easily.
You can view current components available to install through
`yarn add hapi-maily-widgets`
[online through storybook](https://joshferrell.github.io/hapi-maily/)

[Read More](./widgets/README.md)

## Sample Server Project

The sample server allows the creation of email templates that can be viewed through storybook
for auditing. It also allows restricts the information allowed to be injected into the
email templates since most of the data is static. This is to allow companies to better audit
outbound emails to users through one Micro-Service.

[Read More](./server/README.md)

## Future Goals

The goal of the project is to eventually become a Hapi plugin that allows the creation of
email routes in a trivial manner. For instance, eventually you should be able to do this:

```js
import joi from 'joi';

//Simple React component that will be sent to users
const SimpleComponent = ({ firstName }) => (
    <mjml-text>
        <p>test</p>
        <p>{firstName}</p>
    <mjml-text>
);

const hapiRoute = {
    method: 'POST',
    path: '/example',
    handler: {
        email: {
            component: SimpleComponent,
            subject: 'Hi I\'m Paul!'
        }
    },
    config: {
        validate: {
            payload: {
                email: joi.string().email().required(),
                firstName: joi.string()
            }
        }
    }
};
```

This will create a route that will send an email to the requested user with the first name as
an optional parameter in the payload.
