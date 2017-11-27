import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import Footer from './footer';
import PreFooter from './pre-footer';

storiesOf('Footer/Pre-Footer', module)
    .addDecorator(withKnobs)
    .add('simple prefooter component', withInfo({
        text: `
            # Footer
            #### With a pre-footer component

            The prefooter component is a nested component in the footer component.
            This component is used to set values before address, contact, or post-footer
            tags are displayed.

            #### Usage
            ~~~js
            import React from 'react';
            import { Footer, renderMJML } from 'hapi-maily-widgets';
            ~~~

            const component = (
                <Footer title={text('Company Name', 'Widget Factory')}>
                    <PreFooter>
                        <mj-image
                            src="http://fillmurray.com/200/300"
                            width="300"
                            height="200"
                            alt="murray!"
                        />
                    </PreFooter>
                </Footer>
            );

            ~~~js
            renderMJML(component); // static HTML
            ~~~
        `,
        propTables: [Footer]
    })(() => {
        const component = (
            <Footer title={text('Company Name', 'Widget Factory')}>
                <PreFooter>
                    <mj-image
                        src="http://fillmurray.com/200/300"
                        width="300"
                        height="200"
                        alt="murray!"
                    />
                </PreFooter>
            </Footer>
        );
        return renderMJML(component);
    }))
    .add('with other components', withInfo({
        text: `
            # Footer
            #### With address information

            The prefooter component is a nested component in the footer component.
            This component is used to set values before address, contact, or post-footer
            tags are displayed.

            #### Usage
            ~~~js
            import React from 'react';
            import { Footer, renderMJML } from 'hapi-maily-widgets';
            ~~~

            const component = (
                <Footer title={text('Company Name', 'Widget Factory')}>
                    <PreFooter>
                        <mj-image
                            src="http://fillmurray.com/200/300"
                            width="300"
                            height="200"
                            alt="murray!"
                        />
                    </PreFooter>
                </Footer>
            );

            ~~~js
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

            renderMJML(component, theme); // static HTML
            ~~~
        `,
        propTables: [Footer]
    })(() => {
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
            <Footer title={text('Company Name', 'Widget Factory')}>
                <PreFooter>
                    <mj-image
                        src="http://fillmurray.com/200/300"
                        width="300"
                        height="200"
                        alt="murray!"
                    />
                </PreFooter>
            </Footer>
        );
        return renderMJML(component, theme);
    }));
