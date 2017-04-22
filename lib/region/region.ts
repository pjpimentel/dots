
'use strict';
import {IRegion} from './interfaces';
import RegionEndpoint from './endpoint';
import Asset from '../common/asset';
/**
 * Region asset.
 * 
 * @class Region
 * @extends {Asset<RegionEndpoint>}
 * @implements {IRegion}
 */
class Region extends Asset<RegionEndpoint> implements IRegion{
    readonly available: boolean;
    readonly features: Array<string>;
    readonly name: string;
    readonly sizes: Array<string>;
    readonly slug: string;
    /**
     * Creates an instance of Region.
     * @param {RegionEndpoint} endpoint 
     * @param {IRegion} region 
     * 
     * @memberOf Region
     */
    constructor(endpoint: RegionEndpoint, region: IRegion){
        super(endpoint);
        this.available = region.available;
        this.features = region.features;
        this.name = region.name;
        this.sizes = region.sizes;
        this.slug = region.slug;
    }
}

export default Region;
