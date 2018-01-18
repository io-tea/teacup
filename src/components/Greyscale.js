import React, {Component} from 'react'
import {Line} from 'react-chartjs-2';

import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip'
import OpacityIcon from 'material-ui-icons/Opacity'

import {
    createFragmentContainer,
    graphql
} from 'react-relay'

function transformGreyscaleValue(value) {
    return Math.min(Math.round(value * 200), 100);
}

class Greyscale extends Component {
    render() {
        let greyscaleData = this.props.greyscale.edges.map(({node}) => ({
            t: new Date(node.timestamp),
            y: transformGreyscaleValue(node.value),
        }));

        let greyscale = greyscaleData.length > 0 ? greyscaleData[greyscaleData.length - 1].y : 0;

        const chartData = {
            datasets: [{
                label: 'Tea strength',
                data: greyscaleData,
                yAxisID: 'greyscale',
                type: 'line',
                pointRadius: 0,
                pointHitRadius: 5,
                borderColor: 'rgb(244, 67, 54)',
                backgroundColor: 'rgba(244, 67, 54, .15)',
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
                    id: 'greyscale',
                    position: 'left',
                    scaleLabel: {
                        display: true,
                        labelString: 'Tea strength [%]',
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
                    <Chip avatar={<Avatar><OpacityIcon/></Avatar>} label={greyscale}/>
                </div>
            </div>
        )
    }
}

export default createFragmentContainer(Greyscale, graphql`
    fragment Greyscale_greyscale on GreyscaleConnection {
        edges {
            node {
                timestamp
                value
            }
        }
    }
`)