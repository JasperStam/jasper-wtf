import React, { PropTypes } from 'react';
import styles from './Preview.css';

const GalleryPreview = ({ previewUrl }) => (
    <img src={`static/${previewUrl}`} className={styles.imagePreview} />
);

GalleryPreview.propTypes = {
    previewUrl: PropTypes.string.isRequired,
};

export default GalleryPreview;
