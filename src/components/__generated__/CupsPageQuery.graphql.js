/**
 * @flow
 * @relayHash 43a499574209273a26b01c59e21e6c39
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
  allCups(first: 1) {
    edges {
      node {
        ...Cup_cup
        id
      }
    }
  }
}

fragment Cup_cup on Cup {
  temperatures {
    ...Water_temperatures
  }
  liquidLevels {
    ...Water_level
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
            "name": "first",
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
        "storageKey": "allCups{\"first\":1}"
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
            "name": "first",
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
                    "args": null,
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
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
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
        "storageKey": "allCups{\"first\":1}"
      }
    ]
  },
  "text": "query CupsPageQuery {\n  allCups(first: 1) {\n    edges {\n      node {\n        ...Cup_cup\n        id\n      }\n    }\n  }\n}\n\nfragment Cup_cup on Cup {\n  temperatures {\n    ...Water_temperatures\n  }\n  liquidLevels {\n    ...Water_level\n  }\n}\n\nfragment Water_temperatures on TemperatureConnection {\n  edges {\n    node {\n      timestamp\n      value\n      id\n    }\n  }\n}\n\nfragment Water_level on LiquidConnection {\n  edges {\n    node {\n      timestamp\n      value\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
