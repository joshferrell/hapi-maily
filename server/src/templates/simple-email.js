import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Header, PreHeader, FieldValue, Button } from 'hapi-maily-widgets';

const SimpleEmail = ({ firstName, lastName }) => (
    <mj-wrapper full-width="full-width" text-align="left">
        <PreHeader value="Example Email" />
        <Header
            title="Hey I'm a demo"
            img={{
                src: 'http://www.fillmurray.com/800/218',
                alt: 'Fill Murray'
            }}
        />
        <FieldValue title="First Name" value={firstName} />
        <FieldValue title="Last Name" value={lastName} />
        <mj-section full-width="full-width" padding="25 0 35">
            <mj-column>
                <Button
                    buttonType="primary"
                    url="http://www.google.com"
                    align="center"
                >
                    Go To Google
                </Button>
            </mj-column>
        </mj-section>
        <Footer title="Hapi Maily" />
    </mj-wrapper>
);

SimpleEmail.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
};

export default SimpleEmail;
