import { Observable } from 'rxjs';

import Endpoint from './common/endpoint';
import { ICollection, ISnapshot, ISnapshotEndpoint } from './common/interfaces';
import { isSnapshot } from './common/type.guards';
import DigitalOcean from './digitalOcean';

/**
 * Snapshot endpoint.
 *
 * @class SnapshotEndpoint
 * @extends {Endpoint}
 * @implements {ISnapshotEndpoint}
 */
export default class SnapshotEndpoint extends Endpoint implements ISnapshotEndpoint {
    /**
     * Creates an instance of SnapshotEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof SnapshotEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/snapshots');
    }
    /**
     * Delete snapshot by id.
     *
     * @param {string} id
     * @returns {Observable<void>}
     *
     * @memberof SnapshotEndpoint
     */
    public delete(id: string): Observable<void> {
        let url: string = `${this.prefix}/${id}`;
        let promise = this.api.delete(url);
        return this.fromPromise(promise);
    }
    /**
     * Get snapshot by id.
     *
     * @param {string} id
     * @returns {Observable<ISnapshot>}
     *
     * @memberof SnapshotEndpoint
     */
    public get(id: string): Observable<ISnapshot> {
        let url: string = `${this.prefix}/${id}`;
        let promise = this.api.get(url);
        return this.fromPromise(promise, 'snapshot', isSnapshot);
    }
    /**
     * List all snaphsots.
     *
     * @param {number} page
     * @param {number} [perPage]
     *
     * @memberof SnapshotEndpoint
     */
    public list(page: number, perPage?: number): Observable<ICollection<ISnapshot>>;
    /**
     * List all snaphsots by resource type.
     *
     * @param {string} resourceType
     * @param {number} page
     * @param {number} [perPage]
     *
     * @memberof SnapshotEndpoint
     */
    public list(resourceType: string, page: number, perPage?: number): Observable<ICollection<ISnapshot>>;
    public list(a: string | number, b: number, c?: number): Observable<ICollection<ISnapshot>> {
        let resourceType: string = null, page: number = null, perPage: number = null;
        if (typeof a === 'string') ((resourceType = a) && (page = b) && (perPage = c));
        else ((page = a) && (perPage = b));
        let url: string = this.prefix;
        if (resourceType) url = `${url}?resource_type=${resourceType}`;
        return this.getCollection<ISnapshot>(page, perPage, url, 'snapshots', isSnapshot);
    }
}