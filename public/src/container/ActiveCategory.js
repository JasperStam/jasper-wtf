import { connect } from 'react-redux';
import Category from 'component/Category';

const getActiveCategory = (activeCategory) => {
    switch (activeCategory) {
        case 'HIDE_CATEGORY':
            return {
                name: '',
                tasks: [],
            };
        default:
            return {
                name: activeCategory,
                tasks: [],
            };
    }
};

const mapStateToProps = (state) => ({
    category: getActiveCategory(state.activeCategory),
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
