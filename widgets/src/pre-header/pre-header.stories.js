import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../utility';
import PreHeader from './pre-header';

storiesOf('Widget/Pre-Header', module)
    .addDecorator(withKnobs)
    .add('with email pre-header text', () => {
        const component = (
            <PreHeader value={text('email pre-text', 'Simple Text')} />
        );
        return renderMJML(component);
    });
