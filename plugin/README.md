# Hapi Plugin

### Basic Usage

```sh
yarn install hapi-maily
```

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
