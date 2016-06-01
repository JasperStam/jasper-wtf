import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Timeline.css';

const Timeline = ({ lastChild, completed }) => (
    <div className={
        classNames(
            styles.timeline,
            { [styles.lastChild]: lastChild }
        )}
    >
        <div className={
            classNames(
                styles.timeBullet,
                { [styles.completed]: completed }
            )}
        />
    </div>
);

Timeline.propTypes = {
    completed: PropTypes.bool.isRequired,
    lastChild: PropTypes.bool.isRequired,
};

export default Timeline;
