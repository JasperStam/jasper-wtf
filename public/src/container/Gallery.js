import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from 'component/Gallery.css';

const Gallery = ({ images }) => (
    <div className={styles.modalBackground}>
        <div className={styles.modal}>
            <div className={classNames(styles.arrowContainer, styles.left)}>
                <p className={styles.arrow}> &#8647; </p>
            </div>
            <div className={classNames(styles.arrowContainer, styles.right)}>
                <p className={styles.arrow}> &#8649; </p>
            </div>
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
