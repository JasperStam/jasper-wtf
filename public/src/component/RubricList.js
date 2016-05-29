import React, { PropTypes } from 'react';

const ulStyle = {
    display: 'flex',
    flexWrap: 'wrap',
};

const liStyle = {
    width: '30%',
};

const RubricList = ({ rubrics, onRubricClick }) => (
    <ul style={ ulStyle }>
        {rubrics.labels.map(rubric =>
            <li
                style={ liStyle }
                key={ rubric }
                onClick={() => onRubricClick(rubric)}
            >
            {rubric}
        </li>
    )}
  </ul>
);

RubricList.propTypes = {
    rubrics: PropTypes.object.isRequired,
    onRubricClick: PropTypes.func.isRequired,
};

export default RubricList;
