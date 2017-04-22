
'use strict';
/**
 * SSH Key raw object.
 * 
 * @export
 * @interface ISSHKey
 */
export interface ISSHKey {
    readonly fingerprint: string;
    readonly id: number;
    name: string;
    readonly public_key: string;
}
/**
 * SSH Key 
 * 
 * @export
 * @interface ISSHKeyEndpoint
 * @extends {IEndpoint}
 */
export interface ISSHKeyEndpoint {
    create(specs: ISSHKeySpecs);
    delete(id: number);
    get(fingerprint: string);
    get(id: number);
    list(page: number, perPage?: number);
    update(fingerprint: string, specs: ISSHKeySpecs);
    update(id: number, specs: ISSHKeySpecs);
}
/**
 * SSH Key specs
 * 
 * @export
 * @interface ISSHKeySpecs
 */
export interface ISSHKeySpecs {
    name: string;
    public_key?: string;
}
