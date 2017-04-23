'use strict';
import { ISSHKey } from './interfaces';
import SSHKeyEndpoint from './endpoint';
import Asset from '../common/asset';
/**
 * SSHKey asset.
 * 
 * @class SSHKey
 * @extends {Assset<SSHKeyEndpoint>}
 * @implements {ISSHKey}
 */
class SSHKey extends Asset<SSHKeyEndpoint> implements ISSHKey{
    readonly fingerprint: string;
    readonly id: number;
    name: string;
    readonly public_key: string;
    /**
     * Creates an instance of SSHKey.
     * @param {SSHKeyEndpoint} endpoint 
     * @param {ISSHKey} key 
     * 
     * @memberOf SSHKey
     */
    constructor(endpoint: SSHKeyEndpoint, key: ISSHKey){
        super(endpoint),
        this.fingerprint = key.fingerprint;
        this.id = key.id;
        this.name = key.name;
        this.public_key = key.public_key;
    }
    /**
     * Delete key.
     * 
     * @returns {Promise<void>} 
     * 
     * @memberOf SSHKey
     */
    public async delete(): Promise<void>{
        return this.endpoint.delete(this.id);
    }
    /**
     * Update key name.
     * 
     * @param {string} name 
     * @returns {Promise<void>} 
     * 
     * @memberOf SSHKey
     */
    public async setName(name: string): Promise<void>{
        await this.endpoint.update(this.id, {name: name});
        this.name = name;
    }
}

export default SSHKey;
