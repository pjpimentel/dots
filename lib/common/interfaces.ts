import { Observable } from 'rxjs';
/**
 * Header interface
 *
 * @export
 * @interface IHeader
 */
export interface IHeader {
    key: string;
    value: string;
}
/**
 * Axios config interface
 *
 * @export
 * @interface IaxiosConfig
 */
export interface IaxiosConfig {
    baseURL: string;
    timeout: number;
    headers: any;
}
/**
 * Specs to API constructor
 *
 * @export
 * @interface IAPISpecs
 */
export interface IAPISpecs {
    headers: Array<IHeader>;
    host: string;
    prefix: string;
    protocol: 'http' | 'https';
    timeout: number;
    invalidResponse: Error;
}
/**
 * Collection interface [used in paginated responses]
 *
 * @export
 * @interface ICollection
 * @template C
 */
export interface ICollection<C> {
    minPage: number;
    curPage: number;
    maxPage: number;
    perPage: number;
    total: number;
    items: Array<C>;
}
/**
 * Collection request default Params
 *
 * @export
 * @interface ICollectionParams
 */
export interface ICollectionParams {
    page: number;
    per_page: number;
};
/**
 * Resource raw object.
 *
 * @export
 * @interface IResource
 */
export interface IResource {
    resource_id: string;
    resource_type: string;
}
/**
 * Validator of IResource.
 *
 * @export
 * @param {*} arg
 * @returns {arg is IResource}
 */
export function isResource(arg: any): arg is IResource {
    if ((arg as IResource).resource_id === undefined) return false;
    if ((arg as IResource).resource_type === undefined) return false;
    return true;
}
/**
 * Validator of Array<IResource>.
 *
 * @export
 * @param {*} arg
 * @returns {arg is Array<IResource>}
 */
export function isResourceArray(arg: any): arg is Array<IResource> {
    if (!Array.isArray(arg)) return false;
    for (let i = arg.length - 1; i >= 0; i--)
        if (!isResource(arg[i])) return false;
    return true
}
/********************************************/
/**
 * RAW
 */
/**
 * Account raw object
 *
 * @export
 * @interface IAccount
 */
export interface IAccount {
    droplet_limit: number;
    email_verified: boolean;
    email: string;
    floating_ip_limit: number;
    status_message: string;
    status: string;
    uuid: string;
}
/**
 * Size raw object.
 *
 * @export
 * @interface ISize
 */
export interface ISize {
    readonly slug: string;
    readonly available: boolean;
    readonly transfer: number;
    readonly price_monthly: number;
    readonly price_hourly: number;
    readonly memory: number;
    readonly vcpus: number;
    readonly disk: number;
    readonly regions: Array<string>;
}
/**
 * ENDPOINTS
 */
'use strict';
/**
 * Account endpoint methods
 *
 * @export
 * @interface IAccountEndpoint
 */
export interface IAccountEndpoint {
    get(): Observable<IAccount>;
}
/**
 * Size endpoint methods.
 *
 * @export
 * @interface ISizeEndpoint
 * @extends {IEndpoint}
 */
export interface ISizeEndpoint {
    list(page: number, perPage?: number): Observable<ICollection<ISize>>;
}
