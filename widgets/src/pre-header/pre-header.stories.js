import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import PreHeader from './pre-header';

storiesOf('Pre-Header', module)
    .addDecorator(withKnobs)
    .add('with email pre-header text', withInfo({
        text: `
            # Pre-Header
            #### with email pre-header text

            Creates a preheader used in emails that is useful for making the inbox message
            cleaner for the user so they can get a general idea of what the email is about.
            This should be placed at the top of the email template if used. It will also not
            display anything as it's display hidden.

            #### Usage

            const component = <PreHeader value="Simple Text" />;

            ~~~js
            renderMJML(component); // static HTML
            ~~~
        `,
        propTables: [PreHeader]
    })(() => {
        const component = (
            <PreHeader value={text('email pre-text', 'Simple Text')} />
        );
        return renderMJML(component);
    }));
