import React, { Component } from 'react'
import {
    createRefetchContainer,
    graphql
} from 'react-relay'

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Water from './Water';
import Greyscale from './Greyscale';

class Cup extends Component {
	update() {
		this.props.relay.refetch({}, null, () => console.log('Updated'), {});
		setTimeout(this.update.bind(this), 5000);
	}

    render() {
		setTimeout(this.update.bind(this), 5000);
        return (
            <Grid container spacing={16} style={{ padding: 20 }}>
                <Grid item lg={6} xs={12}>
                    <Paper style={{ padding: 20 }}>
                        <Water temperatures={this.props.cup.temperatures} level={this.props.cup.liquidLevels}/>
                    </Paper>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <Paper style={{ padding: 20 }}>
                        <Greyscale greyscale={this.props.cup.greyscaleLevels}/>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}


export default createRefetchContainer(Cup, graphql`
    fragment Cup_cup on Cup {
        temperatures {
            ...Water_temperatures
        }
        liquidLevels {
            ...Water_level
        }
        greyscaleLevels {
            ...Greyscale_greyscale
        }
    }
`, graphql`
   query CupsPageQuery {
        allCups(first: 1) {
            edges {
                node {
                    ...Cup_cup
                }
            }
        }
    }
`);
