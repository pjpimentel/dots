import { Observable } from "rxjs";
import Endpoint from "./common/endpoint";
import { IAction, ICollection, IDroplet, IDropletEndpoint, IDropletSpecs, IImage } from "./common/interfaces";
import DigitalOcean from "./digitalOcean";
export declare type imageType = "snapshots" | "backups";
/**
 * Droplet endpoint
 *
 * @class DropletEndpoint
 * @extends {Endpoint<DigitalOcean>}
 * @implements {IDropletEndpoint}
 */
export default class DropletEndpoint extends Endpoint implements IDropletEndpoint {
    /**
     * Creates an instance of DropletEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof DropletEndpoint
     */
    constructor(digitalOcean: DigitalOcean);
    /**
     * Change droplet's kernel.
     *
     * @param {number} id
     * @param {number} kernelId
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    changeKernel(id: number, kernelId: number): Observable<IAction>;
    /**
     * Create new droplet.
     *
     * @param {IDropletSpecs} specs
     * @returns {Observable<IDroplet>}
     *
     * @memberof DropletEndpoint
     */
    create(specs: IDropletSpecs): Observable<IDroplet>;
    /**
     * Create snapshot from droplet.
     *
     * @param {number} id
     * @param {string} snapshotName
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    createSnapshot(id: number, snapshotName: string): Observable<IAction>;
    /**
     * Delete droplet by Id.
     *
     * @param {number} id
     * @returns {Observable<void>}
     *
     * @memberof DropletEndpoint
     */
    delete(id: number): Observable<void>;
    /**
     * Delete droplet by tag.
     *
     * @param {string} tag
     * @returns {Observable<void>}
     *
     * @memberof DropletEndpoint
     */
    delete(tag: string): Observable<void>;
    /**
     * Disable droplet backups.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    disableBackups(id: number): Observable<IAction>;
    /**
     * Enable droplet backups.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    enableBackups(id: number): Observable<IAction>;
    /**
     * Enable ipv6 networking in one droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    enableIPv6(id: number): Observable<IAction>;
    /**
     * Enable private networking in one droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    enablePrivateNetworking(id: number): Observable<IAction>;
    /**
     * Get droplet by id.
     *
     * @param {number} id
     * @returns {Observable<IDroplet>}
     *
     * @memberof DropletEndpoint
     */
    get(id: number): Observable<IDroplet>;
    /**
     * Get droplet's action.
     *
     * @param {number} dropletId
     * @param {number} actionId
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    getActionById(dropletId: number, actionId: number): Observable<IAction>;
    /**
     * List droplets by tag.
     *
     * @param {string} tag
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IDroplet>>}
     *
     * @memberof DropletEndpoint
     */
    list(tag: string, page: number, perPage?: number): Observable<ICollection<IDroplet>>;
    /**
     * List all droplets.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IDroplet>>}
     *
     * @memberof DropletEndpoint
     */
    list(page: number, perPage?: number): Observable<ICollection<IDroplet>>;
    /**
     * List all droplet's snapshots. [droplet ? snapshot = image]
     *
     * @param {number} id
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IImage>>}
     *
     * @memberof DropletEndpoint
     */
    listImages(id: number, type: imageType, page: number, perPage?: number): Observable<ICollection<IImage>>;
    /**
     * List droplets that are running on the same physical hardware.
     *
     * @returns {Observable<IDroplet[]>}
     *
     * @memberof DropletEndpoint
     */
    listNeighbors(): Observable<IDroplet[]>;
    /**
     * List droplet's neighbors.
     *
     * @param {number} id
     * @returns {Observable<Neighbors>}
     *
     * @memberof DropletEndpoint
     */
    listNeighborsByDropletId(id: number): Observable<IDroplet[]>;
    /**
     * Reset droplet password.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    passwordReset(id: number): Observable<IAction>;
    /**
     * Power cycle droplet [similar to pushing the reset button].
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    powerCycle(id: number): Observable<IAction>;
    /**
     * Power off a droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    powerOff(id: number): Observable<IAction>;
    /**
     * Power on a droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    powerOn(id: number): Observable<IAction>;
    /**
     * Reboot droplet [reboot in a graceful way].
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    reboot(id: number): Observable<IAction>;
    /**
     * Rebuild droplet by image slug.
     *
     * @param {number} id
     * @param {string} imageSlug
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    rebuild(id: number, imageSlug: string): Observable<IAction>;
    /**
     * Rebuild droplet by image id.
     *
     * @param {number} id
     * @param {number} imageId
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    rebuild(id: number, imageId: number): Observable<IAction>;
    /**
     * Rename droplet.
     *
     * @param {number} id
     * @param {string} newName
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    rename(id: number, newName: string): Observable<IAction>;
    /**
     * Resize droplet.
     *
     * @param {number} id
     * @param {string} sizeSlug
     * @param {boolean} [resizeDisk=false]
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    resize(id: number, sizeSlug: string, resizeDisk?: boolean): Observable<IAction>;
    /**
     * Restore droplet by image slug.
     *
     * @param {number} id
     * @param {string} imageSlug
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    restore(id: number, imageSlug: string): Observable<IAction>;
    /**
     * Restore droplet by image id.
     *
     * @param {number} id
     * @param {number} imageId
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    restore(id: number, imageId: number): Observable<IAction>;
    /**
     * Shutdown a droplet [shutdown in a graceful way].
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    shutdown(id: number): Observable<IAction>;
}
