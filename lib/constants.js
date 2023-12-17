"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multicall2DeploymentBlockNumbers = exports.multicall3DeploymentBlockNumbers = exports.multicall3ChainAddress = exports.multicallAddresses = exports.multicall3ZkSyncAddress = exports.multicall3LayerLumiAddress = exports.multicall3Address = exports.multicall2LayerLumiAddress = exports.multicall2Address = void 0;
// same address on all networks: https://github.com/mds1/multicall#multicall2-contract-addresses
exports.multicall2Address = "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696";
exports.multicall2LayerLumiAddress = "0x90B02D9F861017844F30dFbdF725b6aa84E63822";
// same address on all networks: https://www.multicall3.com/deployments
exports.multicall3Address = "0xcA11bde05977b3631167028862bE2a173976CA11";
exports.multicall3LayerLumiAddress = "0xfaB95E15849f102b3B0BcEf5C2332dA7e06F6037";
exports.multicall3ZkSyncAddress = "0xF9cda624FBC7e059355ce98a31693d299FACd963";
exports.multicallAddresses = new Set([
    exports.multicall2Address.toLowerCase(),
    exports.multicall3LayerLumiAddress.toLowerCase(),
    exports.multicall2LayerLumiAddress.toLowerCase(),
    exports.multicall3Address.toLowerCase(),
    exports.multicall3ZkSyncAddress.toLowerCase(),
]);
exports.multicall3ChainAddress = {
    280: exports.multicall3ZkSyncAddress,
    324: exports.multicall3ZkSyncAddress,
    94168: exports.multicall3LayerLumiAddress, // lumiterra layer3
};
exports.multicall3DeploymentBlockNumbers = {
    1: 14353601,
    3: 12063863,
    4: 10299530,
    5: 6507670,
    42: 30285908,
    11155111: 751532,
    10: 4286263,
    420: 49461,
    42161: 7654707,
    42170: 1746963,
    421613: 88114,
    421611: 88114,
    137: 25770160,
    80001: 25444704,
    100: 21022491,
    43114: 11907934,
    43113: 7096959,
    250: 33001987,
    4002: 8328688,
    56: 15921452,
    97: 17422483,
    1284: 609002,
    1285: 1597904,
    1287: 1850686,
    1666600000: 24185753,
    25: 1963112,
    122: 16146628,
    14: 3002461,
    280: 5885690,
    324: 3908235,
    94168: 43 // lumiterra layer3
};
exports.multicall2DeploymentBlockNumbers = {
    1: 12336033,
    3: 9894101,
    4: 8283206,
    5: 4489716,
    42: 24025820, // Kovan
};
