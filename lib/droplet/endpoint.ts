'use strict';
import { IDroplet, IDropletEndpoint } from './interfaces';
import Droplet from './droplet';
import DigitalOcean from '../digitalOcean';
import Endpoint from '../common/endpoint';
import { ICollection } from '../common/interfaces';
/**
 * Droplet endpoint
 * 
 * @class DropletEndpoint
 * @extends {Endpoint<DigitalOcean>}
 * @implements {IDropletEndpoint}
 */
class DropletEndpoint extends Endpoint implements IDropletEndpoint {
    /**
     * Creates an instance of DropletEndpoint.
     * @param {DigitalOcean} digitalOcean 
     * 
     * @memberOf DropletEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/droplets');
    }
    /**
     * Get droplet by id.
     * 
     * @param {number} id 
     * @returns {Promise<Droplet>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async get(id: number): Promise<Droplet>{
        let url = [this.prefix, id].join('/');
        let res = await this.api.get(url);
        if (!res.data) throw this.api.invalidResponse;
        let volume: IDroplet = <IDroplet> res.data.droplet;
        return new Droplet(this, volume);
    };
    /**
     * List all droplets.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Droplet>>} 
     * 
     * @memberOf DropletEndpoint
     */
    public async list(
        page: number,
        perPage?: number
    ): Promise<ICollection<Droplet>> {
        let collection: ICollection<IDroplet> | ICollection<Droplet>;
        let url: string = this.prefix;
        collection = await this.getCollection<IDroplet>(
            page,
            perPage,
            url,
            'droplets'
        );
        collection = this.upcastCollection<IDroplet, Droplet>(
            collection,
            Droplet
        );
        return <ICollection<Droplet>> collection;
    }
}

export default DropletEndpoint;