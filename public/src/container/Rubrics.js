import { connect } from 'react-redux';
import { showRubric } from 'actions/index';
import RadarChart from 'component/RadarChart';

const mapStateToProps = () => ({
    rubrics: {
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
                fillColor: 'rgba(255,255,255,0.2)',
                strokeColor: '#fff',
                pointColor: '#fff',
                pointStrokeColor: '#9466DD',
                pointHighlightFill: '#9466DD',
                pointHighlightStroke: '#fff',
                data: [70, 100, 70, 70, 75, 65, 75, 60, 70, 70, 85, 70, 60],
            },
            {
                label: 'Start',
                fillColor: 'rgba(0,0,0,0.7)',
                strokeColor: '#000',
                pointColor: '#000',
                pointStrokeColor: '#A984E3',
                pointHighlightFill: '#9466DD',
                pointHighlightStroke: '#000',
                data: [50, 85, 10, 10, 50, 60, 65, 10, 30, 50, 75, 50, 40],
            },
        ],
    },
});

const mapDispatchToProps = (dispatch) => ({
    onRubricClick: (name) => {
        dispatch(showRubric(name));
    },
});

const Rubrics = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadarChart);

export default Rubrics;
