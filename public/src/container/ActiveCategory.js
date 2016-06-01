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
import Category from 'component/Category';

const getActiveCategory = (activeCategory) => {
    switch (activeCategory) {
        case 'HIDE_CATEGORY':
            return [];
        default:
            return [{
                name: activeCategory,
                tasks: [],
            }];
    }
};

const mapStateToProps = (state) => ({
    categories: getActiveCategory(state.activeCategory),
});

// const mapDispatchToProps = (dispatch) => ({
//     onTodoClick: (name) => {
//         dispatch(showRubric(name));
//     },
// });

const ActiveCategory = connect(
  mapStateToProps
)(Category);

export default ActiveCategory;
