import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import Footer from './footer';

storiesOf('Footer', module)
    .addDecorator(withKnobs)
    .add('with no nested components', () => {
        const component = (
            <Footer title={text('Company Name', 'Widget Factory')} />
        );
        return renderMJML(component);
    })
    .add('with custom nest component', () => {
        const component = (
            <Footer title={text('Company Name', 'Widget Factory')}>
                <mj-image
                    src="http://fillmurray.com/200/300"
                    width="300"
                    height="200"
                    alt="murray!"
                />
            </Footer>
        );
        return renderMJML(component);
    });
