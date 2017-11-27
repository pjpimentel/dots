import DigitalOcean from './digitalOcean';
import Endpoint from './common/endpoint';
import { ICollection, IRegion, IRegionEndpoint } from "./common/interfaces";
import { Observable } from "rxjs/Observable";
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
    constructor(digitalOcean: DigitalOcean);
    /**
     * List all regions.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IRegion>>}
     *
     * @memberof RegionEndpoint
     */
    list(page: number, perPage?: number): Observable<ICollection<IRegion>>;
}
