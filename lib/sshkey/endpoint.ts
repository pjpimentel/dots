'use strict';
import { ISSHKey, ISSHKeyEndpoint, ISSHKeySpecs } from './interfaces';
import SSHKey from './sshkey';
import DigitalOcean from '../digitalOcean';
import Endpoint from '../common/endpoint';
import { ICollection } from "../common/interfaces";
/**
 * SSH Key endpoint;
 * 
 * @class SSHKeyEndpoint
 * @extends {Endpoint}
 * @implements {ISSHKeyEndpoint}
 */
class SSHKeyEndpoint extends Endpoint implements ISSHKeyEndpoint {
    /**
     * Creates an instance of SSHKeyEndpoint.
     * @param {DigitalOcean} digitalOcean 
     * 
     * @memberOf SSHKeyEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/account/keys');
    }
    /**
     * Create new ssh key.
     * 
     * @param {ISSHKeySpecs} specs 
     * @returns {Promise<SSHKey>} 
     * 
     * @memberOf SSHKeyEndpoint
     */
    public async create(specs: ISSHKeySpecs): Promise<SSHKey> {
        let url: string = this.prefix;
        let res = await this.api.post(url, specs);
        if (!res.data) throw this.api.invalidResponse;
        let key: ISSHKey = res.data.ssh_key;
        return new SSHKey(this, key);
    };
    /**
     * Delete SSH key by fingerprint.
     * 
     * @param {string} fingerprint 
     * @returns {Promise<void>} 
     * 
     * @memberOf SSHKeyEndpoint
     */
    public async delete(fingerprint: string): Promise<void>;
    /**
     * Delete SSH key by id.
     * 
     * @param {number} id 
     * @returns {Promise<void>} 
     * 
     * @memberOf SSHKeyEndpoint
     */
    public async delete(id: number): Promise<void>;
    public async delete(uid: number | string): Promise<void> {
        let url = [this.prefix, uid].join('/');
        await this.api.delete(url);
        return;
    }
    /**
     * List all ssh keys.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<SSHKey>>} 
     * 
     * @memberOf SSHKeyEndpoint
     */
    public async list(
        page: number,
        perPage?: number
    ): Promise<ICollection<SSHKey>> {
        let collection: ICollection<ISSHKey> | ICollection<SSHKey>;
        let url: string = this.prefix;
        collection = await this.getCollection<ISSHKey>(
            page,
            perPage,
            url,
            'ssh_keys'
        );
        collection = this.upcastCollection<ISSHKey, SSHKey>(collection, SSHKey);
        return <ICollection<SSHKey>>collection;
    }
    /**
     * Get SSH Key by fingerprint.
     * 
     * @param {string} fingerprint 
     * @returns {Promise<SSHKey>} 
     * 
     * @memberOf SSHKeyEndpoint
     */
    public async get(fingerprint: string): Promise<SSHKey>;
    /**
     * Get SSH Key by id.
     * 
     * @param {number} id 
     * @returns {Promise<SSHKey>} 
     * 
     * @memberOf SSHKeyEndpoint
     */
    public async get(id: number): Promise<SSHKey>;
    public async get(uid: number | string): Promise<SSHKey> {
        let url: string = [this.prefix, uid].join('/');
        let res = await this.api.get(url);
        if (!res.data) throw this.api.invalidResponse;
        let key: ISSHKey = <ISSHKey>res.data.ssh_key;
        return new SSHKey(this, key);
    }
    /**
     * Update SSH Key by fingerprint.
     * 
     * @param {string} fingerprint 
     * @param {ISSHKeySpecs} specs 
     * @returns {Promise<SSHKey>} 
     * 
     * @memberOf SSHKeyEndpoint
     */
    public async update(
        fingerprint: string,
        specs: ISSHKeySpecs
    ): Promise<SSHKey>;
    /**
     * Update SSH Key by id.
     * 
     * @param {number} id 
     * @param {ISSHKeySpecs} specs 
     * @returns {Promise<SSHKey>} 
     * 
     * @memberOf SSHKeyEndpoint
     */
    public async update(id: number, specs: ISSHKeySpecs): Promise<SSHKey>;
    public async update(
        uid: number | string,
        specs: ISSHKeySpecs
    ): Promise<SSHKey> {
        let url = [this.prefix, uid].join('/');
        let res = await this.api.put(url, specs);
        if (!res.data) throw new Error('Invalid API response.');
        let key: ISSHKey = res.data.ssh_key;
        return new SSHKey(this, key);
    };
}

export default SSHKeyEndpoint;