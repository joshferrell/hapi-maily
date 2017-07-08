import React from 'react';
import styles from '../styles';

const Footer = () => (
    <mj-section full-width="full-width" padding="15" background-color={styles.colors.primary}>
        <mj-column>
            <mj-text color="#FFFFFF" font-size="16">
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{ `Copyright @${new Date().getFullYear()} Widget Factory. All Rights Reserved.` }</p>
            </mj-text>
        </mj-column>
    </mj-section>
);

export default Footer;
