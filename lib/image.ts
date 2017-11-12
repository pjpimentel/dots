import { Observable } from 'rxjs';
import DigitalOcean from './digitalOcean';
import Endpoint from './common/endpoint';
import { IImage, IImageEndpoint, IImageUpdateSpecs, IAction, ICollection } from './common/interfaces';
import { isImage, isAction } from './common/type.guards';
//TODO: test
/**
 * Image endpoint.
 *
 * @class ImageEndpoint
 * @extends {Endpoint<DigitalOcean>}
 * @implements {IImageEndpoint}
 */
export default class ImageEndpoint extends Endpoint implements IImageEndpoint {
    /**
     * Creates an instance of ImageEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof ImageEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/images');
    }
    /**
     * Convert image to snapshot.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof ImageEndpoint
     */
    public convertToSnapshot(id: number): Observable<IAction> {
        let url: string = `${this.prefix}/${id}/actions`;
        let params = { type: 'convert' };
        let promise = this.api.post(url, params);
        return this.fromPromise(promise, 'action', isAction);
    }
    /**
     * Delete image by id.
     *
     * @param {number} id
     * @returns {Observable<void>}
     *
     * @memberof ImageEndpoint
     */
    public delete(id: number): Observable<void> {
        let url: string = `${this.prefix}/${id}`;
        let promise = this.api.get(url);
        return this.fromPromise(promise);
    }
    /**
     * Get image by id.
     *
     * @param {number} id
     * @returns {Observable<IImage>}
     *
     * @memberof ImageEndpoint
     */
    public get(id: number): Observable<IImage>;
    /**
     * Get image by slug.
     *
     * @param {string} slug
     * @returns {Observable<IImage>}
     *
     * @memberof ImageEndpoint
     */
    public get(slug: string): Observable<IImage>;
    public get(uid: number | string): Observable<IImage> {
        let url: string = `${this.prefix}/${uid}`;
        let promise = this.api.get(url);
        return this.fromPromise(promise, 'image', isImage);
    }
    /**
     * Get images's action by id.
     *
     * @param {number} id
     * @param {number} actionId
     * @returns {Observable<IAction>}
     *
     * @memberof ImageEndpoint
     */
    public getActionById(id: number, actionId: number): Observable<IAction> {
        let url: string = `${this.prefix}/${id}/actions/${actionId}`;
        let promise = this.api.get(url);
        return this.fromPromise(promise, 'action', isAction);
    }
    /**
     * List images by type.
     *
     * @param {('distribution'|'appplication')} type
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IImage>>}
     *
     * @memberof ImageEndpoint
     */
    public list(type: 'distribution' | 'appplication' | string, page: number, perPage?: number): Observable<ICollection<IImage>>;
    /**
     * List all images.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IImage>>}
     *
     * @memberof ImageEndpoint
     */
    public list(page: number, perPage?: number): Observable<ICollection<IImage>>;
    public list(a: string | number, b: number, c?: number): Observable<ICollection<IImage>> {
        let type: string = null, page: number = null, perPage: number = null;
        if (typeof a === 'string') ((type = a) && (page = b) && (perPage = c));
        else ((page = a) && (perPage = b));
        let url: string = this.prefix;
        if (type) url = `${url}?type=${type}`;
        return this.getCollection<IImage>(page, perPage, url, 'images', isImage);
    }
    /**
     * List image's actions.
     *
     * @param {number} id
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IAction>>}
     *
     * @memberof ImageEndpoint
     */
    public listActions(id: number, page: number, perPage?: number): Observable<ICollection<IAction>> {
        let url: string = `${this.prefix}/${id}/actions`;
        return this.getCollection<IAction>(page, perPage, url, 'actions');
    }
    /**
     * List User's images.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IImage>>}
     *
     * @memberof ImageEndpoint
     */
    public listPrivate(page: number, perPage?: number): Observable<ICollection<IImage>> {
        let url: string = `${this.prefix}?private=true`;
        return this.getCollection<IImage>(page, perPage, url, 'images');
    }
    /**
     * Transfer image to another region.
     *
     * @param {number} id
     * @param {string} regionSlug
     * @returns {Observable<IAction>}
     *
     * @memberof ImageEndpoint
     */
    public transfer(id: number, regionSlug: string): Observable<IAction> {
        let url: string = `${this.prefix}/${id}/actions`;
        let params = { type: 'transfer', region: regionSlug };
        let promise = this.api.post(url, params);
        return this.fromPromise(promise, 'action', isAction);
    }
    /**
     * Update image.
     *
     * @param {number} id
     * @param {IImageUpdateSpecs} specs
     * @returns {Observable<IImage>}
     *
     * @memberof ImageEndpoint
     */
    public update(id: number, specs: IImageUpdateSpecs): Observable<IImage> {
        let url: string = `${this.prefix}/${id}`;
        let promise = this.api.post(url, specs);
        return this.fromPromise(promise, 'action', isAction);
    }
}