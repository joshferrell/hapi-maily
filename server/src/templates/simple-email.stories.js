import React from 'react';
import { renderMJML } from 'hapi-maily-widgets';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable import/no-extraneous-dependencies */

import SimpleEmail from './simple-email';

storiesOf('Templates/Simple Email', module)
    .addDecorator(withKnobs)
    .add('with first name and last name', () => {
        const component = (
            <SimpleEmail
                firstName={text('First Name', 'John')}
                lastName={text('Last Name', 'Doe')}
            />
        );
        return renderMJML(component);
    });
