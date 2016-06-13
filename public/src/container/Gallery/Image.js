import React, { PropTypes } from 'react';
import styles from './Image.css';

export default React.createClass({
    propTypes: {
        src: PropTypes.string.isRequired,
    },
    render() {
        return (
            <div>
                <img src={this.props.src} className={styles.image} />
            </div>
        );
    },
});
