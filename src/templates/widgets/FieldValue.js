import React from 'react';
import PropTypes from 'prop-types';

const FieldValue = ({ title, value, size }) => (
    <mj-section full-width="full-width" padding={size === 'large' ? '20 25' : '10 25'}>
        <mj-column vertical-align="top">
            <mj-text padding="0">
                <h2 style={{
                    fontSize: size === 'large' ? '25px' : '20px',
                    margin: '0px',
                    paddingTop: '10px'
                }}
                >
                    {title}
                </h2>
            </mj-text>
        </mj-column>
        <mj-column vertical-align="top" padding="0">
            <mj-text padding="0" font-size={size === 'large' ? '25' : '20'}>
                <p style={{ margin: '0px', paddingTop: '10px' }}>{value}</p>
            </mj-text>
        </mj-column>
    </mj-section>
);

FieldValue.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['regular', 'large'])
};

FieldValue.defaultProps = {
    size: 'regular'
};

export default FieldValue;
