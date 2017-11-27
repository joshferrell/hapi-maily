import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import Footer from './footer';
import PostFooter from './post-footer';

storiesOf('Footer/Post-Footer', module)
    .addDecorator(withKnobs)
    .add('simple post footer component', withInfo({
        text: `
            # Footer
            #### With a post-footer component

            The post-footer component is a nested component in the footer component.
            This component is used to set values after address, contact, or pre-footer
            tags are displayed.

            #### Usage
            ~~~js
            import React from 'react';
            import { Footer, renderMJML } from 'hapi-maily-widgets';
            ~~~

            const component = (
                <Footer title={text('Company Name', 'Widget Factory')}>
                    <PostFooter>
                        <mj-image
                            src="http://fillmurray.com/200/300"
                            width="300"
                            height="200"
                            alt="murray!"
                        />
                    </PostFooter>
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
                <PostFooter>
                    <mj-image
                        src="http://fillmurray.com/200/300"
                        width="300"
                        height="200"
                        alt="murray!"
                    />
                </PostFooter>
            </Footer>
        );
        return renderMJML(component);
    }))
    .add('with other components', withInfo({
        text: `
            # Footer
            #### With address information

            The postfooter component is a nested component in the footer component.
            This component is used to set values after address, contact, or pre-footer
            tags are displayed.

            #### Usage
            ~~~js
            import React from 'react';
            import { Footer, renderMJML } from 'hapi-maily-widgets';
            ~~~

            const component = (
                <Footer title={text('Company Name', 'Widget Factory')}>
                    <PostFooter>
                        <mj-image
                            src="http://fillmurray.com/200/300"
                            width="300"
                            height="200"
                            alt="murray!"
                        />
                    </PostFooter>
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
                <PostFooter>
                    <mj-image
                        src="http://fillmurray.com/200/300"
                        width="300"
                        height="200"
                        alt="murray!"
                    />
                </PostFooter>
            </Footer>
        );
        return renderMJML(component, theme);
    }));
