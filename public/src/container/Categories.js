import { connect } from 'react-redux';
import { showCategory } from 'actions/index';
import RadarChart from 'component/RadarChart';
import _ from 'lodash';

const mapStateToProps = (state) => {
    const categories = {
        labels: [],
        datasets: [{ data: [] }, { data: [] }],
    };

    // First push the start data in our local categories hashmap.
    state.categories.forEach(category => {
        categories.labels.push(category.name);
        // Push the start data in the result (i=0) and the state(i=1) datasets.
        // Pushing them in the result dataset so we have something to increment
        // Result (i0) before start (i1) because of chart data z-index
        categories.datasets[0].data.push(category.start);
        categories.datasets[1].data.push(category.start);
    });

    // Loop through the projects
    state.projects.forEach(project => {
        // And for each category that project influences
        project.categories.forEach(category => {
            const targetCategoryIndex = _.findIndex(categories.labels, (label) => label === category.name);
            // Increment the category.startValue with the progress this project made
            // for that category
            categories.datasets[0].data[targetCategoryIndex] += category.progress;
        });
    });


    return categories;
};

const mapDispatchToProps = (dispatch) => ({
    onCategoryClick: (name) => {
        dispatch(showCategory(name));
    },
});

const Categories = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadarChart);

export default Categories;
