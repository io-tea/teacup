import React, {Component} from 'react'
import {Line} from 'react-chartjs';

import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class Temperature extends Component {
    render() {
        let data = this.props.temperatures.edges.map(({node}) => {
            return {
                x: new Date(node.timestamp),
                y: node.value,
            }
        });
        const chartData = {
            labels: data.map(p => p.x),
            datasets: [{
                label: 'Temperature',
                pointDotRadius: 0,
                data: data.map(p => p.y),
            }]
        };

        const chartOptions = {
            showTooltips: false,
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'series',
                    ticks: {
                        source: 'labels'
                    }
                }],
                yAxes: [{
                    scaleLabel: true,
                    labelString: 'Value'
                }]
            }
        };

        return (
            <Line data={chartData} options={chartOptions} width="640" height="480"/>
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