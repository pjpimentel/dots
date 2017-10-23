'use strict';
import DigitalOcean from './digitalOcean';
import Endpoint from './common/endpoint';
import { ICollection, IRegion, IRegionEndpoint } from "./common/interfaces";
import { Observable } from 'rxjs';
import { isRegion } from './common/type.guards';
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
    public list(page: number, perPage?: number ): Observable<ICollection<IRegion>> {
        let url: string = this.prefix;
        return this.getCollection(page, perPage, url, 'regions', isRegion)
    }
}