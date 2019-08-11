import { Observable } from 'rxjs';
import Endpoint from './common/endpoint';
import { IAction, ICollection, IImage, IImageEndpoint, IImageUpdateSpecs } from './common/interfaces';
import { isAction, isImage } from './common/type.guards';
import DigitalOcean from './digitalOcean';
// TODO: test
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
    convertToSnapshot(id: number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: 'convert' };
        const promise = this.api.post(url, params);
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
    delete(id: number): Observable<void> {
        const url = `${this.prefix}/${id}`;
        const promise = this.api.get(url);
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
    get(id: number): Observable<IImage>;
    /**
     * Get image by slug.
     *
     * @param {string} slug
     * @returns {Observable<IImage>}
     *
     * @memberof ImageEndpoint
     */
    get(slug: string): Observable<IImage>;
    get(uid: number | string): Observable<IImage> {
        const url = `${this.prefix}/${uid}`;
        const promise = this.api.get(url);
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
    getActionById(id: number, actionId: number): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions/${actionId}`;
        const promise = this.api.get(url);
        return this.fromPromise(promise, 'action', isAction);
    }
    /**
     * List images by type.
     *
     * @param {('distribution'|'application')} type
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IImage>>}
     *
     * @memberof ImageEndpoint
     */
    list(type: 'distribution' | 'application' | string, page: number, perPage?: number): Observable<ICollection<IImage>>;
    /**
     * List all images.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IImage>>}
     *
     * @memberof ImageEndpoint
     */
    list(page: number, perPage?: number): Observable<ICollection<IImage>>;
    list(a: string | number, b: number, c?: number): Observable<ICollection<IImage>> {
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
    listActions(id: number, page: number, perPage?: number): Observable<ICollection<IAction>> {
        const url = `${this.prefix}/${id}/actions`;
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
    listPrivate(page: number, perPage?: number): Observable<ICollection<IImage>> {
        const url = `${this.prefix}?private=true`;
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
    transfer(id: number, regionSlug: string): Observable<IAction> {
        const url = `${this.prefix}/${id}/actions`;
        const params = { type: 'transfer', region: regionSlug };
        const promise = this.api.post(url, params);
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
    update(id: number, specs: IImageUpdateSpecs): Observable<IImage> {
        const url = `${this.prefix}/${id}`;
        const promise = this.api.post(url, specs);
        return this.fromPromise(promise, 'action', isAction);
    }
}
