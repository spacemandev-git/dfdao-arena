'use strict';
/**
 * This package contains deployed contract addresses, ABIs, and Typechain types
 * for the Dark Forest game.
 *
 * ## Installation
 *
 * You can install this package using [`npm`](https://www.npmjs.com) or
 * [`yarn`](https://classic.yarnpkg.com/lang/en/) by running:
 *
 * ```bash
 * npm install --save @darkforest_eth/contracts
 * ```
 * ```bash
 * yarn add @darkforest_eth/contracts
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as contracts from 'http://cdn.skypack.dev/@darkforest_eth/contracts'
 * ```
 *
 * ## Typechain
 *
 * The Typechain types can be found in the `typechain` directory.
 *
 * ## ABIs
 *
 * The contract ABIs can be found in the `abis` directory.
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.LIB_ARTIFACT_UTILS_ADDRESS =
  exports.LIB_PLANET_ADDRESS =
  exports.LIB_GAME_UTILS_ADDRESS =
  exports.VERIFIER_ADDRESS =
  exports.INIT_ADDRESS =
  exports.CONTRACT_ADDRESS =
  exports.START_BLOCK =
  exports.NETWORK_ID =
  exports.NETWORK =
    void 0;
/**
 * The name of the network where these contracts are deployed.
 */
exports.NETWORK = 'altlayer';
/**
 * The id of the network where these contracts are deployed.
 */
exports.NETWORK_ID = 1402969;
/**
 * The block in which the DarkForest contract was initialized.
 */
exports.START_BLOCK = 156;
/**
 * The address for the DarkForest contract.
 */
exports.CONTRACT_ADDRESS = '0x44D97EbD6DE3f44B7b5C7608643694cbec45aA19';
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
exports.INIT_ADDRESS = '0xB8D6A017F5B2ef13Abc8abF3a413fDc4F63A62D4';
/**
 * The address for the Verifier library. Useful for lobbies.
 */
exports.VERIFIER_ADDRESS = '0x79cFD3bd3e11470a147238aDF7AfafA569D2E464';
/**
 * The address for the LibGameUtils library. Useful for lobbies.
 */
exports.LIB_GAME_UTILS_ADDRESS = '0x6aCC02083D79928E57018A35a7220209A82C2825';
/**
 * The address for the LibPlanet library. Useful for lobbies.
 */
exports.LIB_PLANET_ADDRESS = '0xeDbdC3B24962b54841dee5505B82Ef8125abE907';
/**
 * The address for the LibArtifacts library. Useful for lobbies.
 */
exports.LIB_ARTIFACT_UTILS_ADDRESS = '0x5dAd37aB15FAD326864d13efa7f4622B8A8a3593';
//# sourceMappingURL=index.js.map
