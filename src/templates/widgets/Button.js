import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

const Button = ({ text, url, buttonType, squared, ...attributes }) => (
    <mj-button
      background-color={styles.colors[buttonType]}
      color="#FFFFFF"
      border-radius={squared ? '0' : '25'}
      font-size="18"
      font-weight="bold"
      text-transform="uppercase"
      inner-padding="15 30"
      href={url}
      rel="noreferrer"
      {...attributes}
    >
        {text}
    </mj-button>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    buttonType: PropTypes.oneOf(Object.keys(styles.colors)),
    squared: PropTypes.bool
};

Button.defaultProps = {
    buttonType: 'primary',
    squared: false
};

export default Button;
