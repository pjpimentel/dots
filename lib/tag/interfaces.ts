'use strict';
import { IResource } from '../common/interfaces';
/**
 * Tag raw object.
 * 
 * @export
 * @interface ITag
 */
export interface ITag {
    readonly name: string;
    readonly resources: any;
}
/**
 * Tag endpoint methods.
 * 
 * @export
 * @interface ITagEndpoint
 */
export interface ITagEndpoint {
    create(specs: ITagSpecs);
    delete(name: string);
    get(name: string);
    list(page: number, perPage?: number);
    tagResource(name: string, resouce: IResource);
    tagResource(name: string, resouceId: number | string, resourcetype: string);
    tagResource(name: string, resouces: Array<IResource>);
    untagResource(name: string, resouce: IResource);
    untagResource(name: string, resouceId: number | string, resourcetype: string);
    untagResource(name: string, resouces: Array<IResource>);
}
/**
 * Tag specs.
 * 
 * @export
 * @interface ITagSpecs
 */
export interface ITagSpecs {
    name: string;
}