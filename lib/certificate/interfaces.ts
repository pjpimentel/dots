
'use strict';
/**
 * Certificate raw object.
 * 
 * @export
 * @interface ICertificate
 */
export interface ICertificate{
    readonly created_at: Date;
    readonly id: string;
    readonly name: string;
    readonly not_after: Date;
    readonly sha1_fingerprint: string;
}
/**
 * Certificate endpoint methods
 * 
 * @export
 * @interface ICertificateEndpoint
 */
export interface ICertificateEndpoint{
    create(specs: ICertificateSpecs);
    delete(id: string);
    get(id: string);
    list(page: number, perPage?: number);
}
/**
 * Certificate specs
 * 
 * @export
 * @interface ICertificateSpecs
 */
export interface ICertificateSpecs{
    certificate_chain?: string;
    leaf_certificate: string;
    name: string;
    private_key: string;
}