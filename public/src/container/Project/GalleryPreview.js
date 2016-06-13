import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { showGallery } from 'actions/index';
import GalleryPreview from 'component/Project/GalleryPreview';

const Preview = React.createClass({
    propTypes: {
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        dispatchGallery: PropTypes.func.isRequired,
    },
    getPreviewUrl() {
        return this.props.images[0];
    },
    showGallery() {
        this.props.dispatchGallery(this.props.images);
    },
    render() {
        return (
            <GalleryPreview previewUrl={this.getPreviewUrl()} showGallery={this.showGallery}{ ... this.props } />
        );
    },
});

const mapStateToProps = () => ({ });

const mapDispatchToProps = (dispatch) => ({
    dispatchGallery: (images) => {
        dispatch(showGallery(images));
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
