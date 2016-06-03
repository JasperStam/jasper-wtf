import { connect } from 'react-redux';
import ProjectOverview from 'component/ProjectOverview';
import _ from 'lodash';

const getRelevantProjects = (state) => (
    _.filter(state.projects.reverse(), project => (
        _.find(project.categories, c => c.name === state.activeCategory)
    ))
);

const getSortedProjects = (state) => (
    _.sortBy(state.projects, project => -project.id)
);

const mapStateToProps = (state) => ({
    projects: getSortedProjects(state),
});

const ProjectPosts = connect(
  mapStateToProps
)(ProjectOverview);

export default ProjectPosts;
