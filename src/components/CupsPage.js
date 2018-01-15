import React, {Component} from 'react'
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from '../Environment'
import Cup from './Cup'

const CupsPageQuery = graphql`
    query CupsPageQuery {
        allCups(first: 1) {
            edges {
                node {
                    ...Cup_cup
                }
            }
        }
    }
`;

class CupsPage extends Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={CupsPageQuery}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props) {
                        return (
                            <div>
                            {props.allCups.edges.map(({node}) => (
                                <Cup key={node.__id} cup={node}/>
                            ))}
                            </div>
                        )
                    }
                    return <div>Loading</div>
                }}
            />
        )
    }
}

export default CupsPage