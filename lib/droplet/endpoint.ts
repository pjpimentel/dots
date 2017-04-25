'use strict';
import { IDroplet, IDropletEndpoint } from './interfaces';
import Image from '../image/image';
import { IImage } from '../image/interfaces';
import Droplet from './droplet';
import DigitalOcean from '../digitalOcean';
import Endpoint from '../common/endpoint';
import { ICollection } from '../common/interfaces';
import { IAction } from "../action/interfaces";
import Action from "../action/action";
/**
 * Droplet endpoint
 * 
 * @class DropletEndpoint
 * @extends {Endpoint<DigitalOcean>}
 * @implements {IDropletEndpoint}
 */
class DropletEndpoint extends Endpoint implements IDropletEndpoint {
    /**
     * Creates an instance of DropletEndpoint.
     * @param {DigitalOcean} digitalOcean 
     * 
     * @memberOf DropletEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/droplets');
    }
    /**
     * Create snapshot from droplet.
     * 
     * @param {number} id 
     * @param {string} snapshotName 
     * @returns {Promise<Action>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async createSnapshot(
        id: number,
        snapshotName: string
    ): Promise<Action> {
        let url = [this.prefix, id, 'actions'].join('/');
        let params = <any>{ type: 'snapshot', name: snapshotName };
        return this.doAction(url, params);
    }
    /**
     * Disable droplet backups.
     * 
     * @param {number} id 
     * @returns {Promise<Action>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async disableBackups(id: number): Promise<Action>{
        let url = [this.prefix, id, 'actions'].join('/');
        let params = <any>{ type: 'disable_backups' };
        return this.doAction(url, params);
    }
    /**
     * Enable droplet backups.
     * 
     * @param {number} id 
     * @returns {Promise<Action>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async enableBackups(id: number): Promise<Action>{
        let url = [this.prefix, id, 'actions'].join('/');
        let params = <any>{ type: 'enable_backups' };
        return this.doAction(url, params);
    }
    /**
     * Enable ipv6 networking in one droplet.
     * 
     * @param {number} id 
     * @returns {Promise<Action>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async enableIPv6(id: number): Promise<Action> {
        let url = [this.prefix, id, 'actions'].join('/');
        let params = <any>{ type: 'enable_ipv6' };
        return this.doAction(url, params);
    }
    /**
     * Enable private networking in one droplet.
     * 
     * @param {number} id 
     * @returns {Promise<Action>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async enablePrivateNetworking(id: number): Promise<Action> {
        let url = [this.prefix, id, 'actions'].join('/');
        let params = <any>{ type: 'enable_private_networking' };
        return this.doAction(url, params);
    }
    /**
     * Get droplet by id.
     * 
     * @param {number} id 
     * @returns {Promise<Droplet>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async get(id: number): Promise<Droplet> {
        let url = [this.prefix, id].join('/');
        let res = await this.api.get(url);
        if (!res.data) throw this.api.invalidResponse;
        let volume: IDroplet = <IDroplet>res.data.droplet;
        return new Droplet(this, volume);
    };
    /**
     * List droplets by tag.
     * 
     * @param {string} tag 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Droplet>>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async list(
        tag: string,
        page: number,
        perPage?: number
    ): Promise<ICollection<Droplet>>;
    /**
     * List all droplets.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Droplet>>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async list(
        page: number,
        perPage?: number
    ): Promise<ICollection<Droplet>>;
    public async list(
        a: string | number,
        b: number,
        c?: number
    ): Promise<ICollection<Droplet>> {
        let tag: string = null;
        let page: number = null, perPage: number = null;
        if (typeof a === 'string')
            ((tag = a) && (page = b) && (perPage = c));
        else
            ((page = a) && (perPage = b));
        let collection: ICollection<IDroplet> | ICollection<Droplet>;
        let url: string = this.prefix;
        if (tag)
            url = [url, ['tag_name', tag].join('=')].join('?');
        collection = await this.getCollection<IDroplet>(
            page,
            perPage,
            url,
            'droplets'
        );
        collection = this.upcastCollection<IDroplet, Droplet>(
            collection,
            Droplet
        );
        return <ICollection<Droplet>>collection;
    }
    /**
     * List all droplet's snapshots. [droplet ? snapshot = image]
     * 
     * @param {number} id 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Image>>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async listImages(
        id: number,
        type: 'snapshots' | 'backups' | string,
        page: number,
        perPage?: number
    ): Promise<ICollection<Image>> {
        if (type !== 'snapshots' && type !== 'backups')
            throw new Error('Invalid image type.');
        let collection: ICollection<IImage> | ICollection<Image>;
        let url: string = [this.prefix, id, type].join('/');
        collection = await this.getCollection<IImage>(
            page,
            perPage,
            url,
            type
        );
        collection = this.upcastCollection<IImage, Image>(
            collection,
            Image
        );
        return <ICollection<Image>>collection;
    }
    /**
     * Power cycle droplet [similar to pushing the reset button].
     * 
     * @param {number} id 
     * @returns {Promise<Action>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async powerCycle(id: number): Promise<Action>{
        let url = [this.prefix, id, 'actions'].join('/');
        let params = <any>{ type: 'power_cycle' };
        return this.doAction(url, params);
    }
    /**
     * Power off a droplet.
     * 
     * @param {number} id 
     * @returns {Promise<Action>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async powerOff(id: number): Promise<Action> {
        let url = [this.prefix, id, 'actions'].join('/');
        let params = <any>{ type: 'power_off' };
        return this.doAction(url, params);
    }
    /**
     * Power on a droplet.
     * 
     * @param {number} id 
     * @returns {Promise<Action>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async powerOn(id: number): Promise<Action> {
        let url = [this.prefix, id, 'actions'].join('/');
        let params = <any>{ type: 'power_on' };
        return this.doAction(url, params);
    }
    /**
     * Reboot droplet [reboot in a graceful way].
     * 
     * @param {number} id 
     * @returns {Promise<Action>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async reboot(id: number): Promise<Action>{
        let url = [this.prefix, id, 'actions'].join('/');
        let params = <any>{ type: 'reboot' };
        return this.doAction(url, params);
    };
    /**
     * Shutdown a droplet [shutdown in a graceful way].
     * 
     * @param {number} id 
     * @returns {Promise<Action>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async shutdown(id: number): Promise<Action>{
        let url = [this.prefix, id, 'actions'].join('/');
        let params = <any>{ type: 'shutdown' };
        return this.doAction(url, params);
    };
}

export default DropletEndpoint;