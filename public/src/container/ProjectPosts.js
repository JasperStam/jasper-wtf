import { connect } from 'react-redux';
import ProjectOverview from 'component/ProjectOverview';
import _ from 'lodash';

const getRelevantProjects = (state) => (
    _.filter(state.projects, project => (
        _.find(project.categories, c => c.name === state.activeCategory)
    ))
);

const mapStateToProps = (state) => ({
    projects: getRelevantProjects(state),
});

// const mapDispatchToProps = (dispatch) => ({
//     onTodoClick: (name) => {
//         dispatch(showRubric(name));
//     },
// });

const ProjectPosts = connect(
  mapStateToProps
)(ProjectOverview);

export default ProjectPosts;
