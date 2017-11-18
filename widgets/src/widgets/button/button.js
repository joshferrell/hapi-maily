import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../../utility';

const Button = ({
    children,
    url,
    buttonType,
    squared
}) => {
    const { colors } = this.context.styles;
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

    return <mj-button {...buttonProps}>{children}</mj-button>;
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    url: PropTypes.string.isRequired,
    buttonType: PropTypes.oneOf(Object.keys(styles.colors)),
    squared: PropTypes.bool
};

Button.defaultProps = {
    buttonType: 'primary',
    squared: false
};

Button.contextTypes = {
    styles: PropTypes.shape({
        colors: PropTypes.object
    }).isRequired
};

export default Button;
