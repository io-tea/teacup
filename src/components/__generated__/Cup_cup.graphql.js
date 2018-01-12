/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Cup_cup = {|
  +temperatures: ?{| |};
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
          "name": "Temperature_temperatures",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Cup"
};

module.exports = fragment;
