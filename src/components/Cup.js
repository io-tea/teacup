import React, { Component } from 'react'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'
import Water from './Water';

class Cup extends Component {
    render() {
        return (
            <Water temperatures={this.props.cup.temperatures} level={this.props.cup.liquidLevels}/>
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
    }
`)