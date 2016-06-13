import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './Image.css';
import classNames from 'classnames';

const AwareImage = React.createClass({
    propTypes: {
        src: PropTypes.string.isRequired,
        activeIndex: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
        totalLength: PropTypes.number.isRequired,
    },
    shouldRender() {
        return (this.props.activeIndex % this.props.totalLength) === this.props.index;
    },
    render() {
        return (
            <div>
                <img src={this.props.src} className={classNames(
                    styles.image,
                    { [styles.show]: this.shouldRender() })}
                />
            </div>
        );
    },
});

const mapStateToProps = (state) => ({
    activeIndex: state.gallery.index,
});

export default connect(
  mapStateToProps
)(AwareImage);
