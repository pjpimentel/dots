import { Observable } from 'rxjs';
import Endpoint from './common/endpoint';
import { ICollection, ISnapshot, ISnapshotEndpoint } from './common/interfaces';
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
    constructor(digitalOcean: DigitalOcean);
    /**
     * Delete snapshot by id.
     *
     * @param {string} id
     * @returns {Observable<void>}
     *
     * @memberof SnapshotEndpoint
     */
    delete(id: string): Observable<void>;
    /**
     * Get snapshot by id.
     *
     * @param {string} id
     * @returns {Observable<ISnapshot>}
     *
     * @memberof SnapshotEndpoint
     */
    get(id: string): Observable<ISnapshot>;
    /**
     * List all snaphsots.
     *
     * @param {number} page
     * @param {number} [perPage]
     *
     * @memberof SnapshotEndpoint
     */
    list(page: number, perPage?: number): Observable<ICollection<ISnapshot>>;
    /**
     * List all snaphsots by resource type.
     *
     * @param {string} resourceType
     * @param {number} page
     * @param {number} [perPage]
     *
     * @memberof SnapshotEndpoint
     */
    list(resourceType: string, page: number, perPage?: number): Observable<ICollection<ISnapshot>>;
}
