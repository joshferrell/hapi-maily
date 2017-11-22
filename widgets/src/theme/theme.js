import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from '../utility';

class Theme extends Component {
    static styleShape = PropTypes.shape({
        colors: PropTypes.object,
        headerImage: PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        })
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
