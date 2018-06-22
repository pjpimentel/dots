import { Observable } from 'rxjs';

import Endpoint from './common/endpoint';
import { ICollection, IResource, ITag, ITagEndpoint, ITagSpecs } from './common/interfaces';
import { isArrayOfResource, isResource, isTag } from './common/type.guards';
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
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/tags');
    }
    /**
     * Create create new tag.
     *
     * @param {ITagSpecs} specs
     * @returns {Observable<Tag>}
     *
     * @memberof TagEndpoint
     */
    create(specs: ITagSpecs): Observable<ITag> {
        const url: string = this.prefix;
        const promise = this.api.post(url, specs);
        return this.fromPromise(promise, 'tag', isTag);
    }
    /**
     * Delete tag by name.
     *
     * @param {string} name
     * @returns {Observable<void>}
     *
     * @memberof TagEndpoint
     */
    delete(name: string): Observable<void> {
        const url = `${this.prefix}/${name}`;
        const promise = this.api.delete(url);
        return this.fromPromise(promise);
    }
    /**
     * Get Tag by name.
     *
     * @param {string} name
     * @returns {Observable<Tag>}
     *
     * @memberof TagEndpoint
     */
    get(name: string): Observable<ITag> {
        const url = `${this.prefix}/${name}`;
        const promise = this.api.get(url);
        return this.fromPromise(promise, 'tag', isTag);
    }
    /**
     * List all tags.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<Tag>>}
     *
     * @memberof TagEndpoint
     */
    list(page: number, perPage?: number): Observable<ICollection<ITag>> {
        const url: string = this.prefix;
        return this.getCollection<ITag>(page, perPage, url, 'tags', isTag);
    }
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
    private getResouceArray(a: number | string | IResource | IResource[], b?: string): IResource[] {
        let resources: IResource[] = [];
        if (!isArrayOfResource(a)) {
            if (!isResource(a)) {
                if (typeof a === 'number') a = a.toString();
                if (typeof a !== 'string') throw new TypeError('Expecting resource id as first parameter.');
                if (typeof b !== 'string') throw new TypeError('Expecting resource type as second parameter.');
                a = { resource_id: a, resource_type: b } as IResource;
            }
            a = [a];
        }
        resources = a;
        return resources;
    }
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
    tagResource(name: string, a: number | string | IResource | IResource[], b?: string): Observable<void> {
        const resources: IResource[] = this.getResouceArray(a, b);
        const url = `${this.prefix}/${name}/resources`;
        const promise = this.api.post(url, { resources });
        return this.fromPromise(promise);
    }
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
    untagResource(name: string, a: number | string | IResource | IResource[], b?: string): Observable<void> {
        const resources: IResource[] = this.getResouceArray(a, b);
        const url = `${this.prefix}/${name}/resources`;
        const promise = this.api.delete(url, { data: { resources } });
        return this.fromPromise(promise);
    }
}
