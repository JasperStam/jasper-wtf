import React, { PropTypes } from 'react';
import styles from './LineChart.css';
import _ from 'lodash';
import { Line } from 'react-chartjs';

export default React.createClass({
    propTypes: {
        datasets: PropTypes.array.isRequired,
        labels: PropTypes.array.isRequired,
    },
    componentDidMount() {
        // Needed for loading the fonts...
        setTimeout(() => {
            this.forceUpdate();
            // this.bindRubricClicks();
        });
    },
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
    chartOptions: {
        // reverse: false,
        // // scaleShowLine: false,
        // // angleShowLineOut: false,
        scaleOverride: true,
        // // Number - The number of steps in a hard coded scale
        scaleSteps: 2,
        // // Number - The value jump in the hard coded scale
        scaleStepWidth: 50,
        // // Number - The scale starting value
        scaleStartValue: 0,
        pointDotRadius: 5,
        pointDotStrokeWidth: 3,
        pointLabelFontSize: 10,
        datasetStrokeWidth: 4,
        pointLabelFontFamily: "'Karla'",
        scaleFontFamily: "'Karla'",
        scaleFontSize: 14,
        // angleLineColor: 'rgba(0,0,0,0.2)',
        // scaleLineColor: 'rgba(0,0,0,0.2)',
        scaleFontColor: '#000',
        // offsetGridLines: 5,
    },
    addStylesToChartData(chartData) {
        // debugger;
        _.extend(chartData.datasets[0], {
            label: 'SDjdsklfsjlflkj',
            fillColor: 'rgba(148,102,221,0.6)',
            strokeColor: '#9466DD',
            pointColor: '#9466DD',
            pointHighlightStroke: '#9466DD',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
        });
        return chartData;
    },
    render() {
        return (
                <Line
                    className={styles['line-chart']}
                    ref="chart"
                    redraw
                    data={this.addStylesToChartData(this.props)}
                    options={this.chartOptions}
                />
        );
    },
});
