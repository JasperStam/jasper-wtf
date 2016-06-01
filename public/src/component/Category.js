import React, { PropTypes } from 'react';
import LineChart from './LineChart';
import styles from './Category.css';

const Category = ({ category }) => (
    <div className={styles['active-category-container']}>
        <p>{ category.name }</p>
        <LineChart />
    </div>
);

Category.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        tasks: PropTypes.array.isRequired,
    }).isRequired,
};

export default Category;
