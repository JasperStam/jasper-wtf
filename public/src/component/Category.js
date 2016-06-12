import React, { PropTypes } from 'react';
import RelevantProjects from 'container/RelevantProjects';
import styles from './Category.css';

const Category = ({ category }) => (
    <div className={styles.container}>
        <b className={styles.title}>{ category.name }</b>
        <RelevantProjects />
    </div>
);

Category.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        tasks: PropTypes.array.isRequired,
    }).isRequired,
};

export default Category;
