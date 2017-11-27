import React from 'react';
import PropTypes from 'prop-types';

const PostFooter = ({ children }) => (
    <mj-section full-width="full-width" background-color="#ECECEC">
        {children}
    </mj-section>
);

PostFooter.propTypes = {
    children: PropTypes.element.isRequired
};

export default PostFooter;
