import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import Header from './header';

const headerSubject = text('Email Subject', 'Welcome to widget factory');

storiesOf('Header', module)
    .addDecorator(withKnobs)
    .add('with custom image and subject', () => {
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
    })
    .add('with theme image source', () => {
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
    })
    .add('with no image', () => {
        const component = (
            <Header title={headerSubject} />
        );

        return renderMJML(component);
    });
