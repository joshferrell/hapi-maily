import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import Header from './header';

storiesOf('Widget/Header', module)
    .addDecorator(withKnobs)
    .add('with custom image and subject', () => {
        const image = {
            src: 'http://www.fillmurray.com/800/218',
            alt: 'Fill Murray'
        };

        const component = (
            <Header
                title={text('Email Subject', 'Welcome to widget factory')}
                img={image}
            />
        );

        return renderMJML(component);
    });
