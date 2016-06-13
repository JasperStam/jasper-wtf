import { connect } from 'react-redux';
import { hideGallery, nextImage, previousImage } from 'actions/index';
import Gallery from 'component/Gallery';

const mapStateToProps = (state) => ({
    show: state.gallery.show,
    images: state.gallery.images,
});

const mapDispatchToProps = (dispatch) => ({
    closeGallery: () => {
        dispatch(hideGallery());
    },
    clickModal(e) {
        e.stopPropagation();
    },
    previousImage: () => {
        dispatch(previousImage());
    },
    nextImage: () => {
        dispatch(nextImage());
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
