import React, { PropTypes } from 'react';
import styles from './LineChart.css';
import _ from 'lodash';
import { Line } from 'react-chartjs';

export default React.createClass({
    // propTypes: {
    //     datasets: PropTypes.array.isRequired,
    //     labels: PropTypes.array.isRequired,
    //     onCategoryClick: PropTypes.func.isRequired,
    // },
    // componentDidMount() {
    //     // Needed for loading the fonts...
    //     setTimeout(() => {
    //         this.forceUpdate();
    //         this.bindRubricClicks();
    //     });
    // },
    // shouldComponentUpdate() {
    //     return false;
    // },
    // bindRubricClicks() {
    //     const chart = this.refs.chart.getChart();

    //     helpers.bindEvents(chart,
    //         ['click'],
    //         (e) => {
    //             const points = chart.getPointsAtEvent(e);

    //             helpers.each(points, (activePoint) => {
    //                 this.props.onCategoryClick(activePoint.label);
    //             });
    //         }
    //     );
    // },
    // chartOptions: {
    //     reverse: false,
    //     // scaleShowLine: false,
    //     // angleShowLineOut: false,
    //     scaleOverride: true,
    //     // Number - The number of steps in a hard coded scale
    //     scaleSteps: 2,
    //     // Number - The value jump in the hard coded scale
    //     scaleStepWidth: 50,
    //     // Number - The scale starting value
    //     scaleStartValue: 0,
    //     pointDotRadius: 5,
    //     pointDotStrokeWidth: 3,
    //     pointLabelFontSize: 14,
    //     datasetStrokeWidth: 4,
    //     pointLabelFontFamily: "'Karla'",
    //     scaleFontFamily: "'Karla'",
    //     angleLineColor: 'rgba(0,0,0,0.2)',
    //     scaleLineColor: 'rgba(0,0,0,0.2)',
    //     pointLabelFontColor: '#000',
    // },
    // addStylesToChartData(chartData) {
    //     _.extend(chartData.datasets[0], {
    //         label: 'Now',
    //         fillColor: 'rgba(148,102,221,0.6)',
    //         strokeColor: '#9466DD',
    //         pointColor: '#9466DD',
    //         pointHighlightStroke: '#9466DD',
    //         pointStrokeColor: '#fff',
    //         pointHighlightFill: '#fff',
    //     });
    //     _.extend(chartData.datasets[1], {
    //         label: '2 years ago',
    //         fillColor: 'rgba(0,0,0,0.6)',
    //         strokeColor: '#000',
    //         pointColor: '#000',
    //         pointHighlightStroke: '#000',
    //         pointStrokeColor: '#fff',
    //         pointHighlightFill: '#fff',
    //     });
    //     return chartData;
    // },
    render() {
        return (
                <Line
                    className={styles['line-chart']}
                    ref="chart"
                    redraw
                    data={{labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]}}
                    options={this.chartOptions}
                />
        );
    },
});
