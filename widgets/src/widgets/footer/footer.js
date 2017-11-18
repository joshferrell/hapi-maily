import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../../utility';

const Footer = ({ children, title }) => (
    <mj-section
        full-width="full-width"
        padding="15"
        background-color={styles.colors.primary}
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

Footer.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

Footer.defaultProps = {
    children: null
};

export default Footer;
