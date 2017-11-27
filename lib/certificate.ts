import { Observable } from "rxjs/Observable";

import Endpoint from "./common/endpoint";
import { ICertificate, ICertificateEndpoint, ICertificateSpecs, ICollection } from "./common/interfaces";
import { isCertificate } from "./common/type.guards";
import DigitalOcean from "./digitalOcean";

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
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, "/account/certificates");
    }
    /**
     * Create new certificate.
     *
     * @param {ICertificateSpecs} specs
     * @returns {Observable<ICertificate>}
     *
     * @memberof CertificateEndpoint
     */
    public create(specs: ICertificateSpecs): Observable<ICertificate> {
        const url: string = this.prefix;
        const promise = this.api.post(url, specs);
        return this.fromPromise(promise, "certificate", isCertificate);
    }
    /**
     * Delete certificate by id.
     *
     * @param {string} id
     * @returns {Observable<void>}
     *
     * @memberof CertificateEndpoint
     */
    public delete(id: string): Observable<void> {
        const url: string = `${this.prefix}/${id}`;
        const promise = this.api.delete(url);
        return this.fromPromise(promise);
    }
    /**
     * List all certificates.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<ICertificate>>}
     *
     * @memberof CertificateEndpoint
     */
    public list(page: number, perPage?: number): Observable<ICollection<ICertificate>> {
        const url: string = this.prefix;
        return this.getCollection<ICertificate>(page, perPage, url, "Certificates");
    }
    /**
     * Get certificate by id.
     *
     * @param {string} id
     * @returns {Observable<ICertificate>}
     *
     * @memberof CertificateEndpoint
     */
    public get(id: string): Observable<ICertificate> {
        const url: string = `${this.prefix}/${id}`;
        const promise = this.api.get(url);
        return this.fromPromise(promise, "certificate", isCertificate);
    }
}
