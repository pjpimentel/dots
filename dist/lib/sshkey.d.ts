import { Observable } from "rxjs/Observable";
import Endpoint from './common/endpoint';
import { ICollection, ISSHKey, ISSHKeyEndpoint, ISSHKeySpecs } from './common/interfaces';
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
    constructor(digitalOcean: DigitalOcean);
    /**
     * Create new ssh key.
     *
     * @param {ISSHKeySpecs} specs
     * @returns {Observable<ISSHKey>}
     *
     * @memberof SSHKeyEndpoint
     */
    create(specs: ISSHKeySpecs): Observable<ISSHKey>;
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
    /**
     * List all ssh keys.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<ISSHKey>>}
     *
     * @memberof SSHKeyEndpoint
     */
    list(page: number, perPage?: number): Observable<ICollection<ISSHKey>>;
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
}
