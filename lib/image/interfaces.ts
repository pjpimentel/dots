'use strict';
/**
 * Image raw object.
 * 
 * @export
 * @interface IImage
 */
export interface IImage {
    readonly created_at: Date;
    readonly distribution: string;
    readonly id: number;
    readonly min_disk_size: number;
    readonly name: string;
    readonly public: boolean;
    readonly regions: Array<string>;
    readonly size_gigabytes: number;
    readonly slug: string | null;
    readonly type: string;
}
/**
 * Image endpoint methods.
 * 
 * @export
 * @interface IImageEndpoint
 */
export interface IImageEndpoint{
    convertToSnapshot(id: number);
    delete(id: number);
    get(id: number);
    get(slug: string);
    getActionById(id: number, actionId: number);
    list(page: number, perPage?: number);
    list(type: string, page: number, perPage?: number);
    listActions(id: number, page: number, perPage?: number);
    listPrivate(page: number, perPage?: number);
    transfer(id: number, regionSlug: string);
    update(id: number, specs: IImageUpdateSpecs);
}
/**
 * Image update specs.
 * 
 * @export
 * @interface IImageUpdateSpecs
 */
export interface IImageUpdateSpecs{
    name: string    
}