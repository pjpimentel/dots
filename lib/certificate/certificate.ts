
'use strict';
import {ICertificate} from './interfaces';
import CertificateEndpoint from './endpoint';
import Asset from '../common/asset';
/**
 * Certificate asset.
 * 
 * @class Certificate
 * @extends {Asset<CertificateEndpoint>}
 * @implements {ICertificate}
 */
class Certificate extends Asset<CertificateEndpoint> implements ICertificate{
    readonly created_at: Date;
    readonly id: string;
    readonly name: string;
    readonly not_after: Date;
    readonly sha1_fingerprint: string;
    /**
     * Creates an instance of Certificate.
     * @param {CertificateEndpoint} endpoint 
     * @param {ICertificate} certificate 
     * 
     * @memberOf Certificate
     */
    constructor(endpoint: CertificateEndpoint, certificate: ICertificate){
        super(endpoint),
        this.created_at = certificate.created_at;
        this.id = certificate.id;
        this.name = certificate.name;
        this.not_after = certificate.not_after;
        this.sha1_fingerprint = certificate.sha1_fingerprint;
    }
    /**
     * Delete certificate
     * 
     * @returns {Promise<void>} 
     * 
     * @memberOf Certificate
     */
    public async delete(): Promise<void>{
        return this.endpoint.delete(this.id);
    }
}

export default Certificate
