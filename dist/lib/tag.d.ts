import { Observable } from "rxjs/Observable";
import Endpoint from './common/endpoint';
import { ICollection, IResource, ITag, ITagEndpoint, ITagSpecs } from './common/interfaces';
import DigitalOcean from './digitalOcean';
/**
 * Tag endpoint.
 *
 * @class TagEndpoint
 * @extends {Endpoint}
 * @implements {ITagEndpoint}
 */
export default class TagEndpoint extends Endpoint implements ITagEndpoint {
    /**
     * Creates an instance of TagEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof TagEndpoint
     */
    constructor(digitalOcean: DigitalOcean);
    /**
     * Create create new tag.
     *
     * @param {ITagSpecs} specs
     * @returns {Observable<Tag>}
     *
     * @memberof TagEndpoint
     */
    create(specs: ITagSpecs): Observable<ITag>;
    /**
     * Delete tag by name.
     *
     * @param {string} name
     * @returns {Observable<void>}
     *
     * @memberof TagEndpoint
     */
    delete(name: string): Observable<void>;
    /**
     * Get Tag by name.
     *
     * @param {string} name
     * @returns {Observable<Tag>}
     *
     * @memberof TagEndpoint
     */
    get(name: string): Observable<ITag>;
    /**
     * List all tags.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<Tag>>}
     *
     * @memberof TagEndpoint
     */
    list(page: number, perPage?: number): Observable<ICollection<ITag>>;
    /**
     * Prepare tag/untag parameters
     *
     * @private
     * @param {(number | string | IResource | IResource[])} a
     * @param {string} [b]
     * @returns {IResource[]}
     *
     * @memberof TagEndpoint
     */
    private getResouceArray(a, b?);
    /**
     * Tag resource.
     *
     * @param {string} name
     * @param {(number | string)} resouceId
     * @param {string} resourcetype
     * @returns {Observable<void>}
     * @memberof TagEndpoint
     */
    tagResource(name: string, resouceId: number | string, resourcetype: string): Observable<void>;
    /**
     * Tag resource.
     *
     * @param {string} name
     * @param {IResource} resouce
     * @returns {Observable<void>}
     * @memberof TagEndpoint
     */
    tagResource(name: string, resouce: IResource): Observable<void>;
    /**
     * Tag resource.
     *
     * @param {string} name
     * @param {IResource[]} resouces
     * @returns {Observable<void>}
     * @memberof TagEndpoint
     */
    tagResource(name: string, resouces: IResource[]): Observable<void>;
    /**
     * Untag resource.
     *
     * @param {string} name
     * @param {(number | string)} resouceId
     * @param {string} resourcetype
     * @returns {Observable<void>}
     * @memberof TagEndpoint
     */
    untagResource(name: string, resouceId: number | string, resourcetype: string): Observable<void>;
    /**
     * Untag resource.
     *
     * @param {string} name
     * @param {IResource} resouce
     * @returns {Observable<void>}
     * @memberof TagEndpoint
     */
    untagResource(name: string, resouce: IResource): Observable<void>;
    /**
     * Untag resource.
     *
     * @param {string} name
     * @param {IResource[]} resouces
     * @returns {Observable<void>}
     * @memberof TagEndpoint
     */
    untagResource(name: string, resouces: IResource[]): Observable<void>;
}
