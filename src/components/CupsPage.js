import React, {Component} from 'react'
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from '../Environment'
import Cup from './Cup'
import {LinearProgress} from 'material-ui/Progress';

const CupsPageQuery = graphql`
    query CupsPageQuery {
        allCups(last: 1) {
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
                variables={this.variables}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props && props.allCups.edges.length > 0) {
                        let node = props.allCups.edges[0].node;
                        return (
                            <Cup key={node.__id} cup={node}/>
                        )
                    } else {
                        return <LinearProgress mode="query"/>
                    }
                }}
            />
        )
    }
}

export default CupsPage
