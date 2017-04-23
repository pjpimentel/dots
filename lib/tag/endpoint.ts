'use strict';
import { ITag } from './interfaces';
import { ITagEndpoint, ITagSpecs } from './interfaces';
import Tag from './tag';
import DigitalOcean from '../digitalOcean';
import Endpoint from '../common/endpoint';
import {
    IResource,
    isResourceArray,
    isResource,
    ICollection
} from "../common/interfaces";
/**
 * Tag endpoint.
 * 
 * @class TagEndpoint
 * @extends {Endpoint}
 * @implements {ITagEndpoint}
 */
class TagEndpoint extends Endpoint implements ITagEndpoint {
    /**
     * Creates an instance of TagEndpoint.
     * @param {DigitalOcean} digitalOcean 
     * 
     * @memberOf TagEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/tags');
    }
    /**
     * Create create new tag.
     * 
     * @param {ITagSpecs} specs 
     * @returns {Promise<Tag>} 
     * 
     * @memberOf TagEndpoint
     */
    public async create(specs: ITagSpecs): Promise<Tag> {
        let url: string = this.prefix;
        let res = await this.api.post(url, specs);
        if (!res.data) throw this.api.invalidResponse;
        let tag: ITag = res.data.tag;
        return new Tag(this, tag);
    };
    /**
     * Delete tag by name.
     * 
     * @param {string} name 
     * @returns {Promise<void>} 
     * 
     * @memberOf TagEndpoint
     */
    public async delete(name: string): Promise<void> {
        let url = [this.prefix, name].join('/');
        await this.api.delete(url);
        return;
    }
    /**
     * Get Tag by name.
     * 
     * @param {string} name 
     * @returns {Promise<Tag>} 
     * 
     * @memberOf TagEndpoint
     */
    public async get(name: string): Promise<Tag> {
        let url: string = [this.prefix, name].join('/');
        let res = await this.api.get(url);
        if (!res.data) throw this.api.invalidResponse;
        let tag: ITag = <ITag>res.data.tag;
        return new Tag(this, tag);
    }
    /**
     * List all tags.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Tag>>} 
     * 
     * @memberOf TagEndpoint
     */
    public async list(
        page: number,
        perPage?: number
    ): Promise<ICollection<Tag>> {
        let collection: ICollection<ITag> | ICollection<Tag>;
        let url: string = this.prefix;
        collection = await this.getCollection<ITag>(
            page,
            perPage,
            url,
            'tags'
        );
        collection = this.upcastCollection<ITag, Tag>(collection, Tag);
        return <ICollection<Tag>>collection;
    }
    /**
     * Prepare tag/untag parameters
     * 
     * @private
     * @param {(number | string | IResource | Array<IResource>)} a 
     * @param {string} [b] 
     * @returns {Array<IResource>} 
     * 
     * @memberOf TagEndpoint
     */
    private getResouceArray(
        a: number | string | IResource | Array<IResource>,
        b?: string
    ): Array<IResource> {
        let resources: Array<IResource> = [];
        if (!isResourceArray(a)) {
            if (!isResource(a)) {
                if (typeof a === 'number') a = a.toString();
                if (typeof a !== 'string')
                    throw new TypeError(
                        'Expecting resource id as first parameter.'
                    );
                if (typeof b !== 'string')
                    throw new TypeError(
                        'Expecting resource type as second parameter.'
                    );
                a = <IResource>{
                    resource_id: <string>a,
                    resource_type: <string>b
                };
            }
            a = <Array<IResource>>[(<IResource>a)];
        }
        resources = <Array<IResource>>a;
        return resources;
    }
    /**
     * Tag resource.
     * 
     * @param {string} name 
     * @param {(number | string)} resouceId 
     * @param {string} resourcetype 
     * 
     * @memberOf TagEndpoint
     */
    public async tagResource(
        name: string,
        resouceId: number | string,
        resourcetype: string
    );
    /**
     * Tag resource.
     * 
     * @param {string} name 
     * @param {IResource} resouce 
     * 
     * @memberOf TagEndpoint
     */
    public async tagResource(name: string, resouce: IResource);
    /**
     * Tag resource.
     * 
     * @param {string} name 
     * @param {Array<IResource>} resouces 
     * 
     * @memberOf TagEndpoint
     */
    public async tagResource(name: string, resouces: Array<IResource>);
    public async tagResource(
        name: string,
        a: number | string | IResource | Array<IResource>,
        b?: string
    ): Promise<void> {
        let resources: Array<IResource> = this.getResouceArray(a, b);
        let url: string = [this.prefix, name, 'resources'].join('/');
        await this.api.post(url, { resources: resources });
        return;
    }
    /**
     * Untag resource.
     * 
     * @param {string} name 
     * @param {(number | string)} resouceId 
     * @param {string} resourcetype 
     * 
     * @memberOf TagEndpoint
     */
    public async untagResource(
        name: string,
        resouceId: number | string,
        resourcetype: string
    );
    /**
     * Untag resource.
     * 
     * @param {string} name 
     * @param {IResource} resouce 
     * 
     * @memberOf TagEndpoint
     */
    public async untagResource(name: string, resouce: IResource);
    /**
     * Untag resource.
     * 
     * @param {string} name 
     * @param {Array<IResource>} resouces 
     * 
     * @memberOf TagEndpoint
     */
    public async untagResource(name: string, resouces: Array<IResource>);
    public async untagResource(
        name: string,
        a: number | string | IResource | Array<IResource>,
        b?: string
    ): Promise<void> {
        let resources: Array<IResource> = this.getResouceArray(a, b);
        let url: string = [this.prefix, name, 'resources'].join('/');
        await this.api.delete(url, { data: { resources: resources } });
        return;
    }
}

export default TagEndpoint;