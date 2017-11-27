import { Observable } from "rxjs/Observable";

import Endpoint from "./common/endpoint";
import { IAction, ICollection, ISnapshot, IVolume, IVolumeEndpoint, IVolumeSpecs } from "./common/interfaces";
import { isAction, isSnapshot, isVolume } from "./common/type.guards";
import DigitalOcean from "./digitalOcean";

/**
 * Volume endpoint.
 *
 * @class VolumeEndpoint
 * @extends {Endpoint}
 * @implements {IVolumeEndpoint}
 */
export default class VolumeEndpoint extends Endpoint implements IVolumeEndpoint {
    /**
     * Creates an instance of VolumeEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof VolumeEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, "/volumes");
    }
    /**
     * Attach volume to droplet by volume id.
     *
     * @param {string} id
     * @param {number} dropletId
     *
     * @memberof VolumeEndpoint
     */
    public attach(id: string, dropletId: number): Observable<IAction>;
    /**
     * Attach volume to droplet by volume name.
     *
     * @param {string} name
     * @param {number} dropletId
     * @param {string} region
     *
     * @memberof VolumeEndpoint
     */
    public attach(name: string, dropletId: number, region: string): Observable<IAction>;
    public attach(a: string, b: number, c?: string): Observable<IAction> {
        let dropletId = b;
        let volumeId = null, volumeName = null, region = null;
        let url: string = null, params: any = {};
        if (c) ((volumeName = a) && (region = c));
        else volumeId = a;
        url = `${this.prefix}/${volumeId}/actions`;
        params.type = "attach";
        params.droplet_id = dropletId;
        if (!volumeId) {
            url = `${this.prefix}/actions`;
            params.volume_name = volumeName;
            params.region = region;
        }
        let promise = this.api.post(url, params);
        return this.fromPromise(promise, "action", isAction);
    }
    /**
     * Create new volume.
     *
     * @param {IVolumeSpecs} specs
     * @returns {Observable<IVolume>}
     *
     * @memberof VolumeEndpoint
     */
    public create(specs: IVolumeSpecs): Observable<IVolume> {
        let url = this.prefix;
        if (specs.snapshot_id) specs.region = undefined;
        else if (!specs.region) throw new Error("Missing volume region.");
        let promise = this.api.post(url, specs)
        return this.fromPromise(promise, "volume", isVolume);
    }
    /**
     * Create new Snapshot from volume.
     *
     * @param {string} id
     * @param {string} snapshotName
     * @returns {Observable<ISnapshot>}
     *
     * @memberof VolumeEndpoint
     */
    public createSnapshot(id: string, snapshotName: string): Observable<ISnapshot> {
        let url = `${this.prefix}/${id}/snapshots`
        let params = <any>{};
        if (snapshotName) params.name = snapshotName;
        let promise = this.api.post(url, params);
        return this.fromPromise(promise, "snapshot", isSnapshot);
    }
    /**
     * Delete volume by id.
     *
     * @param {string} id
     * @returns {Observable<void>}
     * @memberof VolumeEndpoint
     */
    public delete(id: string): Observable<void>;
    /**
     * Delete volume by name.
     *
     * @param {string} name
     * @param {string} region
     * @returns {Observable<void>}
     * @memberof VolumeEndpoint
     */
    public delete(name: string, region: string): Observable<void>;
    public delete(name: string, region?: string): Observable<void> {
        let id = null;
        let url = this.prefix;
        let params = <any>{};
        if (!region) ((id = name) && (url = `${this.prefix}/${id}`));
        else ((params.name = name) && (params.region = region));
        let promise = this.api.delete(url, { params: params });
        return this.fromPromise(promise);
    }
    /**
     * Detach volume to droplet by volume id.
     *
     * @param {string} id
     * @param {number} dropletId
     * @returns {Observable<IAction>}
     * @memberof VolumeEndpoint
     */
    public detach(id: string, dropletId: number): Observable<IAction>;
    /**
     * Detach volume to droplet by volume name.
     *
     * @param {string} name
     * @param {number} dropletId
     * @param {string} region
     * @returns {Observable<IAction>}
     * @memberof VolumeEndpoint
     */
    public detach(name: string, dropletId: number, region: string): Observable<IAction>;
    public detach(a: string, b: number, c?: string): Observable<IAction> {
        let dropletId = b, volumeId = null, volumeName = null, region = null, url: string = null, params: any = {};
        if (c) ((volumeName = a) && (region = c));
        else volumeId = a;
        url = `${this.prefix}/${volumeId}/actions`;
        params.type = "detach";
        params.droplet_id = dropletId;
        if (!volumeId) {
            url = `${this.prefix}/actions`;
            params.volume_name = volumeName;
            params.region = region;
        }
        let promise = this.api.post(url, params);
        return this.fromPromise(promise, "action", isAction);
    }
    /**
     * Get volume's action by id.
     *
     * @param {string} volumeId
     * @param {number} actionId
     * @returns {Observable<IAction>}
     *
     * @memberof VolumeEndpoint
     */
    public getActionById(volumeId: string, actionId: number): Observable<IAction> {
        let url: string = `${this.prefix}/${volumeId}/actions/${actionId}`;
        let promise = this.api.get(url);
        return this.fromPromise(promise, "action", isAction);
    }
    /**
     * Get volume by id.
     *
     * @param {string} id
     * @returns {Observable<IVolume>}
     *
     * @memberof VolumeEndpoint
     */
    public get(id: string): Observable<IVolume> {
        let url: string = `${this.prefix}/${id}`;
        let promise = this.api.get(url);
        return this.fromPromise(promise, "volume", isVolume);
    }
    /**
     * List all volumes.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IVolume>>}
     *
     * @memberof VolumeEndpoint
     */
    public list(page: number, perPage?: number): Observable<ICollection<IVolume>> {
        let url: string = this.prefix;
        return this.getCollection<IVolume>(page, perPage, url, "volumes", isVolume);
    }
    /**
     * List all volumes's actions.
     *
     * @param {string} volumeId
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IAction>>}
     *
     * @memberof VolumeEndpoint
     */
    public listActions(volumeId: string, page: number, perPage?: number): Observable<ICollection<IAction>> {
        let url: string = `${this.prefix}/${volumeId}/actions`;
        return this.getCollection<IAction>(page, perPage, url, "actions", isAction);
    }
    /**
     * List all volumes by name.
     *
     * @param {string} name
     * @param {string} region
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IVolume>>}
     *
     * @memberof VolumeEndpoint
     */
    public listByName(name: string, region: string, page: number, perPage?: number): Observable<ICollection<IVolume>> {
        let url: string = `${this.prefix}?name=${name}&region=${region}`;
        return this.getCollection<IVolume>(page, perPage, url, "volumes", isVolume);
    }
    /**
     * List all volumes's snapshots.
     *
     * @param {string} volumeId
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<ISnapshot>>}
     *
     * @memberof VolumeEndpoint
     */
    public listSnapshots(volumeId: string, page: number, perPage?: number): Observable<ICollection<ISnapshot>> {
        let url: string = `${this.prefix}/${volumeId}/snapshots`;
        return this.getCollection<ISnapshot>(page, perPage, url, "snapshots", isSnapshot);
    }
    /**
     * Resize volume.
     *
     * @param {string} id
     * @param {number} size
     * @returns {Observable<IAction>}
     *
     * @memberof VolumeEndpoint
     */
    public resize(id: string, size: number): Observable<IAction> {
        let url: string = `${this.prefix}/${id}/actions`;
        let params = { type: "resize", size_gigabytes: size };
        let promise = this.api.post(url, params);
        return this.fromPromise(promise, "action", isAction);
    }
}