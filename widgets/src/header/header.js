import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    static imageShape = PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    })

    static contextTypes = {
        styles: PropTypes.shape({
            headerImage: Header.imageShape
        })
    }

    static propTypes = {
        img: Header.imageShape,
        title: PropTypes.string.isRequired
    }

    static defaultProps = {
        img: null
    }

    determineImage = () => {
        const { img } = this.props;
        const { headerImage } = this.context.styles;

        if (img) return img;
        else if (headerImage) return headerImage;

        return null;
    }

    renderImage = img => (
        <mj-column width="100%" padding="0">
            <mj-image padding="0" {...img} />
        </mj-column>
    )

    render = () => {
        const { title } = this.props;
        const img = this.determineImage();

        return (
            <mj-section full-width="full-width" padding="0">
                {img && this.renderImage(img)}
                <mj-column width="100%" background-color="#ECECEC">
                    <mj-text font-weight="bold" font-size="24" color="#2B2B2B" padding="20 30">
                        {title}
                    </mj-text>
                </mj-column>
            </mj-section>
        );
    }
}

export default Header;
