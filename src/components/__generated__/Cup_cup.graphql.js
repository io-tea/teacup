/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Cup_cup = {|
  +temperatures: ?{| |};
  +liquidLevels: ?{| |};
  +humidityLevels: ?{| |};
  +greyscaleLevels: ?{| |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Cup_cup",
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
          "kind": "FragmentSpread",
          "name": "Water_temperatures",
          "args": null
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
          "kind": "FragmentSpread",
          "name": "Water_level",
          "args": null
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
          "kind": "FragmentSpread",
          "name": "Water_humidity",
          "args": null
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
          "kind": "FragmentSpread",
          "name": "Greyscale_greyscale",
          "args": null
        }
      ],
      "storageKey": "greyscaleLevels{\"last\":300}"
    }
  ],
  "type": "Cup"
};

module.exports = fragment;
