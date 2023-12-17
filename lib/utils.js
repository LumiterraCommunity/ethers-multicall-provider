"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProviderCompatible = exports.getMulticall = exports.getBlockNumber = void 0;
var utils_1 = require("ethers/lib/utils");
var constants_1 = require("./constants");
var types_1 = require("./types");
var getBlockNumber = function (blockTag) {
    if ((0, utils_1.isHexString)(blockTag))
        return parseInt(blockTag, 16);
    else if (typeof blockTag === "number")
        return blockTag;
    else if (blockTag === "earliest")
        return 0;
    return null;
};
exports.getBlockNumber = getBlockNumber;
var getMulticall = function (blockNumber, chainId, provider) {
    var _a, _b;
    if (blockNumber != null) {
        if (blockNumber <= ((_a = constants_1.multicall3DeploymentBlockNumbers[chainId]) !== null && _a !== void 0 ? _a : Infinity)) {
            if (blockNumber <= ((_b = constants_1.multicall2DeploymentBlockNumbers[chainId]) !== null && _b !== void 0 ? _b : Infinity))
                return null;
            return types_1.Multicall2__factory.connect(constants_1.multicall2Address, provider);
        }
    }
    return types_1.Multicall3__factory.connect(constants_1.multicall3ChainAddress[chainId] || constants_1.multicall3Address, provider);
};
exports.getMulticall = getMulticall;
var isProviderCompatible = function (provider) {
    var candidate = provider;
    return candidate._isProvider && !!candidate.perform;
};
exports.isProviderCompatible = isProviderCompatible;
