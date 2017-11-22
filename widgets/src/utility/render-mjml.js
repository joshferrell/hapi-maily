import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { mjml2html } from 'mjml';
import Theme from '../theme';
import styles from './styles';

export const handleTheme = (theme) => {
    const { colors, headerImage } = theme;
    let newTheme = theme;

    // If theme does not include colors, use defaults
    if (!colors) {
        newTheme = Object.assign({}, newTheme, {
            colors: styles.colors
        });
    }

    // header image must include a source and an alt string
    if (headerImage && (!headerImage.src || !headerImage.alt)) {
        throw new Error('invalid structure of theme, header image requires a image src and an alt string');
    }

    // theme colors must include a primary color
    if (!newTheme.colors.primary) {
        throw new Error('invalid structure of theme, colors requires a primary color to be included');
    }

    return newTheme;
};

export const renderComponent = (component, theme) => {
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
    <div dangerouslySetInnerHTML={renderComponent(component, handleTheme(theme))} />
);

export default renderMJML;
