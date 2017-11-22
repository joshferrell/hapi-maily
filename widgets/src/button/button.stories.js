import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import Button from './button';

const buttonTypes = [
    'primary',
    'secondary',
    'danger',
    'success',
    'warning'
];

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('with text', () => {
        const component = (
            <Button
                url=""
                buttonType={select('Button Type', buttonTypes, 'primary')}
                squared={boolean('Squared', false)}
            >
                {text('Button Text', 'Click Me!')}
            </Button>
        );
        return renderMJML(component);
    });
