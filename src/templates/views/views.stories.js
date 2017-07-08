import React from 'react';
import { renderMJML } from '../RenderMJML';

/* eslint-disable import/no-extraneous-dependencies, import/first */

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { checkA11y } from 'storybook-addon-a11y';

/* eslint-enable import/no-extraneous-dependencies, import/first */

import {
    DemoTemplate
} from './index';

storiesOf('Views', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithInfo('Demo Template',
        'An example of what a composed email template looks like',
        () => (
            renderMJML()(
                <DemoTemplate testString={text('Test string', 'This is kinda neat')} />
            )
        )
    );
