// import React from 'react';
// import Rubric from 'component/Rubric';

// export default React.createClass({
//     getInitialState() {
//         return {
//             name: 'ActiveRubric',
//             tasks: [
//                 'Task A',
//                 'Task B',
//                 'Task C',
//             ],
//         };
//     },
//     render() {
//         return (
//             <Rubric name={this.state.name} tasks={this.state.tasks} />
//         );
//     },
// });


import { connect } from 'react-redux';
// import { showRubric } from '../actions/index';
import Rubric from 'component/Rubric';

const getActiveRubric = (activeRubric) => {
    switch (activeRubric) {
        case 'HIDE_RUBRIC':
            return [];
        default:
            return [{
                name: activeRubric,
                tasks: [],
            }];
    }
};

const mapStateToProps = (state) => ({
    rubrics: getActiveRubric(state.activeRubric),
});

// const mapDispatchToProps = (dispatch) => ({
//     onTodoClick: (name) => {
//         dispatch(showRubric(name));
//     },
// });

const ActiveRubric = connect(
  mapStateToProps
)(Rubric);

export default ActiveRubric;
