import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
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
    .add('with text', withInfo(`
        Creates a simple button using the default theme colors from
        [flatuicolors](https://flatuicolors.com/). Includes different
        types of buttons including primary, secondary, danger, success,
        and warning. The button opens a url in the current tab.

        const component = (
            <Button url="http://google.com" buttonType="primary">
                Click Me!
            </Button>
        );

        return renderMJML(component);

        renderMJML will return a string of static HTML
    `)(() => {
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
    }))
    .add('using a custom theme', withInfo(`
        Creates a button with a custom theme that can be used to extend
        the available properties and button types available to the button
        component. A colors object must be provided to the button that includes
        a button type and a string color in Hex.

        const component = (
            <Button url="http://google.com" buttonType="primary">
                Click Me!
            </Button>
        );

        ~~~js
        const theme = {
            colors: {
                primary: '#2196F3',
                secondary: '#9E9E9E',
                paul: '#616161'
            }
        };

        renderMJML(component, theme);
        ~~~
    `)(() => {
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
    }));
