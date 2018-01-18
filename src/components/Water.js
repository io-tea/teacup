import React, {Component} from 'react'
import {Line} from 'react-chartjs-2';

import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip'
import TimelineIcon from 'material-ui-icons/Timeline'

import {
    createFragmentContainer,
    graphql
} from 'react-relay'

function transformTemperatureValue(value) {
    return Math.round(value * 100) / 100;
}

function transformLevelValue(value) {
    return Math.round(value * 100) / 100;
}

class Water extends Component {
    render() {
        let temperatureData = this.props.temperatures.edges.map(({node}) => ({
            t: new Date(node.timestamp),
            y: transformTemperatureValue(node.value),
        }));
        let temperature = temperatureData.length > 0 ? temperatureData[temperatureData.length - 1].y : 0.00;

        let levelData = this.props.level.edges.map(({node}) => ({
            t: new Date(node.timestamp),
            y: transformLevelValue(node.value)
        }));
        let waterLevel = levelData.length > 0 ? levelData[levelData.length - 1].y : 0.00;

        const chartData = {
            datasets: [{
                label: 'Water temperature',
                data: temperatureData,
                yAxisID: 'temperature',
                type: 'line',
                pointRadius: 0,
                pointHitRadius: 5,
                borderColor: 'rgb(255, 193, 7)',
                backgroundColor: 'rgba(255, 193, 7, .15)',
                lineTension: 1,
                borderWidth: 2,
            }, {
                label: 'Water level',
                data: levelData,
                yAxisID: 'level',
                type: 'line',
                pointRadius: 0,
                pointHitRadius: 5,
                borderColor: 'rgb(33, 150, 243)',
                backgroundColor: 'rgba(33, 150, 243, .15)',
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
                        labelString: 'Temperature [°C]',
                    }
                }, {
                    id: 'level',
                    position: 'right',
                    scaleLabel: {
                        display: true,
                        labelString: 'Level [%]',
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    title: function(tooltipItem) {
                        const datetime = tooltipItem[0].xLabel;
                        const hours = ("0" + datetime.getHours()).substr(-2);
                        const minutes = ("0" + datetime.getMinutes()).substr(-2);
                        const seconds = ("0" + datetime.getSeconds()).substr(-2);
                        return `${hours}:${minutes}:${seconds}`;
                    }
                }
            }
        };

        return (
            <div>
                <Line data={chartData} options={chartOptions}/>
                <div className={"chip-list"}>
                    <Chip avatar={<Avatar>°C</Avatar>} label={temperature}/>
                    <Chip avatar={<Avatar><TimelineIcon/></Avatar>} label={waterLevel}/>
                </div>
            </div>
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