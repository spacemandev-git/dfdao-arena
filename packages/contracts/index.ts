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

/**
 * The name of the network where these contracts are deployed.
 */
export const NETWORK = 'localhost';
/**
 * The id of the network where these contracts are deployed.
 */
export const NETWORK_ID = 31337;
/**
 * The block in which the DarkForest contract was initialized.
 */
export const START_BLOCK = 0;
/**
 * The address for the DarkForest contract.
 */
export const CONTRACT_ADDRESS = '0x124d0b48570aDFD14Ac35820e38db273cAa6A694';
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
export const INIT_ADDRESS = '0x631f05a3143f0B72DdE31633D674CdcA55D67b4b';
/**
 * The address for the Verifier library. Useful for lobbies.
 */
export const VERIFIER_ADDRESS = '0x7706819605B8Cc8272372A7C83e65E6c0733b2Ec';
/**
 * The address for the LibGameUtils library. Useful for lobbies.
 */
export const LIB_GAME_UTILS_ADDRESS = '0xA1cf9870677Bb213991DDdE342a5CE412c0f676D';
/**
 * The address for the LibPlanet library. Useful for lobbies.
 */
export const LIB_PLANET_ADDRESS = '0x627a72bbE16416Ae722BA05876C5cB2dcb0Dc6BB';
/**
 * The address for the LibArtifacts library. Useful for lobbies.
 */
export const LIB_ARTIFACT_UTILS_ADDRESS = '0x05bc9678C41a3E89cA0ca6D837565a4bCb5D0E5c';
/**
 * The address for the Faucet contract. Useful for lobbies.
 */
export const FAUCET_ADDRESS = '0x87482726d4AdbBE62A91D657983bb087b1Ca88e6';
