import { configure, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';

const req = require.context('../src', true, /\.stories\.js$/);

setDefaults({
    header: false,
  inline: true,
  source: false
});

setAddon(infoAddon);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
