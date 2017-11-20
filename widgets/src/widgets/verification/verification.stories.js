import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable import/no-extraneous-dependencies */

import { renderMJML } from '../../utility';
import Verification from './verification';

storiesOf('Widget/Verification', module)
    .addDecorator(withKnobs)
    .add('with title and value', () => {
        const component = (
            <Verification
                title={text('Verification Title', 'Verification Code')}
                text={text('Verification Body', 'ABCD1234')}
            />
        );
        return renderMJML(component);
    });
