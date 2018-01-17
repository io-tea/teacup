import React, { Component } from 'react'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Water from './Water';
import Greyscale from './Greyscale';

class Cup extends Component {
    render() {
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


export default createFragmentContainer(Cup, graphql`
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
`)