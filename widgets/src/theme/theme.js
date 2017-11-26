import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from '../utility';

class Theme extends Component {
    static styleShape = PropTypes.shape({
        colors: PropTypes.object,
        headerImage: PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        }),
        address: PropTypes.shape({
            name: PropTypes.string.isRequired,
            addressLine1: PropTypes.string.isRequired,
            addressLine2: PropTypes.string,
            city: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
            zip: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired
        }),
        contact: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string.isRequired,
            href: PropTypes.string,
            type: PropTypes.oneOf([
                'phone',
                'email',
                'website',
                'fax'
            ]).isRequired
        }))
    })

    static propTypes = {
        children: PropTypes.node.isRequired,
        styles: Theme.styleShape
    };

    static childContextTypes = {
        styles: Theme.styleShape
    };

    static defaultProps = {
        styles
    };

    getChildContext = () => ({ styles: this.props.styles })

    render = () => (
        <mj-container>
            {this.props.children}
        </mj-container>
    )
}

export default Theme;
