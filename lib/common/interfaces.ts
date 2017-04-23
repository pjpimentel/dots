'use strict';
/**
 * Header interface
 * 
 * @export
 * @interface IHeader
 */
export interface IHeader{
    key: string;
    value: string;
}
/**
 * Axios config interface
 * 
 * @export
 * @interface IaxiosConfig
 */
export interface IaxiosConfig{
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
export interface IAPISpecs{
    headers: Array<IHeader>;
    host: string;
    prefix: string;
    protocol: 'http'|'https';
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
export interface ICollection<C>{
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
export interface ICollectionParams{
    page: number;
    per_page: number;
};
/**
 * Resource raw object.
 * 
 * @export
 * @interface IResource
 */
export interface IResource{
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