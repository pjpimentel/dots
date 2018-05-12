import { Observable } from 'rxjs';
import Endpoint from './common/endpoint';
import { IAction, ICollection, IImage, IImageEndpoint, IImageUpdateSpecs } from './common/interfaces';
import DigitalOcean from './digitalOcean';
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
    constructor(digitalOcean: DigitalOcean);
    /**
     * Convert image to snapshot.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof ImageEndpoint
     */
    convertToSnapshot(id: number): Observable<IAction>;
    /**
     * Delete image by id.
     *
     * @param {number} id
     * @returns {Observable<void>}
     *
     * @memberof ImageEndpoint
     */
    delete(id: number): Observable<void>;
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
    /**
     * Get images's action by id.
     *
     * @param {number} id
     * @param {number} actionId
     * @returns {Observable<IAction>}
     *
     * @memberof ImageEndpoint
     */
    getActionById(id: number, actionId: number): Observable<IAction>;
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
    list(type: 'distribution' | 'appplication' | string, page: number, perPage?: number): Observable<ICollection<IImage>>;
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
    listActions(id: number, page: number, perPage?: number): Observable<ICollection<IAction>>;
    /**
     * List User's images.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IImage>>}
     *
     * @memberof ImageEndpoint
     */
    listPrivate(page: number, perPage?: number): Observable<ICollection<IImage>>;
    /**
     * Transfer image to another region.
     *
     * @param {number} id
     * @param {string} regionSlug
     * @returns {Observable<IAction>}
     *
     * @memberof ImageEndpoint
     */
    transfer(id: number, regionSlug: string): Observable<IAction>;
    /**
     * Update image.
     *
     * @param {number} id
     * @param {IImageUpdateSpecs} specs
     * @returns {Observable<IImage>}
     *
     * @memberof ImageEndpoint
     */
    update(id: number, specs: IImageUpdateSpecs): Observable<IImage>;
}
