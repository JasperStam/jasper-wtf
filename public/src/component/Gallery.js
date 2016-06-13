import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Image from 'container/Gallery/Image';
import styles from './Gallery.css';

const Gallery = ({
    show,
    images,
    closeGallery,
    clickModal,
    nextImage,
    previousImage,
}) => (
    <div className={classNames(
            styles.modalBackground,
            { [styles.show]: show })
        }
        onClick={closeGallery}
    >
        <div className={styles.modal} onClick={clickModal}>
            <p className={styles.close} onClick={closeGallery}>X</p>
            <div className={classNames(styles.arrowContainer, styles.left)} onClick={previousImage}>
                <p className={styles.arrow}> &#8647; </p>
            </div>
            <div className={classNames(styles.arrowContainer, styles.right)} onClick={nextImage}>
                <p className={styles.arrow}> &#8649; </p>
            </div>
            {images.map((image, i) =>
                <Image key={i} index={i} totalLength={images.length} src={`static/${image}`} />
           )}
        </div>
    </div>
);

Gallery.propTypes = {
    show: PropTypes.bool.isRequired,
    closeGallery: PropTypes.func.isRequired,
    clickModal: PropTypes.func.isRequired,
    nextImage: PropTypes.func.isRequired,
    previousImage: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
