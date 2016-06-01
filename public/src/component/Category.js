import React, { PropTypes } from 'react';

const Category = ({ categories }) => (
    <div>
        {categories.map(category =>
            <div key={category}>
                <p>{ category.name }</p>
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
