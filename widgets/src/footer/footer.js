import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { PreFooter, PostFooter } from '.';

class Footer extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.element
    };

    static defaultProps = {
        children: null
    };

    static sectionObject = {
        'full-width': 'full-width',
        'background-color': '#ECECEC',
        'padding-bottom': '0'
    };

    static contextTypes = {
        styles: PropTypes.shape({
            colors: PropTypes.object,
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
    };

    renderAddress = address => (
        <mj-section {...Footer.sectionObject}>
            <mj-column>
                <mj-text padding-bottom="25">
                    <address>
                        <strong>{ address.name }</strong><br />
                        { address.addressLine1 }<br />
                        { address.city }, { address.state } { address.zip}<br />
                        { address.country }
                    </address>
                </mj-text>
            </mj-column>
        </mj-section>
    );

    renderContact = contact => (
        <mj-section {...Footer.sectionObject}>
            {
                contact.map(({ name, value, href }) => (
                    <mj-column>
                        <mj-text>
                            { name && <h4 style={{ margin: 0 }}>{name}</h4>}
                            {href ? (
                                <a href={href} rel="external noreferrer">{value}</a>
                            ) : (
                                <p>{value}</p>
                            )}
                        </mj-text>
                    </mj-column>
                ))
            }
        </mj-section>
    );

    renderFooterType = (children, type) => Children
        .map(children, child => child.type === type && child);

    render = () => {
        const { colors, address, contact } = this.context.styles;
        const { title, children } = this.props;

        const preFooter = this.renderFooterType(children, PreFooter);
        const postFooter = this.renderFooterType(children, PostFooter);

        return (
            <mj-section full-width="full-width" padding-top="0">
                { preFooter && preFooter }
                { address && this.renderAddress(address) }
                { contact && this.renderContact(contact) }
                { postFooter && postFooter }
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
