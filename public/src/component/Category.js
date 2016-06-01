import React, { PropTypes } from 'react';
import RelevantProjects from 'container/RelevantProjects';
import styles from './Category.css';

const Category = ({ category }) => (
    <div className={styles['active-category-container']}>
        <p>{ category.name }</p>
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
