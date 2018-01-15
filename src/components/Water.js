import React, {Component} from 'react'
import {Line} from 'react-chartjs-2';

import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class Water extends Component {
    render() {
        let temperatureData = this.props.temperatures.edges.map(({node}) => ({
            t: new Date(node.timestamp),
            y: node.value,
        }));

        let levelData = this.props.level.edges.map(({node}) => ({
            t: new Date(node.timestamp),
            y: node.value
        }));

        const chartData = {
            datasets: [{
                label: 'Water temperature',
                data: temperatureData,
                yAxisID: 'temperature',
                type: 'line',
                pointRadius: 0,
                borderColor: 'rgb(243, 163, 42)',
                backgroundColor: 'rgba(243, 163, 42, .15)',
                lineTension: 1,
                borderWidth: 2,
            }, {
                label: 'Water level',
                data: levelData,
                yAxisID: 'level',
                type: 'line',
                pointRadius: 0,
                borderColor: 'rgb(60, 180, 203)',
                backgroundColor: 'rgba(60, 180, 203, .15)',
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
                    id: 'temperature',
                    position: 'left',
                    scaleLabel: {
                        display: true,
                        labelString: 'Water [°C]',
                    }
                }, {
                    id: 'level',
                    position: 'right',
                    scaleLabel: {
                        display: true,
                        labelString: 'Water level [cm]',
                    }
                }]
            }
        };

        return (
            <Line data={chartData} options={chartOptions}/>
        )
    }
}

export default createFragmentContainer(Water, graphql`
    fragment Water_temperatures on TemperatureConnection {
        edges {
            node {
                timestamp
                value
            }
        }
    }

    fragment Water_level on LiquidConnection {
        edges {
            node {
                timestamp
                value
            }
        }
    }
`)