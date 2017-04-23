'use strict';
import { IImage, IImageEndpoint, IImageUpdateSpecs } from './interfaces';
import Image from './image';
import DigitalOcean from '../digitalOcean';
import Endpoint from '../common/endpoint';
import { IAction } from "../action/interfaces";
import Action from "../action/action";
import { ICollection } from "../common/interfaces";
/**
 * Image endpoint.
 * 
 * @class ImageEndpoint
 * @extends {Endpoint<DigitalOcean>}
 * @implements {IImageEndpoint}
 */
class ImageEndpoint extends Endpoint implements IImageEndpoint {
    /**
     * Creates an instance of ImageEndpoint.
     * @param {DigitalOcean} digitalOcean 
     * 
     * @memberOf ImageEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/images');
    }
    /**
     * Convert image to snapshot.
     * 
     * @param {number} id 
     * @returns {Promise<Action>} 
     * 
     * @memberOf ImageEndpoint
     */
    public async convertToSnapshot(id: number): Promise<Action> {
        let url: string = [this.prefix, id.toString(), 'actions'].join('/');
        let params = { type: 'convert' };
        let res = await this.api.post(url, params);
        if (!res.data) throw this.api.invalidResponse;
        let action: IAction = <IAction>res.data.action;
        return new Action(this.api.Action, action);
    }
    /**
     * Delete image by id.
     * 
     * @param {number} id 
     * @returns {Promise<void>} 
     * 
     * @memberOf ImageEndpoint
     */
    public async delete(id: number): Promise<void> {
        let url: string = [this.prefix, id.toString()].join('/');
        await this.api.get(url);
        return;
    }
    /**
     * Get image by id.
     * 
     * @param {number} id 
     * @returns {Promise<Image>} 
     * 
     * @memberOf ImageEndpoint
     */
    public async get(id: number): Promise<Image>;
    /**
     * Get image by slug.
     * 
     * @param {string} slug 
     * @returns {Promise<Image>} 
     * 
     * @memberOf ImageEndpoint
     */
    public async get(slug: string): Promise<Image>;
    public async get(uid: number | string): Promise<Image> {
        if (typeof uid === 'string') uid = uid.toString();
        let url: string = [this.prefix, uid].join('/');
        let res = await this.api.get(url);
        if (!res.data) throw this.api.invalidResponse;
        let image: IImage = <IImage>res.data.image;
        return new Image(this, image);
    }
    /**
     * Get images's action by id.
     * 
     * @param {number} id 
     * @param {number} actionId 
     * @returns {Promise<Action>} 
     * 
     * @memberOf ImageEndpoint
     */
    public async getActionById(id: number, actionId: number): Promise<Action> {
        let url: string = [
            this.prefix,
            id.toString(),
            'actions',
            actionId.toString()
        ].join('/');
        let res = await this.api.get(url);
        if (!res.data) throw this.api.invalidResponse;
        let action: IAction = <IAction>res.data.action;
        return new Action(this.api.Action, action);
    }
    /**
     * List images by type.
     * 
     * @param {('distribution'|'appplication')} type 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Image>>} 
     * 
     * @memberOf ImageEndpoint
     */
    public async list(
        type: 'distribution' | 'appplication' | string,
        page: number,
        perPage?: number
    ): Promise<ICollection<Image>>;
    /**
     * List all images.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Image>>} 
     * 
     * @memberOf ImageEndpoint
     */
    public async list(
        page: number,
        perPage?: number
    ): Promise<ICollection<Image>>;
    public async list(
        a: string | number,
        b: number,
        c?: number
    ): Promise<ICollection<Image>> {
        let type: string = null;
        let page: number = null, perPage: number = null;
        if (typeof a === 'string')
            ((type = a) && (page = b) && (perPage = c));
        else
            ((page = a) && (perPage = b));
        let collection: ICollection<IImage> | ICollection<Image>;
        let url: string = this.prefix;
        if (type)
            url = [url, ['type', type].join('=')].join('?');
        collection = await this.getCollection<IImage>(
            page,
            perPage,
            url,
            'images'
        );
        collection = this.upcastCollection<IImage, Image>(
            collection,
            Image
        );
        return <ICollection<Image>>collection;
    }
    /**
     * List image's actions.
     * 
     * @param {number} id 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Action>>} 
     * 
     * @memberOf ImageEndpoint
     */
    public async listActions(
        id: number,
        page: number,
        perPage?: number
    ): Promise<ICollection<Action>> {
        let collection: ICollection<IAction> | ICollection<Action>;
        let url: string = [this.prefix, id.toString(), 'actions'].join('/');
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
     * List User's images.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Image>>} 
     * 
     * @memberOf ImageEndpoint
     */
    public async listPrivate(
        page: number,
        perPage?: number
    ): Promise<ICollection<Image>> {
        let collection: ICollection<IImage> | ICollection<Image>;
        let url: string = [this.prefix, ['private', true].join('=')].join('?');
        collection = await this.getCollection<IImage>(
            page,
            perPage,
            url,
            'images'
        );
        collection = this.upcastCollection<IImage, Image>(collection, Action);
        return <ICollection<Image>>collection;
    }
    /**
     * Transfer image to another region.
     * 
     * @param {number} id 
     * @param {string} regionSlug 
     * @returns {Promise<Action>} 
     * 
     * @memberOf ImageEndpoint
     */
    public async transfer(id: number, regionSlug: string): Promise<Action> {
        let url: string = [this.prefix, id.toString(), 'actions'].join('/');
        let params = { type: 'transfer', region: regionSlug };
        let res = await this.api.post(url, params);
        if (!res.data) throw this.api.invalidResponse;
        let action: IAction = <IAction>res.data.action;
        return new Action(this.api.Action, action);
    }
    /**
     * Update image.
     * 
     * @param {number} id 
     * @param {IImageUpdateSpecs} specs 
     * @returns {Promise<Image>} 
     * 
     * @memberOf ImageEndpoint
     */
    public async update(id: number, specs: IImageUpdateSpecs): Promise<Image> {
        let url: string = [this.prefix, id.toString()].join('/');
        let res = await this.api.post(url, specs);
        if (!res.data) throw this.api.invalidResponse;
        let image: IImage = <IImage>res.data.action;
        return new Image(this, image);
    }
}

export default ImageEndpoint;