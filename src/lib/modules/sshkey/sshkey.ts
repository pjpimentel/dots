import { Observable } from 'rxjs';

import Endpoint from './common/endpoint';
import { ICollection, ISSHKey, ISSHKeyEndpoint, ISSHKeySpecs } from './common/interfaces';
import { isSSHKey } from './common/type.guards';
import DigitalOcean from './digitalOcean';

/**
 * SSH Key endpoint;
 *
 * @class SSHKeyEndpoint
 * @extends {Endpoint}
 * @implements {ISSHKeyEndpoint}
 */
export default class SSHKeyEndpoint extends Endpoint implements ISSHKeyEndpoint {
    /**
     * Creates an instance of SSHKeyEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof SSHKeyEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/account/keys');
    }
    /**
     * Create new ssh key.
     *
     * @param {ISSHKeySpecs} specs
     * @returns {Observable<ISSHKey>}
     *
     * @memberof SSHKeyEndpoint
     */
    create(specs: ISSHKeySpecs): Observable<ISSHKey> {
        const url: string = this.prefix;
        const promise = this.api.post(url, specs);
        return this.fromPromise(promise, 'ssh_key', isSSHKey);
    }
    /**
     * Delete SSH key by fingerprint.
     *
     * @param {string} fingerprint
     * @returns {Observable<void>}
     *
     * @memberof SSHKeyEndpoint
     */
    delete(fingerprint: string): Observable<void>;
    /**
     * Delete SSH key by id.
     *
     * @param {number} id
     * @returns {Observable<void>}
     *
     * @memberof SSHKeyEndpoint
     */
    delete(id: number): Observable<void>;
    delete(uid: number | string): Observable<void> {
        const url = `${this.prefix}/${uid}`;
        const promise = this.api.delete(url);
        return this.fromPromise(promise);
    }
    /**
     * List all ssh keys.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<ISSHKey>>}
     *
     * @memberof SSHKeyEndpoint
     */
    list(page: number, perPage?: number): Observable<ICollection<ISSHKey>> {
        const url: string = this.prefix;
        return this.getCollection<ISSHKey>(page, perPage, url, 'ssh_keys', isSSHKey);
    }
    /**
     * Get SSH Key by fingerprint.
     *
     * @param {string} fingerprint
     * @returns {Observable<ISSHKey>}
     *
     * @memberof SSHKeyEndpoint
     */
    get(fingerprint: string): Observable<ISSHKey>;
    /**
     * Get SSH Key by id.
     *
     * @param {number} id
     * @returns {Observable<ISSHKey>}
     *
     * @memberof SSHKeyEndpoint
     */
    get(id: number): Observable<ISSHKey>;
    get(uid: number | string): Observable<ISSHKey> {
        const url = `${this.prefix}/${uid}`;
        const promise = this.api.get(url);
        return this.fromPromise(promise, 'ssh_key', isSSHKey);
    }
    /**
     * Update SSH Key by fingerprint.
     *
     * @param {string} fingerprint
     * @param {ISSHKeySpecs} specs
     * @returns {Observable<ISSHKey>}
     *
     * @memberof SSHKeyEndpoint
     */
    update(fingerprint: string, specs: ISSHKeySpecs): Observable<ISSHKey>;
    /**
     * Update SSH Key by id.
     *
     * @param {number} id
     * @param {ISSHKeySpecs} specs
     * @returns {Observable<ISSHKey>}
     *
     * @memberof SSHKeyEndpoint
     */
    update(id: number, specs: ISSHKeySpecs): Observable<ISSHKey>;
    update(uid: number | string, specs: ISSHKeySpecs): Observable<ISSHKey> {
        const url = `${this.prefix}/${uid}`;
        const promise = this.api.put(url, specs);
        return this.fromPromise(promise, 'ssh_key', isSSHKey);
    }
}
