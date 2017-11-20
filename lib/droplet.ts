import { Observable } from "rxjs";

import Endpoint from "./common/endpoint";
import { IAction, ICollection, IDroplet, IDropletEndpoint, IDropletSpecs, IImage } from "./common/interfaces";
import { isAction, isArrayOfDroplet, isDroplet, isImage } from "./common/type.guards";
import DigitalOcean from "./digitalOcean";

export type imageType = "snapshots" | "backups";
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
        super(digitalOcean, "/droplets");
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
    public changeKernel(id: number, kernelId: number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "change_kernel", kernel: kernelId };
        return this.doAction(url, params);
    }
    /**
     * Create new droplet.
     *
     * @param {IDropletSpecs} specs
     * @returns {Observable<IDroplet>}
     *
     * @memberof DropletEndpoint
     */
    public create(specs: IDropletSpecs): Observable<IDroplet> {
        const url = this.prefix;
        const promise = this.api.post(url, specs);
        return this.fromPromise(promise, "droplet", isDroplet);
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
    public createSnapshot(id: number, snapshotName: string): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "snapshot", name: snapshotName };
        return this.doAction(url, params);
    }
    /**
     * Delete droplet by Id.
     *
     * @param {number} id
     * @returns {Observable<void>}
     *
     * @memberof DropletEndpoint
     */
    public delete(id: number): Observable<void>;
    /**
     * Delete droplet by tag.
     *
     * @param {string} tag
     * @returns {Observable<void>}
     *
     * @memberof DropletEndpoint
     */
    // tslint:disable-next-line:unified-signatures
    public delete(tag: string): Observable<void>;
    public delete(param: string | number): Observable<void> {
        const params = {} as any;
        let url = this.prefix;
        if (typeof param === "number") url += `/${param}`;
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
    public disableBackups(id: number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "disable_backups" } as any;
        return this.doAction(url, params);
    }
    /**
     * Enable droplet backups.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    public enableBackups(id: number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "enable_backups" } as any;
        return this.doAction(url, params);
    }
    /**
     * Enable ipv6 networking in one droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    public enableIPv6(id: number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "enable_ipv6" } as any;
        return this.doAction(url, params);
    }
    /**
     * Enable private networking in one droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    public enablePrivateNetworking(id: number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "enable_private_networking" } as any;
        return this.doAction(url, params);
    }
    /**
     * Get droplet by id.
     *
     * @param {number} id
     * @returns {Observable<IDroplet>}
     *
     * @memberof DropletEndpoint
     */
    public get(id: number): Observable<IDroplet> {
        const url = `${this.prefix}/${id}`;
        const promise = this.api.get(url);
        return this.fromPromise(promise, "droplet", isDroplet);
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
    public getActionById(dropletId: number, actionId: number): Observable<IAction> {
        const url = `${this.prefix}/${dropletId}/actions/${actionId}`;
        const promise = this.api.get(url);
        return this.fromPromise(promise, "action", isAction);
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
    public list(tag: string, page: number, perPage?: number): Observable<ICollection<IDroplet>>;
    /**
     * List all droplets.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IDroplet>>}
     *
     * @memberof DropletEndpoint
     */
    public list(page: number, perPage?: number): Observable<ICollection<IDroplet>>;
    public list(a: string | number, b: number, c?: number): Observable<ICollection<IDroplet>> {
        let tag: string = null;
        let page: number = null;
        let perPage: number = null;
        // tslint:disable-next-line:no-unused-expression
        if (typeof a === "string") ((tag = a) && (page = b) && (perPage = c));
        // tslint:disable-next-line:no-unused-expression
        else ((page = a) && (perPage = b));
        let url: string = this.prefix;
        if (tag) url = `${url}?tag_name=${tag}`;
        return this.getCollection<IDroplet>(page, perPage, url, "droplets");
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
    public listImages(id: number, type: imageType, page: number, perPage?: number): Observable<ICollection<IImage>> {
        const url: string = `${this.prefix}/${id}/${type}`;
        return this.getCollection<IImage>(page, perPage, url, type, isImage);
    }
    /**
     * List droplets that are running on the same physical hardware.
     *
     * @returns {Observable<IDroplet[]>}
     *
     * @memberof DropletEndpoint
     */
    public listNeighbors(): Observable<IDroplet[]> {
        const url = `reports/droplet_neighbors`;
        const promise = this.api.get(url);
        return this.fromPromise(promise, "neighbors");
    }
    /**
     * List droplet's neighbors.
     *
     * @param {number} id
     * @returns {Observable<Neighbors>}
     *
     * @memberof DropletEndpoint
     */
    public listNeighborsByDropletId(id: number): Observable<IDroplet[]> {
        const url = `${this.prefix}/${id}/neighbors`;
        const promise = this.api.get(url);
        return this.fromPromise(promise, "droplets", isArrayOfDroplet);
    }
    /**
     * Reset droplet password.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    public passwordReset(id: number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "password_reset" } as any;
        return this.doAction(url, params);
    }
    /**
     * Power cycle droplet [similar to pushing the reset button].
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    public powerCycle(id: number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "power_cycle" } as any;
        return this.doAction(url, params);
    }
    /**
     * Power off a droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    public powerOff(id: number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "power_off" } as any;
        return this.doAction(url, params);
    }
    /**
     * Power on a droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    public powerOn(id: number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "power_on" } as any;
        return this.doAction(url, params);
    }
    /**
     * Reboot droplet [reboot in a graceful way].
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    public reboot(id: number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "reboot" } as any;
        return this.doAction(url, params);
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
    public rebuild(id: number, imageSlug: string): Observable<IAction>;
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
    public rebuild(id: number, imageId: number): Observable<IAction>;
    public rebuild(id: number, b: string | number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "rebuild", image: b } as any;
        return this.doAction(url, params);
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
    public rename(id: number, newName: string): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "rename", name: newName } as any;
        return this.doAction(url, params);
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
    public resize(id: number, sizeSlug: string, resizeDisk: boolean = false): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "resize", disk: resizeDisk, size: sizeSlug } as any;
        return this.doAction(url, params);
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
    public restore(id: number, imageSlug: string): Observable<IAction>;
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
    public restore(id: number, imageId: number): Observable<IAction>;
    public restore(id: number, b: string | number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "restore", image: b } as any;
        return this.doAction(url, params);
    }
    /**
     * Shutdown a droplet [shutdown in a graceful way].
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    public shutdown(id: number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: "shutdown" } as any;
        return this.doAction(url, params);
    }
}
