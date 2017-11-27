import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import Header from './header';

const headerSubject = text('Email Subject', 'Welcome to widget factory');

storiesOf('Header', module)
    .addDecorator(withKnobs)
    .add('with custom image and subject', withInfo({
        text: `
            # Header
            #### With custom image and text

            Creates a header with an optional image and subject message.
            The subject message to the user should match the one in this component or
            at least be similar to the subject message.

            #### Usage

            ~~~js
            import React from 'react';
            import { Header, renderMJML } from 'hapi-maily-widgets';

            const image = {
                src: 'http://www.fillmurray.com/800/218',
                alt: 'Fill Murray'
            };
            ~~~
            const component = <Header title="Welcome to widget factory" image={image} />;
            ~~~js
            renderMJML(component); // static HTML
            ~~~
        `,
        propTables: [Header]
    })(() => {
        const image = {
            src: 'http://www.fillmurray.com/800/218',
            alt: 'Fill Murray'
        };

        const component = (
            <Header
                title={headerSubject}
                img={image}
            />
        );

        return renderMJML(component);
    }))
    .add('with theme image source', withInfo({
        text: `
            # Header
            #### With theme image source

            Creates a header with a source image defined at the theme level.
            This should be used if your company or site has a universal image
            used for headers for all transactional emails.

            The subject message to the user should match the one in this component or
            at least be similar to the subject message.

            #### Usage

            ~~~js
            import React from 'react';
            import { Header, renderMJML } from 'hapi-maily-widgets';

            const theme = {
                headerImage: {
                    src: 'http://www.fillmurray.com/800/218',
                    alt: 'Fill Murray'
                }
            };
            ~~~
            const component = <Header title="Welcome to widget factory" image={image} />;
            ~~~js
            renderMJML(component, theme); // static HTML
            ~~~
        `,
        propTables: [Header]
    })(() => {
        const styles = {
            headerImage: {
                src: 'http://www.fillmurray.com/800/218',
                alt: 'Fill Murray'
            }
        };

        const compoment = (
            <Header title={headerSubject} />
        );

        return renderMJML(compoment, styles);
    }))
    .add('with no image', withInfo({
        text: `
            # Header
            #### With no image

            Creates a header with no image and just a bar with the subject.

            The subject message to the user should match the one in this component or
            at least be similar to the subject message.

            #### Usage
            ~~~js
            import React from 'react';
            import { Header, renderMJML } from 'hapi-maily-widgets';
            ~~~
            const component = <Header title="Welcome to widget factory" />;
            ~~~js
            renderMJML(component); // static HTML
            ~~~
        `,
        propTables: [Header]
    })(() => {
        const component = (
            <Header title={headerSubject} />
        );

        return renderMJML(component);
    }));
