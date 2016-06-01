import React, { PropTypes } from 'react';

const Category = ({ categories }) => (
    <div>
        {categories.map(category =>
            <div key={category}>
                <h2>{ category.name }</h2>
                <ul>
                    {category.tasks.map(task =>
                            <li
                                key={ task }
                            >
                            {task}
                        </li>
                    )}
                </ul>
            </div>
        )}
    </div>
);

Category.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        tasks: PropTypes.array.isRequired,
    }).isRequired).isRequired,
};

export default Category;
