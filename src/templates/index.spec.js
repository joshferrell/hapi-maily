/* eslint-disable import/no-extraneous-dependencies, import/first */

import initStoryshots from '@storybook/addon-storyshots';

/* eslint-enable import/no-extraneous-dependencies, import/first */

jest.mock('react-dom', () => ({
    findDOMNode: () => ({})
}));

initStoryshots();
