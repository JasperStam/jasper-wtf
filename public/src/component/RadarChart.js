import React, { PropTypes } from 'react';
import styles from './RadarChart.css';
import _ from 'lodash';
import { Radar } from 'react-chartjs';
import { helpers } from 'chart.js';

export default React.createClass({
    propTypes: {
        datasets: PropTypes.array.isRequired,
        labels: PropTypes.array.isRequired,
        onCategoryClick: PropTypes.func.isRequired,
    },
    componentDidMount() {
        // Needed for loading the fonts...
        setTimeout(() => {
            this.forceUpdate();
            this.bindRubricClicks();
        });
    },
    shouldComponentUpdate() {
        return false;
    },
    bindRubricClicks() {
        const chart = this.refs.chart.getChart();

        helpers.bindEvents(chart,
            ['click'],
            (e) => {
                const points = chart.getPointsAtEvent(e);

                helpers.each(points, (activePoint) => {
                    this.props.onCategoryClick(activePoint.label);
                });
            }
        );
    },
    chartOptions: {
        reverse: false,
        // scaleShowLine: false,
        // angleShowLineOut: false,
        scaleOverride: true,
        // Number - The number of steps in a hard coded scale
        scaleSteps: 2,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: 50,
        // Number - The scale starting value
        scaleStartValue: 0,
        pointDotRadius: 5,
        pointDotStrokeWidth: 3,
        pointLabelFontSize: 14,
        datasetStrokeWidth: 4,
        pointLabelFontFamily: "'Karla'",
        scaleFontFamily: "'Karla'",
        angleLineColor: 'rgba(0,0,0,0.2)',
        scaleLineColor: 'rgba(0,0,0,0.2)',
        pointLabelFontColor: '#000',
    },
    addStylesToChartData(chartData) {
        _.extend(chartData.datasets[0], {
            label: 'Nu',
            fillColor: 'rgba(148,102,221,0.6)',
            strokeColor: '#9466DD',
            pointColor: '#9466DD',
            pointHighlightStroke: '#9466DD',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
        });
        _.extend(chartData.datasets[1], {
            label: 'Voor de periode',
            fillColor: 'rgba(0,0,0,0.6)',
            strokeColor: '#000',
            pointColor: '#000',
            pointHighlightStroke: '#000',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
        });
        return chartData;
    },
    render() {
        return (
            <div className={styles['radar-container']}>
                <b className={styles.title}>Rubrics overall</b>
                <Radar
                    className={styles['radar-chart']}
                    ref="chart"
                    redraw
                    data={this.addStylesToChartData(this.props)}
                    options={this.chartOptions}
                />
            </div>
        );
    },
});
