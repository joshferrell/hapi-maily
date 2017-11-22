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
                url={text('Button Url', '')}
                buttonType={select('Button Type', buttonTypes, 'primary')}
                squared={boolean('Squared', false)}
            >
                {text('Button Text', 'Click Me!')}
            </Button>
        );
        return renderMJML(component);
    })
    .add('using a custom theme', () => {
        const theme = {
            colors: {
                primary: '#2196F3',
                secondary: '#9E9E9E',
                paul: '#616161'
            }
        };

        const component = (
            <Button
                url={text('Button Url', '')}
                buttonType={select('Button Type', Object.keys(theme.colors), 'primary')}
                squared={boolean('Squared', false)}
            >
                {text('Button Text', 'Click Me!')}
            </Button>
        );

        return renderMJML(component, theme);
    });
