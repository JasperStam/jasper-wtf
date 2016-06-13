import React, { PropTypes } from 'react';
import styles from './Preview.css';

const GalleryPreview = ({ previewUrl }) => (
    <div className={styles.imageContainer}>
        <img src={`static/${previewUrl}`} className={styles.image} />
    </div>
);

GalleryPreview.propTypes = {
    previewUrl: PropTypes.string.isRequired,
};

export default GalleryPreview;
