import React, { Component } from 'react'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'
import Temperature from "./Temperature";

class Cup extends Component {
    render() {
        return (
            <Temperature temperatures={this.props.cup.temperatures}/>
        )
    }
}


export default createFragmentContainer(Cup, graphql`
    fragment Cup_cup on Cup {
        temperatures {
            ...Temperature_temperatures
        }
    }
`)