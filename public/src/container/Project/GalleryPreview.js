import React, { PropTypes } from 'react';
import GalleryPreview from 'component/Project/GalleryPreview';

export default React.createClass({
    propTypes: {
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    },
    getPreviewUrl() {
        return this.props.images[0];
    },
    render() {
        return (
            <GalleryPreview previewUrl={this.getPreviewUrl()} { ... this.props } />
        );
    },
});
