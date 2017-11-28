import React from 'react';
import PropTypes from 'prop-types';

const MailLink = ({ children, email, subject }) => {
    const emailSubject = `?subject=${encodeURI(subject)}`;
    const url = `mailto:${email}${subject && emailSubject}`;

    return (
        <a href={url} rel="noopener noreferrer">
            {children || email}
        </a>
    );
};

MailLink.propTypes = {
    children: PropTypes.node,
    subject: PropTypes.string,
    email: PropTypes.string.isRequired
};

MailLink.defaultProps = {
    children: null,
    subject: null
};

export default MailLink;
