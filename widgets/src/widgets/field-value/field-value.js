import React from 'react';
import PropTypes from 'prop-types';

const FieldValue = ({ title, value, size }) => {
    const fontSize = size === 'large' ? '25px' : '20px';
    const fieldStyle = {
        fontSize,
        margin: '0px',
        paddingTop: '10px'
    };

    return (
        <mj-section
            full-width="full-width"
            padding={size === 'large' ? '20 25' : '10 25'}
        >
            <mj-column vertical-align="top">
                <mj-text padding="0">
                    <h3 style={fieldStyle}>{title}</h3>
                </mj-text>
            </mj-column>
            <mj-column>
                <mj-text padding="0">
                    <p style={fieldStyle}>{value}</p>
                </mj-text>
            </mj-column>
        </mj-section>
    );
};

FieldValue.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['regular', 'large'])
};

FieldValue.defaultProps = {
    size: 'regular'
};

export default FieldValue;
