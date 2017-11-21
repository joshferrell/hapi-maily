import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, img }) => (
    <mj-section full-width="full-width" padding="0">
        <mj-column width="100%" padding="0">
            <mj-image padding="0" {...img} />
        </mj-column>
        <mj-column width="100%" background-color="#ECECEC">
            <mj-text font-weight="bold" font-size="24" color="#2B2B2B" padding="20 30">
                {title}
            </mj-text>
        </mj-column>
    </mj-section>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }).isRequired
};

export default Header;
