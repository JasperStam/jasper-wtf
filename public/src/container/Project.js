import { TYPE_GALLERY, TYPE_EXTERNAL, TYPE_DOWNLOAD, TYPE_VOID } from '../constants';
import React, { PropTypes } from 'react';
import moment from 'moment';
import Project from 'component/Project';
import Download from 'component/Project/Download';
import External from 'component/Project/External';
import GalleryPreview from './Project/GalleryPreview';
import Void from 'component/Project/Void';

export default React.createClass({
    propTypes: {
        type: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    },
    getSubview() {
        switch (this.props.type) {
            case TYPE_DOWNLOAD:
                return (<Download { ...this.props } />);
            case TYPE_EXTERNAL:
                return (<External { ...this.props } />);
            case TYPE_GALLERY:
                return (<GalleryPreview { ...this.props } />);
            case TYPE_VOID:
            default:
                return (<Void { ...this.props } />);

        }
    },
    formatDate() {
        return moment(this.props.date).format('DD-MM-YYYY');
    },
    render() {
        return (
            <Project subView={this.getSubview()} readableDate={this.formatDate()} { ... this.props } />
        );
    },
});
