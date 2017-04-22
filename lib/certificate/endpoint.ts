
'use strict';
import {
    ICertificate,
    ICertificateEndpoint,
    ICertificateSpecs
} from './interfaces';
import Certificate from './certificate';
import DigitalOcean from '../digitalOcean';
import Endpoint from '../common/endpoint';
import {ICollection} from "../common/interfaces";
/**
 * Certificate endpoint.
 * 
 * @class CertificateEndpoint
 * @extends {Endpoint}
 * @implements {ICertificateEndpoint}
 */
class CertificateEndpoint extends Endpoint implements ICertificateEndpoint{
    /**
     * Creates an instance of CertificateEndpoint.
     * @param {DigitalOcean} digitalOcean 
     * 
     * @memberOf CertificateEndpoint
     */
    constructor(digitalOcean: DigitalOcean){
        super(digitalOcean, '/account/keys');
    }
    /**
     * Create new certificate.
     * 
     * @param {ICertificateSpecs} specs 
     * @returns {Promise<Certificate>} 
     * 
     * @memberOf CertificateEndpoint
     */
    public async create(specs: ICertificateSpecs): Promise<Certificate>{
        let url: string = this.prefix;
        let res = await this.api.post(url, specs);
        if(!res.data) throw this.api.invalidResponse;
        let cert: ICertificate = res.data.certificate;
        return new Certificate(this, cert);
    };
    /**
     * Delete certificate by id.
     * 
     * @param {string} id 
     * @returns {Promise<void>} 
     * 
     * @memberOf CertificateEndpoint
     */
    public async delete(id: string): Promise<void>{
        let url = [this.prefix,id].join('/');
        await this.api.delete(url);
        return;
    }
    /**
     * List all certificates.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Certificate>>} 
     * 
     * @memberOf CertificateEndpoint
     */
    public async list(
        page: number,
        perPage?: number
    ): Promise<ICollection<Certificate>>{
        let collection: ICollection<ICertificate>|ICollection<Certificate>;
        let url: string = this.prefix;
        collection = await this.getCollection<ICertificate>(
            page,
            perPage,
            url,
            'Certificates'
        );
        collection = this.upcastCollection<ICertificate,Certificate>(collection, Certificate);
        return <ICollection<Certificate>> collection;
    }
    /**
     * Get certificate by id.
     * 
     * @param {string} id 
     * @returns {Promise<Certificate>} 
     * 
     * @memberOf CertificateEndpoint
     */
    public async get(id: string): Promise<Certificate>{
        let url: string = [this.prefix,id].join('/');
        let res = await this.api.get(url);
        if(!res.data) throw this.api.invalidResponse;
        let cert: ICertificate = <ICertificate> res.data.certificate;
        return new Certificate(this, cert);
    }
}

export default CertificateEndpoint;