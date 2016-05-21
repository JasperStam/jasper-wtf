import React from 'react';
import { Radar } from 'react-chartjs';

export default React.createClass({
    propTypes: {
        rubrics: React.PropTypes.object.isRequired,
    },
    chartOptions: {
        responsive: true,
        legend: {
            display: false,
        },
        scale: {
            gridLines: {
                display: false,
            },
            ticks: {
                display: false,
                beginAtZero: true,
            },
            pointLabels: {
                fontSize: 15,
            },
        },
    },
    render() {
        return <Radar data={this.props.rubrics} options={this.chartOptions} />;
    },
});
