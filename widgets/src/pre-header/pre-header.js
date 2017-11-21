import React from 'react';
import PropTypes from 'prop-types';

const PreHeader = ({ value }) => (
    <mj-section css-class="display-none">
        <mj-column>
            <mj-text>
                <span>{value}</span>
            </mj-text>
        </mj-column>
    </mj-section>
);

PreHeader.propTypes = {
    value: PropTypes.string.isRequired
};

export default PreHeader;
