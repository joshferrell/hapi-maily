import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.node
    };

    static defaultProps = {
        children: null
    };

    static contextTypes = {
        styles: PropTypes.shape({
            colors: PropTypes.object
        })
    };

    render = () => {
        const { colors } = this.context.styles;
        const { title, children } = this.props;

        const PreFooter = children && (
            <mj-section full-width="full-width" background-color="#ECECEC">
                <mj-column width="100%">{children}</mj-column>
            </mj-section>
        );

        return (
            <mj-section full-width="full-width" padding-top="0">
                {children && PreFooter}
                <mj-section full-width="full-width" padding="15" background-color={colors.primary}>
                    <mj-text color="#FFFFFF" font-size="16">
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            Copyright &copy;{new Date().getFullYear()} {title} All Rights Reserved.
                        </p>
                    </mj-text>
                </mj-section>
            </mj-section>
        );
    }
}

export default Footer;
