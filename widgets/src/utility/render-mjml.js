import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { mjml2html } from 'mjml';

export const renderComponent = component => ({
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
                    ${renderToStaticMarkup(component)}
                </mj-container>
            </mj-body>
        </mjml>
    `).html
});

// mjml requires that we set the inner html dangerously
// this should be fine so long as you're not doing
// anything strange with creating these templates, just be aware.

/* eslint-disable react/no-danger */
const renderMJML = component => (
    <div dangerouslySetInnerHTML={renderComponent(component)} />
);

export default renderMJML;
