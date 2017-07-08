/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

const req = require.context('../src/templates', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);


// TODO: This is a temp fix for addon-info, a pending pull request will fix this soon
/* eslint-disable import/first */
import PropVal from '@storybook/addon-info/dist/components/PropVal';
import PropTypes from 'prop-types';
/* eslint-enable import/first */

PropVal.propTypes = {
    ...PropVal.propTypes,
    maxPropObjectKeys: PropTypes.number,
    maxPropArrayLength: PropTypes.number,
    maxPropStringLength: PropTypes.number
};
