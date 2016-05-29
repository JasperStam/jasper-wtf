import React, { PropTypes } from 'react';

const ulStyle = {
    display: 'flex',
    flexWrap: 'wrap',
};

const liStyle = {
    width: '30%',
};

const RubricList = ({ rubrics }) => (
    <ul style={ ulStyle }>
        {rubrics.labels.map(rubric =>
            <li
                style={ liStyle }
                key={ rubric }
            >
            {rubric}
        </li>
    )}
  </ul>
);

RubricList.propTypes = {
    rubrics: PropTypes.object.isRequired,
};

export default RubricList;
