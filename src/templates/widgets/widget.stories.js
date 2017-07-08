import React from 'react';
import { renderMJML } from '../RenderMJML';

/* eslint-disable import/no-extraneous-dependencies, import/first */

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { checkA11y } from 'storybook-addon-a11y';

/* eslint-enable import/no-extraneous-dependencies, import/first */

import {
    Button,
    FieldValue,
    Footer,
    Header
} from './index';

const colors = {
    primary: 'primary',
    secondary: 'secondary',
    danger: 'danger',
    success: 'success',
    warning: 'warning'
};

const horizontalAlign = {
    left: 'left',
    right: 'right',
    center: 'center'
};

storiesOf('Widgets', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithInfo('Button, with rounded border',
        `Add a button for executing an action url. Use the rounded button
        for call to actions that are primary.`,
        () => (
            renderMJML()(
                <Button
                  text={text('Button Text', 'I\'m a button :)')}
                  url="#"
                  buttonType={select('Button Type', colors, 'primary')}
                  align={select('Horizontal Align', horizontalAlign, 'center')}
                />
            )
        )
    )
    .addWithInfo('Button, with squared border',
        `Add a button for executing an action url. Use the squared button
        for minor action links such as read more links.`,
        () => (
            renderMJML()(
                <Button
                  text={text('Button Text', 'I\'m a button :)')}
                  url="#"
                  squared
                  buttonType={select('Button Type', colors, 'primary')}
                  align={select('Horizontal Align', horizontalAlign, 'center')}
                />
            )
        )
    )
    .addWithInfo('Field Value, with title and value',
        `Adds a field value layout that is two coluns. Has to different
        sizes, regular and large. Use large for important sections that need
        to be prioritized, and regular for fields that aren't as important
        to the user.`,
        () => (
            renderMJML()(
                <FieldValue
                  title={text('Column Title', 'Example Title')}
                  size={select('Text Size', { regular: 'regular', large: 'large' }, 'regular')}
                  value={text('Column Value', 'Something Goes Here')}
                />
            )
        )
    )
    .addWithInfo('Footer',
        `Creates a footer that displays the current year for copyright
        purposes.`,
        () => (
            renderMJML()(
                <Footer />
            )
        )
    )
    .addWithInfo('Header',
        'Creates a header that displays a logo and a given title',
        () => (
            renderMJML()(
                <Header title={text('Header Title', 'Example Title')} />
            )
        )
    );
