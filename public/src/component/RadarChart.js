import React, { PropTypes } from 'react';
import styles from './RadarChart.css';
import { Radar } from 'react-chartjs';
import { helpers } from 'chart.js';

export default React.createClass({
    propTypes: {
        categories: PropTypes.object.isRequired,
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
    render() {
        return (
            <div className={styles['radar-container']}>
                <Radar
                    className={styles['radar-chart']}
                    ref="chart"
                    redraw
                    data={this.props.categories}
                    options={this.chartOptions}
                />
            </div>
        );
    },
});
