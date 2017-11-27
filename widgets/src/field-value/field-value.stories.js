import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import FieldValue from './field-value';

storiesOf('Field Value', module)
    .addDecorator(withKnobs)
    .add('with regular size', withInfo({
        text: `
            # Field Value
            #### With regular size

            Creates a field component that is useful for listing out
            lists of information such as contact information for the user
            or user preferrences that the user has set that they need to be
            notified for.

            #### Usage
            ~~~js
            import React from 'react';
            import { Button, FieldValue } from 'hapi-maily-widgets';
            ~~~

            const component = <FieldValue title="Phone" value="555-5555" size="regular" />;

            ~~~js
            renderMJML(component); // static HTML
            ~~~
        `,
        propTables: [FieldValue]
    })(() => {
        const component = (
            <FieldValue
                title={text('title', 'Phone')}
                value={text('value', '555-5555')}
                size="regular"
            />
        );
        return renderMJML(component);
    }))
    .add('with large size', withInfo({
        text: `
            # Field Value
            #### With large size

            Creates a field component for listing out lists of information,
            the large size should be used as a focus of the
            listing of items.

            For example, if listing out the billing information
            for a invoice to a customer, a large field value should be used for the
            amount while the username of the user is regular sized. This way
            the user can easily recognize the amount that they owe which is the
            focus of the email.

            #### Usage
            ~~~js
            import React from 'react';
            import { FieldValue, renderMJML } from 'hapi-maily-widgets';
            ~~~

            const component = <FieldValue title="Phone" value="555-5555" size="regular" />;

            ~~~js
            renderMJML(component); //static HTML
            ~~~
        `,
        propTables: [FieldValue]
    })(() => {
        const component = (
            <FieldValue
                title={text('title', 'Phone')}
                value={text('value', '555-5555')}
                size="large"
            />
        );
        return renderMJML(component);
    }));
