import React, { PropTypes } from 'react';

const Rubric = ({ rubrics }) => (
    <div>
        {rubrics.map(rubric =>
            <div key={rubric}>
                <h2>{ rubric.name }</h2>
                <ul>
                    {rubric.tasks.map(task =>
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

Rubric.propTypes = {
    rubrics: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        tasks: PropTypes.array.isRequired,
    }).isRequired).isRequired,
};

export default Rubric;
