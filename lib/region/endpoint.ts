
'use strict';
import {IRegion,IRegionEndpoint} from "./interfaces";
import Region from './region';
import DigitalOcean from '../digitalOcean';
import Endpoint from '../common/endpoint';
import {ICollection} from "../common/interfaces";
/**
 * Region endpoint.
 * 
 * @class RegionEndpoint
 * @extends {Endpoint}
 * @implements {IRegionEndpoint}
 */
class RegionEndpoint extends Endpoint implements IRegionEndpoint{
    /**
     * Creates an instance of RegionEndpoint.
     * @param {DigitalOcean} digitalOcean 
     * 
     * @memberOf RegionEndpoint
     */
    constructor(digitalOcean: DigitalOcean){
        super(digitalOcean, '/regions');
    }
    /**
     * List all regions.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Region>>} 
     * 
     * @memberOf RegionEndpoint
     */
    public async list(
        page: number,
        perPage?: number
    ): Promise<ICollection<Region>>{
        let collection: ICollection<IRegion>|ICollection<Region>;
        let url: string = this.prefix;
        collection = await this.getCollection<IRegion>(
            page,
            perPage,
            url,
            'regions'
        );
        collection = this.upcastCollection<IRegion,Region>(collection, Region);
        return <ICollection<Region>> collection;
    }
}

export default RegionEndpoint;