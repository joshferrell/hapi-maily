import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import FieldValue from './field-value';

storiesOf('Widget/Field Component', module)
    .addDecorator(withKnobs)
    .add('with regular size', () => {
        const component = (
            <FieldValue
                title={text('title', 'Phone')}
                value={text('value', '555-5555')}
                size="regular"
            />
        );
        return renderMJML(component);
    })
    .add('with large size', () => {
        const component = (
            <FieldValue
                title={text('title', 'Phone')}
                value={text('value', '555-5555')}
                size="large"
            />
        );
        return renderMJML(component);
    });
