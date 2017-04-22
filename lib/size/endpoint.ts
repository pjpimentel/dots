
'use strict';
import { ISize } from './interfaces';
import { ISizeEndpoint } from './interfaces';
import Size from './size';
import DigitalOcean from '../digitalOcean';
import Endpoint from '../common/endpoint';
import { ICollection } from "../common/interfaces";
/**
 * Size endpoint.
 * 
 * @class SizeEndpoint
 * @extends {Endpoint}
 * @implements {ISizeEndpoint}
 */
class SizeEndpoint extends Endpoint implements ISizeEndpoint {
    /**
     * Creates an instance of SizeEndpoint.
     * @param {DigitalOcean} digitalOcean 
     * 
     * @memberOf SizeEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/sizes');
    }
    /**
     * List all sizes.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Size>>} 
     * 
     * @memberOf SizeEndpoint
     */
    public async list(
        page: number,
        perPage?: number
    ): Promise<ICollection<Size>> {
        let collection: ICollection<ISize> | ICollection<Size>;
        let url: string = this.prefix;
        collection = await this.getCollection<ISize>(
            page,
            perPage,
            url,
            'sizes'
        );
        collection = this.upcastCollection<ISize, Size>(collection, Size);
        return <ICollection<Size>>collection;
    }
}

export default SizeEndpoint;