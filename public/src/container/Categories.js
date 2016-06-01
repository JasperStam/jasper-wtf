import { connect } from 'react-redux';
import { showCategory } from 'actions/index';
import RadarChart from 'component/RadarChart';

const mapStateToProps = () => ({
    categories: {
        labels: [
            'Artwork',
            'Technische haalbaarheid',
            'Werking product',
            'Product',
            'Iteratief werken en reflectie',
            'Onderzoek',
            'Documentatie',
            'Trends',
            'Concept',
            'Presentatie',
            'Interface',
            'UX',
            'User testing',
        ], datasets: [
            {
                // #9466DD
                label: 'Na periode',
                fillColor: 'rgba(148,102,221,0.6)',
                strokeColor: '#9466DD',
                pointColor: '#9466DD',
                pointHighlightStroke: '#9466DD',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                data: [70, 100, 70, 70, 75, 65, 75, 60, 70, 70, 85, 70, 60],
            },
            {
                label: 'Start',
                fillColor: 'rgba(0,0,0,0.6)',
                strokeColor: '#000',
                pointColor: '#000',
                pointHighlightStroke: '#000',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                data: [50, 85, 10, 10, 50, 60, 65, 10, 30, 50, 75, 50, 40],
            },
        ],
    },
});

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
