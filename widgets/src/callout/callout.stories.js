import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import Callout from './callout';

storiesOf('Callout', module)
    .addDecorator(withKnobs)
    .add('with title and value', withInfo({
        text: `
            # Callout
            #### With a title and value

            A callout component that is used to have the user focus on for a
            small piece of information. This is commonly used to place Verification
            codes or status messages such as success or failure.

            #### Usage

            const component = <Callout title="Verification Code" text="ABC123" />;

            ~~~js
            renderMJML(component); //static html
            ~~~
        `,
        propTables: [Callout]
    })(() => {
        const component = (
            <Callout
                title={text('Verification Title', 'Verification Code')}
                text={text('Verification Body', 'ABCD1234')}
            />
        );
        return renderMJML(component);
    }));
