import { connect } from 'react-redux';
import { hideGallery } from 'actions/index';
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
