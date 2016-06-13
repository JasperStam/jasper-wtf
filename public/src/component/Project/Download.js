import React, { PropTypes } from 'react';
import styles from './Preview.css';

const Download = ({ url }) => (
    <div>
        <b className={styles.block}>Download:</b>
        <a href={`static/${url}`} target="_blank" className={styles.link}>{url}</a>
    </div>
);

Download.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Download;
