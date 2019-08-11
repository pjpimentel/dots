import { Observable } from 'rxjs';

import Endpoint from './common/endpoint';
import { IAction, ICollection, IDroplet, IDropletEndpoint, IDropletSpecs, IImage } from './common/interfaces';
import { isAction, isArrayOfDroplet, isDroplet, isImage } from './common/type.guards';
import DigitalOcean from './digitalOcean';

export type imageType = 'snapshots' | 'backups';
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
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/droplets');
    }
    /**
     * Change droplet's kernel.
     *
     * @param {number} id
     * @param {number} kernelId
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    changeKernel(id: number, kernelId: number): Observable<IAction> {
        const params = { type: 'change_kernel', kernel: kernelId };
        return this.doDropletAction(id, params);
    }
    /**
     * Create new droplet.
     *
     * @param {IDropletSpecs} specs
     * @returns {Observable<IDroplet>}
     *
     * @memberof DropletEndpoint
     */
    create(specs: IDropletSpecs): Observable<IDroplet> {
        const url = this.prefix;
        const promise = this.api.post(url, specs);
        return this.fromPromise(promise, 'droplet', isDroplet);
    }
    /**
     * Create snapshot from droplet.
     *
     * @param {number} id
     * @param {string} snapshotName
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    createSnapshot(id: number, snapshotName: string): Observable<IAction> {
        const params = { type: 'snapshot', name: snapshotName };
        return this.doDropletAction(id, params);
    }
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
    // tslint:disable-next-line:unified-signatures
    delete(tag: string): Observable<void>;
    delete(param: string | number): Observable<void> {
        const params = {} as any;
        let url = this.prefix;
        if (typeof param === 'number') url += `/${param}`;
        else params.tag_name = param;
        const promise = this.api.delete(url, { params });
        return this.fromPromise(promise);
    }
    /**
     * Disable droplet backups.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    disableBackups(id: number): Observable<IAction> {
        return this.doDropletAction(id, { type: 'disable_backups' });
    }
    /**
     * Enable droplet backups.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    enableBackups(id: number): Observable<IAction> {
        return this.doDropletAction(id, { type: 'enable_backups' });
    }
    /**
     * Enable ipv6 networking in one droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    enableIPv6(id: number): Observable<IAction> {
        return this.doDropletAction(id, { type: 'enable_ipv6' });
    }
    /**
     * Enable private networking in one droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    enablePrivateNetworking(id: number): Observable<IAction> {
        return this.doDropletAction(id, { type: 'enable_private_networking' });
    }
    /**
     * Get droplet by id.
     *
     * @param {number} id
     * @returns {Observable<IDroplet>}
     *
     * @memberof DropletEndpoint
     */
    get(id: number): Observable<IDroplet> {
        const url = `${this.prefix}/${id}`;
        const promise = this.api.get(url);
        return this.fromPromise(promise, 'droplet', isDroplet);
    }
    /**
     * Get droplet's action.
     *
     * @param {number} dropletId
     * @param {number} actionId
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    getActionById(dropletId: number, actionId: number): Observable<IAction> {
        const url = `${this.prefix}/${dropletId}/actions/${actionId}`;
        const promise = this.api.get(url);
        return this.fromPromise(promise, 'action', isAction);
    }
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
    list(a: string | number, b: number, c?: number): Observable<ICollection<IDroplet>> {
        let tag: string = null;
        let page: number = null;
        let perPage: number = null;
        // tslint:disable-next-line:no-unused-expression
        if (typeof a === 'string') ((tag = a) && (page = b) && (perPage = c));
        // tslint:disable-next-line:no-unused-expression
        else ((page = a) && (perPage = b));
        let url: string = this.prefix;
        if (tag) url = `${url}?tag_name=${tag}`;
        return this.getCollection<IDroplet>(page, perPage, url, 'droplets');
    }
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
    listImages(id: number, type: imageType, page: number, perPage?: number): Observable<ICollection<IImage>> {
        const url = `${this.prefix}/${id}/${type}`;
        return this.getCollection<IImage>(page, perPage, url, type, isImage);
    }
    /**
     * List droplets that are running on the same physical hardware.
     *
     * @returns {Observable<IDroplet[]>}
     *
     * @memberof DropletEndpoint
     */
    listNeighbors(): Observable<IDroplet[]> {
        const url = 'reports/droplet_neighbors';
        const promise = this.api.get(url);
        return this.fromPromise(promise, 'neighbors');
    }
    /**
     * List droplet's neighbors.
     *
     * @param {number} id
     * @returns {Observable<Neighbors>}
     *
     * @memberof DropletEndpoint
     */
    listNeighborsByDropletId(id: number): Observable<IDroplet[]> {
        const url = `${this.prefix}/${id}/neighbors`;
        const promise = this.api.get(url);
        return this.fromPromise(promise, 'droplets', isArrayOfDroplet);
    }
    /**
     * Reset droplet password.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    passwordReset(id: number): Observable<IAction> {
        return this.doDropletAction(id, {type: 'password_reset'});
    }
    /**
     * Power cycle droplet [similar to pushing the reset button].
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    powerCycle(id: number): Observable<IAction> {
        return this.doDropletAction(id, {type: 'power_cycle'});
    }
    /**
     * Power off a droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    powerOff(id: number): Observable<IAction> {
        return this.doDropletAction(id, {type: 'power_off'});
    }
    /**
     * Power on a droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    powerOn(id: number): Observable<IAction> {
        return this.doDropletAction(id, {type: 'power_on'});
    }
    /**
     * Reboot droplet [reboot in a graceful way].
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    reboot(id: number): Observable<IAction> {
        return this.doDropletAction(id, {type: 'reboot'});
    }
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
    // tslint:disable-next-line:unified-signatures
    rebuild(id: number, imageId: number): Observable<IAction>;
    rebuild(id: number, b: string | number): Observable<IAction> {
        const params = { type: 'rebuild', image: b };
        return this.doDropletAction(id, params);
    }
    /**
     * Rename droplet.
     *
     * @param {number} id
     * @param {string} newName
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    rename(id: number, newName: string): Observable<IAction> {
        const params = { type: 'rename', name: newName };
        return this.doDropletAction(id, params);
    }
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
    resize(id: number, sizeSlug: string, resizeDisk = false): Observable<IAction> {
        const params = { type: 'resize', disk: resizeDisk, size: sizeSlug };
        return this.doDropletAction(id, params);
    }
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
    // tslint:disable-next-line:unified-signatures
    restore(id: number, imageId: number): Observable<IAction>;
    restore(id: number, b: string | number): Observable<IAction> {
        const params = { type: 'restore', image: b };
        return this.doDropletAction(id, params);
    }
    /**
     * Shutdown a droplet [shutdown in a graceful way].
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    shutdown(id: number): Observable<IAction> {
        return this.doDropletAction(id, {type: 'shutdown'});
    }
    /**
     * Execute droplet action
     *
     * @private
     * @param {number} id
     * @param {string} type
     * @returns {Observable<IAction>}
     * @memberof DropletEndpoint
     */
    private doDropletAction(id: number, params: object): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        return this.doAction(url, params);
    }
}
