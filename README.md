# ![Hapi Maily](http://i.imgur.com/Ko5GT7a.png?1) Hapi Maily

[![Join the chat at https://gitter.im/hapi-smiles/hapi-maily](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square)](https://gitter.im/hapi-smiles/hapi-maily?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://img.shields.io/travis/joshferrell/hapi-maily/master.svg?style=flat-square)](https://travis-ci.org/joshferrell/hapi-maily)
[![Coverage Status](https://img.shields.io/coveralls/joshferrell/hapi-maily/master.svg?style=flat-square)](https://coveralls.io/github/joshferrell/hapi-maily?branch=master)

An email service that generates html email templates using [mjml](https://mjml.io/), then sends the
emails to the requested user.

Create and send mail templates for your Hapi server easily simply by creating an [mjml](https://mjml.io)
template in React, and defining a route like so:

```js
    const SimpleEmail = () => (
        <mj-text>
            <p>This is pretty easy!</p>
        </mj-text>
    );

    server.route({
        method: 'POST',
        path: '/',
        handler: {
            email: {
                subject: 'test',
                component: SimpleEmail
            }
        }
    });
```

## Hapi Plugin

The plugin includes a hapi plugin which you can install and use
to send out emails by defining a route and an mjml component.

[Read More](./plugin/README.md)

## Email Component Library

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
