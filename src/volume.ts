import { Observable } from 'rxjs';

import Endpoint from './common/endpoint';
import { IAction, ICollection, ISnapshot, IVolume, IVolumeEndpoint, IVolumeSpecs } from './common/interfaces';
import { isAction, isSnapshot, isVolume } from './common/type.guards';
import DigitalOcean from './digitalOcean';

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
        super(digitalOcean, '/volumes');
    }
    /**
     * Attach volume to droplet by volume id.
     *
     * @param {string} id
     * @param {number} dropletId
     *
     * @memberof VolumeEndpoint
     */
    attach(id: string, dropletId: number): Observable<IAction>;
    /**
     * Attach volume to droplet by volume name.
     *
     * @param {string} name
     * @param {number} dropletId
     * @param {string} region
     *
     * @memberof VolumeEndpoint
     */
    attach(name: string, dropletId: number, region: string): Observable<IAction>;
    attach(a: string, b: number, c?: string): Observable<IAction> {
        return this.attachOrDetach('attach', a, b, c);
    }
    /**
     * Create new volume.
     *
     * @param {IVolumeSpecs} specs
     * @returns {Observable<IVolume>}
     *
     * @memberof VolumeEndpoint
     */
    create(specs: IVolumeSpecs): Observable<IVolume> {
        const url = this.prefix;
        if (specs.snapshot_id) specs.region = undefined;
        else if (!specs.region) throw new Error('Missing volume region.');
        const promise = this.api.post(url, specs);
        return this.fromPromise(promise, 'volume', isVolume);
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
    createSnapshot(id: string, snapshotName: string): Observable<ISnapshot> {
        const url = `${this.prefix}/${id}/snapshots`;
        const params = {} as any;
        if (snapshotName) params.name = snapshotName;
        const promise = this.api.post(url, params);
        return this.fromPromise(promise, 'snapshot', isSnapshot);
    }
    /**
     * Delete volume by id.
     *
     * @param {string} id
     * @returns {Observable<void>}
     * @memberof VolumeEndpoint
     */
    delete(id: string): Observable<void>;
    /**
     * Delete volume by name.
     *
     * @param {string} name
     * @param {string} region
     * @returns {Observable<void>}
     * @memberof VolumeEndpoint
     */
    delete(name: string, region: string): Observable<void>;
    delete(name: string, region?: string): Observable<void> {
        let id = null;
        let url = this.prefix;
        const params = {} as any;
        if (!region) {
            id = name;
            url = `${this.prefix}/${id}`;
        } else {
            params.name = name;
            params.region = region;
        }
        const promise = this.api.delete(url, { params });
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
    detach(id: string, dropletId: number): Observable<IAction>;
    /**
     * Detach volume to droplet by volume name.
     *
     * @param {string} name
     * @param {number} dropletId
     * @param {string} region
     * @returns {Observable<IAction>}
     * @memberof VolumeEndpoint
     */
    detach(name: string, dropletId: number, region: string): Observable<IAction>;
    detach(a: string, b: number, c?: string): Observable<IAction> {
        return this.attachOrDetach('detach', a, b, c);
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
    getActionById(volumeId: string, actionId: number): Observable<IAction> {
        const url = `${this.prefix}/${volumeId}/actions/${actionId}`;
        const promise = this.api.get(url);
        return this.fromPromise(promise, 'action', isAction);
    }
    /**
     * Get volume by id.
     *
     * @param {string} id
     * @returns {Observable<IVolume>}
     *
     * @memberof VolumeEndpoint
     */
    get(id: string): Observable<IVolume> {
        const url = `${this.prefix}/${id}`;
        const promise = this.api.get(url);
        return this.fromPromise(promise, 'volume', isVolume);
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
    list(page: number, perPage?: number): Observable<ICollection<IVolume>> {
        const url: string = this.prefix;
        return this.getCollection<IVolume>(page, perPage, url, 'volumes', isVolume);
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
    listActions(volumeId: string, page: number, perPage?: number): Observable<ICollection<IAction>> {
        const url = `${this.prefix}/${volumeId}/actions`;
        return this.getCollection<IAction>(page, perPage, url, 'actions', isAction);
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
    listByName(name: string, region: string, page: number, perPage?: number): Observable<ICollection<IVolume>> {
        const url = `${this.prefix}?name=${name}&region=${region}`;
        return this.getCollection<IVolume>(page, perPage, url, 'volumes', isVolume);
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
    listSnapshots(volumeId: string, page: number, perPage?: number): Observable<ICollection<ISnapshot>> {
        const url = `${this.prefix}/${volumeId}/snapshots`;
        return this.getCollection<ISnapshot>(page, perPage, url, 'snapshots', isSnapshot);
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
    resize(id: string, size: number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: 'resize', size_gigabytes: size };
        const promise = this.api.post(url, params);
        return this.fromPromise(promise, 'action', isAction);
    }
    /**
     * Generic fn to atach or detach
     *
     * @private
     * @param {('detach'|'attach')} type
     * @param {string} a
     * @param {number} b
     * @param {string} [c]
     * @returns {Observable<IAction>}
     * @memberof VolumeEndpoint
     */
    private attachOrDetach(
        type: 'detach'|'attach',
        a: string,
        b: number,
        c?: string,
    ): Observable<IAction> {
        const dropletId = b;
        let volumeId = null;
        let volumeName = null;
        let region = null;
        let url: string = null;
        const params: any = {};
        if (c) {
            volumeName = a;
            region = c;
        } else {
            volumeId = a;
        }
        url = `${this.prefix}/${volumeId}/actions`;
        params.type = type;
        params.droplet_id = dropletId;
        if (!volumeId) {
            url = `${this.prefix}/actions`;
            params.volume_name = volumeName;
            params.region = region;
        }
        const promise = this.api.post(url, params);
        return this.fromPromise(promise, 'action', isAction);
    }
}
