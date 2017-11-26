import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import Footer from './footer';

const contactTypes = [
    'phone',
    'email',
    'website',
    'fax'
];

storiesOf('Footer', module)
    .addDecorator(withKnobs)
    .add('with no nested components', withInfo({
        text: `
            # Footer
            #### No nested components

            A simple footer for usage on the bottom of the email, includes a
            company title and a copyright date set for the current date of the
            email generation.

            #### Usage

            const component = <Footer title="Widget Factory" />

            ~~~js
            renderMJML(component); //static HTML
            ~~~
        `,
        propTables: [Footer]
    })(() => {
        const component = (
            <Footer title={text('Company Name', 'Widget Factory')} />
        );
        return renderMJML(component);
    }))
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
    })
    .add('with custom theme', () => {
        const theme = {
            colors: { primary: '#2196F3' }
        };

        const component = (
            <Footer title={text('Company Name', 'Widget Factory')} />
        );

        return renderMJML(component, theme);
    })
    .add('with address information', () => {
        const theme = {
            address: {
                name: 'Widget Factory',
                addressLine1: '1234 Example Drive',
                city: 'Greatest City',
                state: 'CA',
                zip: '12345',
                country: 'USA'
            }
        };

        const component = (
            <Footer title={text('Company Name', 'Widget Factory')} />
        );

        return renderMJML(component, theme);
    })
    .add('with contact information', () => {
        const theme = {
            contact: [
                {
                    name: text('Contact Name', 'Phone'),
                    href: text('Url Link', 'tel:123-555-1234'),
                    value: text('Url Value', '123-555-1234'),
                    type: select('Contact Types', contactTypes, 'phone')
                }
            ]
        };

        const component = (
            <Footer title={text('Company Name', 'Widget Factory')} />
        );

        return renderMJML(component, theme);
    })
    .add('with contact and address information', () => {
        const theme = {
            address: {
                name: text('Address Name', 'Widget Factory'),
                addressLine1: text('Address Line 1', '1234 Example Drive'),
                addressLine2: text('Address Line 2', ''),
                city: text('City', 'Greatest City'),
                state: text('State', 'CA'),
                zip: text('Zip', '12345'),
                country: text('Country', 'USA')
            },
            contact: [
                {
                    name: text('Contact Name', 'Phone'),
                    href: text('Url Link', 'tel:123-555-1234'),
                    value: text('Url Value', '123-555-1234'),
                    type: select('Contact Types', contactTypes, 'phone')
                }
            ]
        };

        const component = (
            <Footer title={text('Company Name', 'Widget Factory')} />
        );

        return renderMJML(component, theme);
    });
