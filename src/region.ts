import { Observable } from 'rxjs';
import Endpoint from './common/endpoint';
import { ICollection, IRegion, IRegionEndpoint } from './common/interfaces';
import { isRegion } from './common/type.guards';
import DigitalOcean from './digitalOcean';
/**
 * Region endpoint.
 *
 * @class RegionEndpoint
 * @extends {Endpoint}
 * @implements {IRegionEndpoint}
 */
export default class RegionEndpoint extends Endpoint implements IRegionEndpoint {
    /**
     * Creates an instance of RegionEndpoint.a
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof RegionEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/regions');
    }
    /**
     * List all regions.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IRegion>>}
     *
     * @memberof RegionEndpoint
     */
    list(page: number, perPage?: number ): Observable<ICollection<IRegion>> {
        const url: string = this.prefix;
        return this.getCollection(page, perPage, url, 'regions', isRegion);
    }
}
