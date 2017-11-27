import { Observable } from "rxjs/Observable";
import Endpoint from "./common/endpoint";
import { IAction, ICollection, ISnapshot, IVolume, IVolumeEndpoint, IVolumeSpecs } from "./common/interfaces";
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
    constructor(digitalOcean: DigitalOcean);
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
    /**
     * Create new volume.
     *
     * @param {IVolumeSpecs} specs
     * @returns {Observable<IVolume>}
     *
     * @memberof VolumeEndpoint
     */
    create(specs: IVolumeSpecs): Observable<IVolume>;
    /**
     * Create new Snapshot from volume.
     *
     * @param {string} id
     * @param {string} snapshotName
     * @returns {Observable<ISnapshot>}
     *
     * @memberof VolumeEndpoint
     */
    createSnapshot(id: string, snapshotName: string): Observable<ISnapshot>;
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
    /**
     * Get volume's action by id.
     *
     * @param {string} volumeId
     * @param {number} actionId
     * @returns {Observable<IAction>}
     *
     * @memberof VolumeEndpoint
     */
    getActionById(volumeId: string, actionId: number): Observable<IAction>;
    /**
     * Get volume by id.
     *
     * @param {string} id
     * @returns {Observable<IVolume>}
     *
     * @memberof VolumeEndpoint
     */
    get(id: string): Observable<IVolume>;
    /**
     * List all volumes.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IVolume>>}
     *
     * @memberof VolumeEndpoint
     */
    list(page: number, perPage?: number): Observable<ICollection<IVolume>>;
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
    listActions(volumeId: string, page: number, perPage?: number): Observable<ICollection<IAction>>;
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
    listByName(name: string, region: string, page: number, perPage?: number): Observable<ICollection<IVolume>>;
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
    listSnapshots(volumeId: string, page: number, perPage?: number): Observable<ICollection<ISnapshot>>;
    /**
     * Resize volume.
     *
     * @param {string} id
     * @param {number} size
     * @returns {Observable<IAction>}
     *
     * @memberof VolumeEndpoint
     */
    resize(id: string, size: number): Observable<IAction>;
}
