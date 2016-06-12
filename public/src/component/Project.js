import React, { PropTypes } from 'react';
import Timeline from './Timeline';
// import classNames from 'classnames';
import styles from './Project.css';

const Project = ({ name, completed, description, date, lastChild }) => (
    <div className={styles.flex} >
        <Timeline completed={completed} lastChild={lastChild} />
        <div className={styles.flexColumn}>
            <b className={styles.title}>{ name } </b>
            <div className={styles.flex}>
                <div className={styles.data}>
                    <p className={styles.date}>{date}</p>
                </div>
                <div className={styles.description}>{ description }</div>
            </div>
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
