import React, { PropTypes } from 'react';
import styles from './Preview.css';

const GalleryPreview = ({ previewUrl, showGallery }) => (
    <div className={styles.imageContainer}>
        <img src={`static/${previewUrl}`} className={styles.image} onClick={showGallery} />
    </div>
);

GalleryPreview.propTypes = {
    previewUrl: PropTypes.string.isRequired,
    showGallery: PropTypes.func.isRequired,
};

export default GalleryPreview;
