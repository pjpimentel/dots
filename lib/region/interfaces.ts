'use strict';
/**
 * Region raw object.
 * 
 * @export
 * @interface IRegion
 */
export interface IRegion{
    readonly slug: string;
    readonly name: string;
    readonly sizes: Array<string>;
    readonly available: boolean;
    readonly features: Array<string>;
}
/**
 * Region endpoint methods.
 * 
 * @export
 * @interface IRegionEndpoint
 */
export interface IRegionEndpoint{
    list(page: number, perPage?: number);
}