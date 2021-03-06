/**
 * @flow
 * @relayHash 728f7caedd8338de22cad8cc8c28ce41
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CupsPageQueryResponse = {|
  +allCups: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{| |};
    |}>;
  |};
|};
*/


/*
query CupsPageQuery {
  allCups(last: 1) {
    edges {
      node {
        ...Cup_cup
        id
      }
    }
  }
}

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

fragment Water_temperatures on TemperatureConnection {
  edges {
    node {
      timestamp
      value
      id
    }
  }
}

fragment Water_level on LiquidConnection {
  edges {
    node {
      timestamp
      value
      id
    }
  }
}

fragment Water_humidity on HumidityConnection {
  edges {
    node {
      timestamp
      value
      id
    }
  }
}

fragment Greyscale_greyscale on GreyscaleConnection {
  edges {
    node {
      timestamp
      value
      id
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CupsPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "last",
            "value": 1,
            "type": "Int"
          }
        ],
        "concreteType": "CupConnection",
        "name": "allCups",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "CupEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Cup",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "Cup_cup",
                    "args": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allCups{\"last\":1}"
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CupsPageQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "CupsPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "last",
            "value": 1,
            "type": "Int"
          }
        ],
        "concreteType": "CupConnection",
        "name": "allCups",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "CupEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Cup",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "last",
                        "value": 300,
                        "type": "Int"
                      }
                    ],
                    "concreteType": "TemperatureConnection",
                    "name": "temperatures",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "TemperatureEdge",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Temperature",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "timestamp",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "value",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "id",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "temperatures{\"last\":300}"
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "last",
                        "value": 300,
                        "type": "Int"
                      }
                    ],
                    "concreteType": "LiquidConnection",
                    "name": "liquidLevels",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "LiquidEdge",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Liquid",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "timestamp",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "value",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "id",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "liquidLevels{\"last\":300}"
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "last",
                        "value": 300,
                        "type": "Int"
                      }
                    ],
                    "concreteType": "HumidityConnection",
                    "name": "humidityLevels",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "HumidityEdge",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Humidity",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "timestamp",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "value",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "id",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "humidityLevels{\"last\":300}"
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "last",
                        "value": 300,
                        "type": "Int"
                      }
                    ],
                    "concreteType": "GreyscaleConnection",
                    "name": "greyscaleLevels",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "GreyscaleEdge",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Greyscale",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "timestamp",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "value",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "id",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "greyscaleLevels{\"last\":300}"
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allCups{\"last\":1}"
      }
    ]
  },
  "text": "query CupsPageQuery {\n  allCups(last: 1) {\n    edges {\n      node {\n        ...Cup_cup\n        id\n      }\n    }\n  }\n}\n\nfragment Cup_cup on Cup {\n  temperatures(last: 300) {\n    ...Water_temperatures\n  }\n  liquidLevels(last: 300) {\n    ...Water_level\n  }\n  humidityLevels(last: 300) {\n    ...Water_humidity\n  }\n  greyscaleLevels(last: 300) {\n    ...Greyscale_greyscale\n  }\n}\n\nfragment Water_temperatures on TemperatureConnection {\n  edges {\n    node {\n      timestamp\n      value\n      id\n    }\n  }\n}\n\nfragment Water_level on LiquidConnection {\n  edges {\n    node {\n      timestamp\n      value\n      id\n    }\n  }\n}\n\nfragment Water_humidity on HumidityConnection {\n  edges {\n    node {\n      timestamp\n      value\n      id\n    }\n  }\n}\n\nfragment Greyscale_greyscale on GreyscaleConnection {\n  edges {\n    node {\n      timestamp\n      value\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
