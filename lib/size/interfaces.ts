'use strict';
/**
 * Size raw object.
 * 
 * @export
 * @interface ISize
 */
export interface ISize{
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
 * Size endpoint methods.
 * 
 * @export
 * @interface ISizeEndpoint
 * @extends {IEndpoint}
 */
export interface ISizeEndpoint{
    list(page: number, perPage?: number);
}