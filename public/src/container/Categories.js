import { connect } from 'react-redux';
import { showCategory } from 'actions/index';
import RadarChart from 'component/RadarChart';

const mapStateToProps = (state) => {
    const categories = {
        labels: [],
        datasets: [{ data: [] }, { data: [] }],
    };

    state.categories.forEach(category => {
        categories.labels.push(category.name);
        // Result before start because of chart data z-index
        categories.datasets[0].data.push(category.result || category.start);
        categories.datasets[1].data.push(category.start);
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
