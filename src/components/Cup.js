import React, { Component } from 'react'
import {
    createRefetchContainer,
    graphql
} from 'react-relay'

import Grid from 'material-ui/Grid';

import Water from './Water';
import Greyscale from './Greyscale';

class Cup extends Component {
	update() {
		this.props.relay.refetch({}, null, () => console.log('Updated'), {});
		setTimeout(this.update.bind(this), 1000);
	}

    render() {
		setTimeout(this.update.bind(this), 1000);
        return (
            <Grid container spacing={0} >
                <Grid item lg={6} xs={12}>
                    <Water
                        temperatures={this.props.cup.temperatures}
                        level={this.props.cup.liquidLevels}
                        humidity={this.props.cup.humidityLevels}/>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <Greyscale greyscale={this.props.cup.greyscaleLevels}/>
                </Grid>
            </Grid>
        )
    }
}


export default createRefetchContainer(Cup, graphql`
    fragment Cup_cup on Cup {
        temperatures(last: 300) {
            ...Water_temperatures
        }
        liquidLevels(last: 300) {
            ...Water_level
        }
        humidityLevels(last: 300) {
            ...Water_humidity
        }
        greyscaleLevels(last: 300) {
            ...Greyscale_greyscale
        }
    }
`, graphql`
   query CupsPageQuery {
        allCups(last: 1) {
            edges {
                node {
                    ...Cup_cup
                }
            }
        }
    }
`);
