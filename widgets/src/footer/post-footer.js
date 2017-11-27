import React from 'react';
import PropTypes from 'prop-types';

const PostFooter = ({ children }) => (
    <mj-section full-width="full-width" background-color="#ECECEC" padding-bottom="0">
        {children}
    </mj-section>
);

PostFooter.propTypes = {
    children: PropTypes.element.isRequired
};

export default PostFooter;
