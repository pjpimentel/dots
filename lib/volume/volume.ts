'use strict';
import {IVolume} from './interfaces';
import VolumeEndpoint from './endpoint';
import Asset from '../common/asset';
import { IRegion } from "../region/interfaces";
/**
 * Volume asset.
 * 
 * @class Volume
 * @extends {Asset<VolumeEndpoint>}
 * @implements {IVolume}
 */
class Volume extends Asset<VolumeEndpoint> implements IVolume{
    readonly created_at: string;
    readonly description: string;
    readonly droplet_ids: Array<number>;
    readonly id: string;
    readonly name: string;
    readonly region: IRegion;
    readonly size_gigabytes: number;
    /**
     * Creates an instance of Volume.
     * @param {VolumeEndpoint} endpoint 
     * @param {IVolume} volume 
     * 
     * @memberOf Volume
     */
    constructor(endpoint: VolumeEndpoint, volume: IVolume){
        super(endpoint);
        this.created_at = volume.created_at;
        this.description = volume.description;
        this.droplet_ids = volume.droplet_ids;
        this.id = volume.id;
        this.name = volume.name;
        this.region = volume.region;
        this.size_gigabytes = volume.size_gigabytes;
    }
    /**
     * Attach volume to droplet.
     * 
     * @param {number} droplet_id 
     * @returns 
     * 
     * @memberOf Volume
     */
    public async attach(droplet_id: number){
        return this.endpoint.attach(this.id, droplet_id);
    }
    /**
     * Create snapshot from volume.
     * 
     * @param {string} name 
     * @returns 
     * 
     * @memberOf Volume
     */
    public async createSnapshot(name: string){
        return this.endpoint.createSnapshot(this.id, name);
    }
    /**
     * Delete volume
     * 
     * @returns 
     * 
     * @memberOf Volume
     */
    public async delete(){
        return this.endpoint.delete(this.id);
    }
    /**
     * Detach volume from droplet.
     * 
     * @param {number} [droplet_id] 
     * @returns 
     * 
     * @memberOf Volume
     */
    public async detach(droplet_id?: number){
        if (!droplet_id) droplet_id = this.droplet_ids[0] || null;
        return this.endpoint.detach(this.id,droplet_id);
    }
    /**
     * Get volume's action.
     * 
     * @param {number} id 
     * @returns 
     * 
     * @memberOf Volume
     */
    public async getActionById(id: number){
        return this.endpoint.getActionById(this.id, id);
    }
    /**
     * List all volume's action.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns 
     * 
     * @memberOf Volume
     */
    public async listActions(page: number, perPage?: number){
        return this.endpoint.listActions(this.id, page, perPage);
    }
    /**
     * List all volume's snapshots.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns 
     * 
     * @memberOf Volume
     */
    public async listSnapshots(page: number, perPage?: number){
        return this.endpoint.listSnapshots(this.id, page, perPage);
    }
}

export default Volume;