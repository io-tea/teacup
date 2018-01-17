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
      "args": null,
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
          "kind": "FragmentSpread",
          "name": "Water_level",
          "args": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
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
      "storageKey": null
    }
  ],
  "type": "Cup"
};

module.exports = fragment;
