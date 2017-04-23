'use strict';
import { ISnapshot } from './interfaces';
import SnapshotEndpoint from './endpoint';
import Asset from '../common/asset';
/**
 * Snapshot asset.
 * 
 * @class Snapshot
 * @extends {Asset<SnapshotEndpoint>}
 * @implements {ISnapshot}
 */
class Snapshot extends Asset<SnapshotEndpoint> implements ISnapshot{
    readonly created_at: Date;
    readonly id: string;
    readonly min_disk_size: number;
    readonly name: string;
    readonly regions: Array<string>;
    readonly resource_id: string;
    readonly resource_type: string;
    readonly size_gigabytes: number;
    /**
     * Creates an instance of Snapshot.
     * @param {SnapshotEndpoint} endpoint 
     * @param {ISnapshot} snapshot 
     * 
     * @memberOf Snapshot
     */
    constructor(endpoint: SnapshotEndpoint, snapshot: ISnapshot){
        super(endpoint),
        this.created_at = snapshot.created_at;
        this.id = snapshot.id;
        this.min_disk_size = snapshot.min_disk_size;
        this.name = snapshot.name;
        this.regions = snapshot.regions;
        this.resource_id = snapshot.resource_id;
        this.resource_type = snapshot.resource_type;
        this.size_gigabytes = snapshot.size_gigabytes;
    }
    /**
     * Delete snapshot.
     * 
     * @returns {Promise<void>} 
     * 
     * @memberOf Snapshot
     */
    public async delete(): Promise<void>{
        return this.endpoint.delete(this.id);
    }
}

export default Snapshot;