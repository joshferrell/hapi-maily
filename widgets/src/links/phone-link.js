import React from 'react';
import PropTypes from 'prop-types';

const PhoneLink = ({ number, children }) => {
    const prettyNumber = `${number.slice(0, 3)}.${number.slice(3, 6)}.${number.slice(6)}`;

    return (
        <a href={`tel:${number}`}>
            { children || prettyNumber }
        </a>
    );
};

PhoneLink.propTypes = {
    number: PropTypes.string.isRequired,
    children: PropTypes.node
};

PhoneLink.defaultProps = {
    children: null
};

export default PhoneLink;
