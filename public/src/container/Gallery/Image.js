import React, { PropTypes } from 'react';
import styles from './Image.css';

const Image = ({ src }) => (
    <div>
        <img src={src} className={styles.image} />
    </div>
);

Image.propTypes = {
    src: PropTypes.string.isRequired,
};

export default Image;
