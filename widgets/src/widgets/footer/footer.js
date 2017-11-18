import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ children, title }) => {
    const { colors } = this.context.styles;

    return (
        <mj-section
            full-width="full-width"
            padding="15"
            background-color={colors.primary}
        >
            <mj-column>
                {children && children}
                <mj-text color="#FFFFFF" font-size="16">
                    <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        Copyright &copy;{new Date().getFullYear()} {title} All Rights Reserved.
                    </p>
                </mj-text>
            </mj-column>
        </mj-section>
    );
};

Footer.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

Footer.defaultProps = {
    children: null
};

Footer.contextTypes = {
    styles: PropTypes.shape({
        colors: PropTypes.object
    })
};

export default Footer;
