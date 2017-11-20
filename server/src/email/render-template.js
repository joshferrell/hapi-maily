import { renderToStaticMarkup } from 'react-dom/server';
import { minify } from 'html-minifier';
import { renderMJML } from 'hapi-maily-widgets';
import { pipe } from 'ramda';

const renderTemplate = pipe(
    renderMJML,
    renderToStaticMarkup,
    minify
);

export default renderTemplate;
