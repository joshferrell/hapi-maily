import React from 'react';
import renderTemplate from './render-template';

describe('render email template', () => {
    it('should render an email template from react to mjml', () => {
        const component = (
            <mj-text>
                <p>this is a simple test</p>
            </mj-text>
        );

        const html = renderTemplate(component);
        expect(html).toMatchSnapshot();
    });
});
