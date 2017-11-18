import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from '../../utility';

class Theme extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        styles: PropTypes.shape({
            colors: PropTypes.object
        })
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
