'use strict';
import { IImage } from './interfaces';
import ImageEndpoint from './endpoint';
import Asset from '../common/asset';
/**
 * Image asset.
 * 
 * @class Image
 * @extends {Asset<ImageEndpoint>}
 * @implements {IImage}
 */
class Image extends Asset<ImageEndpoint> implements IImage{
    readonly created_at: Date;
    readonly distribution: string;
    readonly id: number;
    readonly min_disk_size: number;
    name: string;
    readonly public: boolean;
    readonly regions: Array<string>;
    readonly size_gigabytes: number;
    readonly slug: string | null;
    readonly type: string;
    /**
     * Creates an instance of Image.
     * @param {ImageEndpoint} endpoint 
     * @param {IImage} image 
     * 
     * @memberOf Image
     */
    constructor(endpoint: ImageEndpoint, image: IImage){
        super(endpoint),
        this.created_at = image.created_at;
        this.distribution = image.distribution;
        this.id = image.id;
        this.min_disk_size = image.min_disk_size;
        this.name = image.name;
        this.public = image.public;
        this.regions = image.regions;
        this.size_gigabytes = image.size_gigabytes;
        this.slug = image.slug;
        this.type = image.type;
    }
    /**
     * Delete image.
     * 
     * @returns {Promise<void>} 
     * 
     * @memberOf Image
     */
    public async delete(): Promise<void>{
        await this.endpoint.delete(this.id);
    }
    /**
     * Update image name.
     * 
     * @param {string} name 
     * @returns {Promise<void>} 
     * 
     * @memberOf Image
     */
    public async setName(name: string): Promise<void>{
        await this.endpoint.update(this.id, {name: name});
        this.name = name;
    }
    /**
     * Transfer image to another region.
     * 
     * @param {string} regionSlug 
     * @returns {Promise<Action>} 
     * 
     * @memberOf Image
     */
    public async transfer(regionSlug: string){
        return this.endpoint.transfer(this.id, regionSlug);
    }
}

export default Image;
