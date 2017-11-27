import React from 'react';
import PropTypes from 'prop-types';

const PreFooter = ({ children }) => (
    <mj-section full-width="full-width" background-color="#ECECEC" padding-bottom="0">
        {children}
    </mj-section>
);

PreFooter.propTypes = {
    children: PropTypes.element.isRequired
};

export default PreFooter;
