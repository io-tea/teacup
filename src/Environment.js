const {
    Environment,
    Network,
    RecordSource,
    Store,
} = require('relay-runtime');

const apiEndpoint = 'http://localhost:5000/graphql';

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
    return fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json()
    });
});

const environment = new Environment({
    network,
    store,
});

export default environment