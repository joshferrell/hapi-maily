import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import Link from './link';
import PhoneLink from './phone-link';
import MailLink from './mail-link';

storiesOf('Link', module)
    .addDecorator(withKnobs)
    .add('with plain link', withInfo({
        text: `
            # Regular Link
            #### with plain link

            Creates a link with default no openner and norefferer and a flag for if Link
            should be opened in a new tab.

            Must be used in <mj-text> tag for rendering

            #### Usage
            ~~~js
            import React from 'react';
            import { Link, renderMJML } from 'hapi-maily-widgets';
            ~~~

            const component = <Link href="http://google.com">Go To Google</Link>;

            ~~~js
            renderMJML(<mj-text>component</mj-text>); // static HTML
            ~~~
        `,
        propTables: [Link]
    })(() => {
        const component = (
            <Link
                href={text('URL', 'http://google.com')}
                isNewTab={boolean('Open in New Tab', false)}
            >
                {text('Link Text', 'Go To Google')}
            </Link>
        );
        return renderMJML(<mj-text>{component}</mj-text>);
    }))
    .add('with mailto url', withInfo({
        text: `
            # Mail Link
            #### with mailto url

            Creates a link with default mail to preferrences.

            Must be used in <mj-text> tag for rendering

            #### Usage
            ~~~js
            import React from 'react';
            import { MailLink, renderMJML } from 'hapi-maily-widgets';
            ~~~

            const component = <MailLink email="noreply@gmail.com" subject="Hi!" />;

            ~~~js
            renderMJML(<mj-text>component</mj-text>); // static HTML
            ~~~
        `,
        propTables: [MailLink]
    })(() => {
        const component = (
            <MailLink
                email={text('Email Address', 'noreply@gmail.com')}
                subject={text('Email Subject', 'Hi!')}
            >
                {text('Custom Link Text', '')}
            </MailLink>
        );
        return renderMJML(<mj-text>{component}</mj-text>);
    }))
    .add('with tel url', withInfo({
        text: `
            # Phone Link
            #### with tel url

            Creates a link with default phone number preferrences.

            Must be used in <mj-text> tag for rendering

            #### Usage
            ~~~js
            import React from 'react';
            import { PhoneLink, renderMJML } from 'hapi-maily-widgets';
            ~~~

            const component = <PhoneLink number="888-555-5555" />;

            ~~~js
            renderMJML(<mj-text>component</mj-text>); // static HTML
            ~~~
        `,
        propTables: [PhoneLink]
    })(() => {
        const component = (
            <PhoneLink number={text('Phone Number', '8885555555')}>
                {text('Custom Link Text', '')}
            </PhoneLink>
        );
        return renderMJML(<mj-text>{component}</mj-text>);
    }));
