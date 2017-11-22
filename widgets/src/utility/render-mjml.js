import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { mjml2html } from 'mjml';
import Theme from '../theme';
import styles from './styles';

export const renderComponent = (component, theme) => {
    if (!theme.colors && !theme.colors.primary) {
        throw new Error('invalid structure of theme, theme requires colors and colors.primary');
    }

    const children = (
        <Theme styles={theme}>
            {component}
        </Theme>
    );

    return ({
        __html: mjml2html(`
            <mjml>
                <mj-head>
                 <mj-style>
                     .display-none {
                         display: none !important;
                     }
                 </mj-style>
                 <mj-attributes>
                   <mj-all font-family="Helvetica, Arial, sans-serif" />
                 </mj-attributes>
               </mj-head>
                <mj-body>
                    <mj-container>
                        ${renderToStaticMarkup(children)}
                    </mj-container>
                </mj-body>
            </mjml>
        `).html
    });
};

// mjml requires that we set the inner html dangerously
// this should be fine so long as you're not doing
// anything strange with creating these templates, just be aware.

/* eslint-disable react/no-danger */
const renderMJML = (component, theme = styles) => (
    <div dangerouslySetInnerHTML={renderComponent(component, theme)} />
);

export default renderMJML;
