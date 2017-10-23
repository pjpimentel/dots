'use strict';
import { isArrayOfSize, isSize } from './common/type.guards';
import Endpoint from './common/endpoint';
import { ICollection } from './common/interfaces';
import DigitalOcean from './digitalOcean';
import { ISize, ISizeEndpoint } from './common/interfaces';
import { Observable } from 'rxjs';

/**
 * Size endpoint.
 *
 * @class SizeEndpoint
 * @extends {Endpoint}
 * @implements {ISizeEndpoint}
 */
class SizeEndpoint extends Endpoint implements ISizeEndpoint {
    /**
     * Creates an instance of SizeEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberOf SizeEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/sizes');
    }
    /**
     * List all sizes.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Promise<ICollection<Size>>}
     *
     * @memberOf SizeEndpoint
     */
    public list(page: number, perPage?: number): Observable<ICollection<ISize>> {
        let collection: ICollection<ISize>;
        let url: string = this.prefix;
        return this.getCollection<ISize>(page, perPage, url, 'sizes', isSize)
    }
}

export default SizeEndpoint;