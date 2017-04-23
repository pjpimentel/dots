'use strict';
import { IVolume, IVolumeEndpoint, IVolumeSpecs } from './interfaces';
import Volume from './volume';
import DigitalOcean from '../digitalOcean';
import Endpoint from '../common/endpoint';
import Action from '../action/action'
import Snapshot from "../snapshot/snapshot";
import { ISnapshot } from "../snapshot/interfaces";
import { IAction } from "../action/interfaces";
import { ICollection } from "../common/interfaces";
/**
 * Volume endpoint.
 * 
 * @class VolumeEndpoint
 * @extends {Endpoint}
 * @implements {IVolumeEndpoint}
 */
class VolumeEndpoint extends Endpoint implements IVolumeEndpoint {
    /**
     * Creates an instance of VolumeEndpoint.
     * @param {DigitalOcean} digitalOcean 
     * 
     * @memberOf VolumeEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/volumes');
    }
    /**
     * Attach volume to droplet by volume id.
     * 
     * @param {string} id 
     * @param {number} dropletId 
     * 
     * @memberOf VolumeEndpoint
     */
    public async attach(id: string, dropletId: number);
    /**
     * Attach volume to droplet by volume name.
     * 
     * @param {string} name 
     * @param {number} dropletId 
     * @param {string} region 
     * 
     * @memberOf VolumeEndpoint
     */
    public async attach(name: string, dropletId: number, region: string);
    public async attach(a: string, b: number, c?: string): Promise<Action> {
        let dropletId = b;
        let volumeId = null, volumeName = null, region = null;
        let url: string = null, params: any = {};
        if (c) ((volumeName = a) && (region = c));
        else volumeId = a;
        url = [this.prefix, volumeId, 'actions'].join('/');
        params.type = 'attach';
        params.droplet_id = dropletId;
        if (!volumeId) {
            url = [this.prefix, 'actions'].join('/');
            params.volume_name = volumeName;
            params.region = region;
        }
        let res = await this.api.post(url, params);
        if (!res.data) throw this.api.invalidResponse;
        let action: IAction = <IAction>res.data.action;
        return new Action(this.api.Action, action);
    }
    /**
     * Create new volume.
     * 
     * @param {IVolumeSpecs} specs 
     * @returns {Promise<Volume>} 
     * 
     * @memberOf VolumeEndpoint
     */
    public async create(specs: IVolumeSpecs): Promise<Volume> {
        let url = this.prefix;
        if (specs.snapshot_id) specs.region = undefined;
        else if (!specs.region) throw new Error('Missing volume region.');
        let res = await this.api.post(url, specs);
        if (!res.data) throw this.api.invalidResponse;
        let volume: IVolume = <IVolume>res.data.volume;
        return new Volume(this, volume);
    }
    /**
     * Create new Snapshot from volume.
     * 
     * @param {string} id 
     * @param {string} snapshotName 
     * @returns {Promise<Snapshot>} 
     * 
     * @memberOf VolumeEndpoint
     */
    public async createSnapshot(
        id: string,
        snapshotName: string
    ): Promise<Snapshot> {
        let url = [this.prefix, id, 'snapshots'].join('/');
        let params = <any>{};
        if (snapshotName) params.name = snapshotName;
        let res = await this.api.post(url, params);
        if (!res.data) throw this.api.invalidResponse;
        let snapshot: ISnapshot = <ISnapshot>res.data.snapshot;
        return new Snapshot(this.api.Snapshot, snapshot);
    }
    /**
     * Delete volume by id.
     * 
     * @param {string} id 
     * 
     * @memberOf VolumeEndpoint
     */
    public async delete(id: string);
    /**
     * Delete volume by name.
     * 
     * @param {string} name 
     * @param {string} region 
     * 
     * @memberOf VolumeEndpoint
     */
    public async delete(name: string, region: string);
    public async delete(name: string, region?: string): Promise<void> {
        let id = null;
        let url = this.prefix;
        let params = <any>{};
        if (!region) ((id = name) && (url = [this.prefix, id].join('/')));
        else ((params.name = name) && (params.region = region));
        await this.api.delete(url, { params: params });
        return
    }
    /**
     * Detach volume to droplet by volume id.
     * 
     * @param {string} id 
     * @param {number} dropletId 
     * 
     * @memberOf VolumeEndpoint
     */
    public async detach(id: string, dropletId: number);
    /**
     * Detach volume to droplet by volume name.
     * 
     * @param {string} name 
     * @param {number} dropletId 
     * @param {string} region 
     * 
     * @memberOf VolumeEndpoint
     */
    public async detach(name: string, dropletId: number, region: string);
    public async detach(a: string, b: number, c?: string): Promise<Action> {
        let dropletId = b;
        let volumeId = null, volumeName = null, region = null;
        let url: string = null, params: any = {};
        if (c) ((volumeName = a) && (region = c));
        else volumeId = a;
        url = [this.prefix, volumeId, 'actions'].join('/');
        params.type = 'detach';
        params.droplet_id = dropletId;
        if (!volumeId) {
            url = [this.prefix, 'actions'].join('/');
            params.volume_name = volumeName;
            params.region = region;
        }
        let res = await this.api.post(url, params);
        if (!res.data) throw this.api.invalidResponse;
        let action: IAction = <IAction>res.data.action;
        return new Action(this.api.Action, action);
    }
    /**
     * Get volume's action by id.
     * 
     * @param {string} volumeId 
     * @param {number} actionId 
     * @returns {Promise<Action>} 
     * 
     * @memberOf VolumeEndpoint
     */
    public async getActionById(
        volumeId: string,
        actionId: number
    ): Promise<Action> {
        let url = [this.prefix, volumeId, 'actions', actionId].join('/');
        let res = await this.api.get(url);
        if (!res.data) throw this.api.invalidResponse;
        let action: IAction = <IAction>res.data.action;
        return new Action(this.api.Action, action);
    }
    /**
     * Get volume by id.
     * 
     * @param {string} id 
     * @returns {Promise<Volume>} 
     * 
     * @memberOf VolumeEndpoint
     */
    public async get(id: string): Promise<Volume> {
        let url = [this.prefix, id].join('/');
        let res = await this.api.get(url);
        if (!res.data) throw this.api.invalidResponse;
        let volume: IVolume = <IVolume>res.data.volume;
        return new Volume(this, volume);
    }
    /**
     * List all volumes.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Volume>>} 
     * 
     * @memberOf VolumeEndpoint
     */
    public async list(
        page: number,
        perPage?: number
    ): Promise<ICollection<Volume>> {
        let collection: ICollection<IVolume> | ICollection<Volume>;
        let url: string = this.prefix;
        collection = await this.getCollection<IVolume>(
            page,
            perPage,
            url,
            'volumes'
        );
        collection = this.upcastCollection<IVolume, Volume>(collection, Volume);
        return <ICollection<Volume>>collection;
    }
    /**
     * List all volumes's actions.
     * 
     * @param {string} volumeId 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Action>>} 
     * 
     * @memberOf VolumeEndpoint
     */
    public async listActions(
        volumeId: string,
        page: number,
        perPage?: number
    ): Promise<ICollection<Action>> {
        let collection: ICollection<IAction> | ICollection<Action>;
        let url: string = [this.prefix, volumeId, 'actions'].join('/');
        collection = await this.getCollection<IAction>(
            page,
            perPage,
            url,
            'actions'
        );
        collection = this.upcastCollection<IAction, Action>(collection, Action);
        return <ICollection<Action>>collection;
    }
    /**
     * List all volumes by name.
     * 
     * @param {string} name 
     * @param {string} region 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Volume>>} 
     * 
     * @memberOf VolumeEndpoint
     */
    public async listByName(
        name: string,
        region: string,
        page: number,
        perPage?: number
    ): Promise<ICollection<Volume>> {
        let collection: ICollection<IVolume> | ICollection<Volume>;
        let url: string = this.prefix;
        url = [
            url,
            [
                ['name', name].join('='),
                ['region', region].join('=')
            ].join('&')
        ].join('?');
        collection = await this.getCollection<IVolume>(
            page,
            perPage,
            url,
            'volumes'
        );
        collection = this.upcastCollection<IVolume, Volume>(collection, Volume);
        return <ICollection<Volume>>collection;
    }
    /**
     * List all volumes's snapshots.
     * 
     * @param {string} volumeId 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Snapshot>>} 
     * 
     * @memberOf VolumeEndpoint
     */
    public async listSnapshots(
        volumeId: string,
        page: number,
        perPage?: number
    ): Promise<ICollection<Snapshot>> {
        let collection: ICollection<ISnapshot> | ICollection<Snapshot>;
        let url: string = [this.prefix, volumeId, 'snapshots'].join('/');
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
    /**
     * Resize volume.
     * 
     * @param {string} id 
     * @param {number} size 
     * @returns {Promise<Action>} 
     * 
     * @memberOf VolumeEndpoint
     */
    public async resize(id: string, size: number): Promise<Action> {
        let url: string = [this.prefix, id, 'actions'].join('/');
        let params = { type: 'resize', size_gigabytes: size };
        let res = await this.api.post(url, params);
        if (!res.data) throw this.api.invalidResponse;
        let action: IAction = <IAction>res.data.action;
        return new Action(this.api.Action, action);
    }
}
export default VolumeEndpoint;