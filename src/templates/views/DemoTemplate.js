import React from 'react';
import PropTypes from 'prop-types';

import { Footer, Button, FieldValue, Header } from '../widgets/index';

const DemoTemplate = ({
    testString
}) => (
    <mj-wrapper full-width="full-width" text-align="left">
        <Header title="Hey I'm a demo" />
        <FieldValue title="I can do this" value={testString} />
        <mj-section full-width="full-width" padding="25 0 35">
            <mj-column>
                <Button text="Yes You Can" buttonType="primary" url="#" align="center" />
            </mj-column>
        </mj-section>
        <Footer />
    </mj-wrapper>
);

DemoTemplate.propTypes = {
    testString: PropTypes.string.isRequired
};

export default DemoTemplate;
