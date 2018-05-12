import { Observable } from 'rxjs';
import Endpoint from './common/endpoint';
import { ICertificate, ICertificateEndpoint, ICertificateSpecs, ICollection } from './common/interfaces';
import DigitalOcean from './digitalOcean';
/**
 * Certificate endpoint.
 *
 * @class CertificateEndpoint
 * @extends {Endpoint}
 * @implements {ICertificateEndpoint}
 */
export default class CertificateEndpoint extends Endpoint implements ICertificateEndpoint {
    /**
     * Creates an instance of CertificateEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof CertificateEndpoint
     */
    constructor(digitalOcean: DigitalOcean);
    /**
     * Create new certificate.
     *
     * @param {ICertificateSpecs} specs
     * @returns {Observable<ICertificate>}
     *
     * @memberof CertificateEndpoint
     */
    create(specs: ICertificateSpecs): Observable<ICertificate>;
    /**
     * Delete certificate by id.
     *
     * @param {string} id
     * @returns {Observable<void>}
     *
     * @memberof CertificateEndpoint
     */
    delete(id: string): Observable<void>;
    /**
     * List all certificates.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<ICertificate>>}
     *
     * @memberof CertificateEndpoint
     */
    list(page: number, perPage?: number): Observable<ICollection<ICertificate>>;
    /**
     * Get certificate by id.
     *
     * @param {string} id
     * @returns {Observable<ICertificate>}
     *
     * @memberof CertificateEndpoint
     */
    get(id: string): Observable<ICertificate>;
}
