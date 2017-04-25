'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Assets belongs to endpoints
 *
 * @abstract
 * @class Asset
 * @template Endpoint
 */
var Asset = (function () {
    /**
     * Creates an instance of Asset.
     * @param {Endpoint} endpoint
     *
     * @memberOf Asset
     */
    function Asset(endpoint) {
        this.endpoint = endpoint;
    }
    return Asset;
}());
exports.default = Asset;
