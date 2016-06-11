import React, { PropTypes } from 'react';
import Timeline from './Timeline';
// import classNames from 'classnames';
import styles from './Project.css';

const Project = ({ name, completed, description, lastChild }) => (
    <div className={styles.project} >
        <Timeline completed={completed} lastChild={lastChild} />
        <div>
            <p>{ name } </p>
            <div className={styles.description}>{ description }</div>
        </div>
    </div>
);

Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    lastChild: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired,
};

export default Project;
