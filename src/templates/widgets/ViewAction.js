import React from 'react';
import PropTypes from 'prop-types';

const ViewAction = ({
    url, name, description
}) => (
    <mj-section css-class="display-none">
        <mj-column>
            <mj-text>
                <div itemScope itemType="http://schema.org/EmailMessage">
                    <div itemProp="potentialAction" itemScope itemType="http://schema.org/ViewAction">
                        <link itemProp="target" href={url} />
                        <link itemProp="url" href={url} />
                        <meta itemProp="name" content={name} />
                    </div>
                    <meta itemProp="description" content={description} />
                </div>
            </mj-text>
        </mj-column>
    </mj-section>
);

ViewAction.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ViewAction;
