'use strict';
import { ISnapshot } from './interfaces';
import { ISnapshotEndpoint } from './interfaces';
import Snapshot from './snapshot';
import DigitalOcean from '../digitalOcean';
import Endpoint from '../common/endpoint';
import { ICollection } from "../common/interfaces";
/**
 * Snapshot endpoint.
 * 
 * @class SnapshotEndpoint
 * @extends {Endpoint}
 * @implements {ISnapshotEndpoint}
 */
class SnapshotEndpoint extends Endpoint implements ISnapshotEndpoint {
    /**
     * Creates an instance of SnapshotEndpoint.
     * @param {DigitalOcean} digitalOcean 
     * 
     * @memberOf SnapshotEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/snapshots');
    }
    /**
     * Delete snapshot by id.
     * 
     * @param {string} id 
     * @returns {Promise<void>} 
     * 
     * @memberOf SnapshotEndpoint
     */
    public async delete(id: string): Promise<void> {
        let url = [this.prefix, id].join('/');
        await this.api.delete(url);
        return;
    }
    /**
     * Get snapshot by id.
     * 
     * @param {string} id 
     * @returns {Promise<Snapshot>} 
     * 
     * @memberOf SnapshotEndpoint
     */
    public async get(id: string): Promise<Snapshot> {
        let url: string = [this.prefix, id].join('/');
        let res = await this.api.get(url);
        if (!res.data) throw this.api.invalidResponse;
        let snapshot: ISnapshot = <ISnapshot> res.data.snapshot;
        return new Snapshot(this, snapshot);
    }
    /**
     * List all snaphsots.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * 
     * @memberOf SnapshotEndpoint
     */
    public async list(page: number, perPage?: number);
    /**
     * List all snaphsots by resource type.
     * 
     * @param {string} resourceType 
     * @param {number} page 
     * @param {number} [perPage] 
     * 
     * @memberOf SnapshotEndpoint
     */
    public async list(resourceType: string, page: number, perPage?: number);
    public async list(
        a: string | number,
        b: number,
        c?: number
    ): Promise<ICollection<Snapshot>> {
        let resourceType: string = null;
        let page: number = null, perPage: number = null;
        if (typeof a === 'string')
            ((resourceType = a) && (page = b) && (perPage = c));
        else
            ((page = a) && (perPage = b));
        let collection: ICollection<ISnapshot> | ICollection<Snapshot>;
        let url: string = this.prefix;
        if (resourceType)
            url = [url, ['resource_type', resourceType].join('=')].join('?');
        collection = await this.getCollection<ISnapshot>(
            page,
            perPage,
            url,
            'snapshots'
        );
        collection = this.upcastCollection<ISnapshot, Snapshot>(
            collection,
            Snapshot
        );
        return <ICollection<Snapshot>>collection;
    }
}

export default SnapshotEndpoint;