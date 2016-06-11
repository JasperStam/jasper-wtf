import { connect } from 'react-redux';
import ProjectOverview from 'component/ProjectOverview';
import _ from 'lodash';

const getRelevantProjects = (state) => {
    const relevantProjects = _.filter(state.projects.reverse(), project => (
        _.find(project.categories, c => c.name === state.activeCategory)
    ));

    return _.sortBy(relevantProjects, project => project.id);
};

const mapStateToProps = (state) => ({
    projects: getRelevantProjects(state),
});

const ProjectPosts = connect(
  mapStateToProps
)(ProjectOverview);

export default ProjectPosts;
