import React, { PropTypes } from 'react';

const Rubric = ({ name, tasks }) => (
    <div>
        <h2>{ name }</h2>
        <ul>
            {tasks.map(task =>
                    <li
                        key={ task }
                    >
                    {task}
                </li>
            )}
        </ul>
    </div>
);

Rubric.propTypes = {
    name: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
};

export default Rubric;
