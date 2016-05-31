import React, { PropTypes } from 'react';
import { Radar } from 'react-chartjs';
import { helpers } from 'chart.js';

export default React.createClass({
    propTypes: {
        rubrics: PropTypes.object.isRequired,
        onRubricClick: PropTypes.func.isRequired,
    },
    componentDidMount() {
        const chart = this.refs.chart.getChart();

        helpers.bindEvents(chart,
            ['click'],
            (e) => {
                const points = chart.getPointsAtEvent(e);

                helpers.each(points, (activePoint) => {
                    this.props.onRubricClick(activePoint.label);
                });
            }
        );
    },
    shouldComponentUpdate() {
        return false;
    },
    chartOptions: {
        animation: false,
        scaleShowLine: false,
        pointDotRadius: 5,
        pointDotStrokeWidth: 5,
        pointLabelFontSize: 15,
        angleLineColor: 'rgba(0,0,0,.1)',
    },
    render() {
        return <Radar ref="chart" redraw data={this.props.rubrics} options={this.chartOptions} />;
    },
});
