import React, { PropTypes } from 'react';
import styles from 'component/Gallery.css';

const Gallery = ({ images }) => (
    <div className={styles.modalBackground}>
        <div className={styles.modal}>
            {images.map((image, i) =>
                <img key={i} src={`static/${image}`} className={styles.image} />
           )}
        </div>
    </div>
);

Gallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
