import React, { PropTypes } from 'react';
import styles from './Preview.css';

const External = ({ url, urlDescription }) => (
    <div>
        <b className={styles.block}>Bekijk de code op GitHub:</b>
        <a href={`static/${url}`} target="_blank" className={styles.link}>{urlDescription}</a>
    </div>
);

External.propTypes = {
    url: PropTypes.string.isRequired,
    urlDescription: PropTypes.string.isRequired,
};

export default External;
