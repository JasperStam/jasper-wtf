import { connect } from 'react-redux';
import LineChart from 'component/LineChart';
import _ from 'lodash';

const getRelevantProjects = (state) => {
    const relevantProjects = _.filter(state.projects, project => (
        _.find(project.categories, c => c.name === state.activeCategory)
    ));

    return _.sortBy(relevantProjects, project => project.id);
};

const getChartData = (state) => {
    const relevantProjects = getRelevantProjects(state);
    const relevantCategory = _.find(state.categories, c => c.name === state.activeCategory);
    const output = {
        labels: [''],
        datasets: [{ data: [relevantCategory.start] }],
    };
    let categoryProgress = relevantCategory.start;
    relevantProjects.forEach(project => {
        const projectCat = _.find(project.categories, c => c.name === state.activeCategory);
        categoryProgress += projectCat.progress;
        output.datasets[0].data.push(categoryProgress);
        output.labels.push(project.name);
    });

    return output;
};

const mapStateToProps = (state) => getChartData(state);

// const mapDispatchToProps = (dispatch) => ({
//     onTodoClick: (name) => {
//         dispatch(showRubric(name));
//     },
// });

const RelevantProjects = connect(
  mapStateToProps
)(LineChart);

export default RelevantProjects;
