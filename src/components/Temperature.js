import React, {Component} from 'react'
import {Line} from 'react-chartjs-2';

import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class Temperature extends Component {
    render() {
        let data = this.props.temperatures.edges.map(({node}) => ({
            t: new Date(node.timestamp),
            y: node.value,
        }));

        const chartData = {
            datasets: [{
                label: 'Temperature',
                data: data,
                type: 'line',
                pointRadius: 0,
                fill: false,
                lineTension: 1,
                borderWidth: 2,
            }]
        };

        const chartOptions = {
            showTooltips: false,
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'series',
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 20
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Temperature',
                    }
                }]
            }
        };

        return (
            <Line data={chartData} options={chartOptions}/>
        )
    }
}

export default createFragmentContainer(Temperature, graphql`
    fragment Temperature_temperatures on TemperatureConnection {
        edges {
            node {
                timestamp
                value
            }
        }
    }
`)