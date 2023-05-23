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
exports.NETWORK_ID = 1005781;
/**
 * The block in which the DarkForest contract was initialized.
 */
exports.START_BLOCK = 218478;
/**
 * The address for the DarkForest contract.
 */
exports.CONTRACT_ADDRESS = '0x019a0F8c4e30ca6921c7da452C2d2F6EED5AE8ef';
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
exports.INIT_ADDRESS = '0xa366da1Dbe9D6BF7921BaCC05d5950125bef5F9F';
/**
 * The address for the Verifier library. Useful for lobbies.
 */
exports.VERIFIER_ADDRESS = '0x0dD83F0eF7375Af395229aFbFeA8B13Cd1aeac7d';
/**
 * The address for the LibGameUtils library. Useful for lobbies.
 */
exports.LIB_GAME_UTILS_ADDRESS = '0x6c2272b8bC05197E7766846A8A4B53689616ab47';
/**
 * The address for the LibPlanet library. Useful for lobbies.
 */
exports.LIB_PLANET_ADDRESS = '0xff2278b8a5C91bad142aec301A12fdeBD66D7d24';
/**
 * The address for the LibArtifacts library. Useful for lobbies.
 */
exports.LIB_ARTIFACT_UTILS_ADDRESS = '0x1febfC1e404cB97B4F9Fd8D23c3841E9Ef8B415C';
//# sourceMappingURL=index.js.map
