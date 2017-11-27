import React from 'react';
import PropTypes from 'prop-types';

const Callout = ({ title, text }) => (
    <mj-section full-width="full-width" padding-top="0" padding-bottom="0">
        <mj-column>
            <mj-text font-size="15" padding-bottom="0">
                <h2 style={{ fontWeight: 'normal' }}>{title}</h2>
            </mj-text>
            <mj-text font-size="50" font-weight="bold" padding-top="0">
                <p>{text}</p>
            </mj-text>
        </mj-column>
    </mj-section>
);

Callout.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Callout;
