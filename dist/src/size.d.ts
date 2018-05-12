import { Observable } from 'rxjs';
import Endpoint from './common/endpoint';
import { ICollection } from './common/interfaces';
import { ISize, ISizeEndpoint } from './common/interfaces';
import DigitalOcean from './digitalOcean';
/**
 * Size endpoint.
 *
 * @class SizeEndpoint
 * @extends {Endpoint}
 * @implements {ISizeEndpoint}
 */
export default class SizeEndpoint extends Endpoint implements ISizeEndpoint {
    /**
     * Creates an instance of SizeEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof SizeEndpoint
     */
    constructor(digitalOcean: DigitalOcean);
    /**
     * List all sizes.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<ISize>>}
     *
     * @memberof SizeEndpoint
     */
    list(page: number, perPage?: number): Observable<ICollection<ISize>>;
}
