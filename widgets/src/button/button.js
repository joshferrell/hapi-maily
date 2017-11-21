import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    static contextTypes = {
        styles: PropTypes.shape({
            colors: PropTypes.object.isRequired
        }).isRequired
    };

    static propTypes = {
        children: PropTypes.node.isRequired,
        url: PropTypes.string.isRequired,
        buttonType: PropTypes.string,
        squared: PropTypes.bool
    };

    static defaultProps = {
        buttonType: 'primary',
        squared: false
    };

    render = () => {
        const { colors } = this.context.styles;
        const {
            children,
            url,
            buttonType,
            squared
        } = this.props;

        const buttonProps = {
            'background-color': colors[buttonType],
            color: '#FFFFFF',
            'border-radius': squared ? '0' : '25',
            'font-size': '18',
            'font-weight': 'bold',
            'text-transform': 'uppercase',
            'inner-padding': '15 30',
            href: url,
            rel: 'noreferrer'
        };

        return (
            <mj-button {...buttonProps}>{children}</mj-button>
        );
    }
}

export default Button;
