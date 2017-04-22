
'use strict';
import { ITag } from './interfaces';
import TagEndpoint from './endpoint';
import Asset from '../common/asset';
/**
 * Tag endpoint.
 * 
 * @class Tag
 * @extends {Resource<TagEndpoint>}
 * @implements {ITag}
 */
class Tag extends Asset<TagEndpoint> implements ITag{
    name: string;
    readonly resources: any;
    /**
     * Creates an instance of Tag.
     * @param {TagEndpoint} endpoint 
     * @param {ITag} tag 
     * 
     * @memberOf Tag
     */
    constructor(endpoint: TagEndpoint, tag: ITag){
        super(endpoint),
        this.name = tag.name;
        this.resources = tag.resources;
    }
    /**
     * Delete tag.
     * 
     * @returns {Promise<void>} 
     * 
     * @memberOf Tag
     */
    public async delete(): Promise<void>{
        return this.endpoint.delete(this.name);
    }
}

export default Tag
