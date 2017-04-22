
'use strict';
/**
 * Assets belongs to endpoints
 * 
 * @abstract
 * @class Asset
 * @template Endpoint 
 */
abstract class Asset<Endpoint>{
    /**
     * reference to endpoint instance
     * 
     * @protected
     * @type {Endpoint}
     * @memberOf Asset
     */
    protected readonly endpoint: Endpoint;
    /**
     * Creates an instance of Asset.
     * @param {Endpoint} endpoint 
     * 
     * @memberOf Asset
     */
    constructor(endpoint: Endpoint) {
        this.endpoint = endpoint;
    }
}

export default Asset;