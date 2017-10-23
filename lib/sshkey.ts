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
    public create(specs: ISSHKeySpecs): Observable<ISSHKey> {
        let url: string = this.prefix;
        let promise = this.api.post(url, specs);
        return this.fromPromise(promise, 'ssh_key', isSSHKey);
    };
    /**
     * Delete SSH key by fingerprint.
     *
     * @param {string} fingerprint
     * @returns {Observable<void>}
     *
     * @memberof SSHKeyEndpoint
     */
    public delete(fingerprint: string): Observable<void>;
    /**
     * Delete SSH key by id.
     *
     * @param {number} id
     * @returns {Observable<void>}
     *
     * @memberof SSHKeyEndpoint
     */
    public delete(id: number): Observable<void>;
    public delete(uid: number | string): Observable<void> {
        let url: string = `${this.prefix}/${uid}`;
        let promise = this.api.delete(url);
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
    public list(page: number, perPage?: number): Observable<ICollection<ISSHKey>> {
        let url: string = this.prefix;
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
    public get(fingerprint: string): Observable<ISSHKey>;
    /**
     * Get SSH Key by id.
     *
     * @param {number} id
     * @returns {Observable<ISSHKey>}
     *
     * @memberof SSHKeyEndpoint
     */
    public get(id: number): Observable<ISSHKey>;
    public get(uid: number | string): Observable<ISSHKey> {
        let url: string = `${this.prefix}/${uid}`;
        let promise = this.api.get(url);
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
    public update(fingerprint: string, specs: ISSHKeySpecs): Observable<ISSHKey>;
    /**
     * Update SSH Key by id.
     *
     * @param {number} id
     * @param {ISSHKeySpecs} specs
     * @returns {Observable<ISSHKey>}
     *
     * @memberof SSHKeyEndpoint
     */
    public update(id: number, specs: ISSHKeySpecs): Observable<ISSHKey>;
    public update(uid: number | string, specs: ISSHKeySpecs): Observable<ISSHKey> {
        let url: string = `${this.prefix}/${uid}`;
        let promise = this.api.put(url, specs);
        return this.fromPromise(promise, 'ssh_key', isSSHKey);
    };
}