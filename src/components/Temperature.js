import React, {Component} from 'react'

import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class Temperature extends Component {
    render() {
        return (
            <div>
                {this.props.temperatures.edges.map(({node}) => (
                    <div key={node.__id}>{node.value} ({node.timestamp})</div>
                ))}
            </div>
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