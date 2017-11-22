import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import PreHeader from './pre-header';

storiesOf('Pre-Header', module)
    .addDecorator(withKnobs)
    .add('with email pre-header text', () => {
        const component = (
            <mj-section>
                <PreHeader value={text('email pre-text', 'Simple Text')} />
                <mj-text>
                    <p>Pre header is hidden, inspect in order to see output</p>
                </mj-text>
            </mj-section>
        );
        return renderMJML(component);
    });
