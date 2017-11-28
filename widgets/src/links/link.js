import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, isNewTab, children }) => {
    const attributes = {
        href,
        rel: 'noopener noreferrer'
    };

    if (isNewTab) attributes.target = '_blank';

    return <a {...attributes}>{children}</a>;
};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    isNewTab: PropTypes.bool
};

Link.defaultProps = {
    isNewTab: false
};

export default Link;
