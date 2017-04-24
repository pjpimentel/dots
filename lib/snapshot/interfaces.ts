'use strict';
/**
 * Snapshot raw object.
 * 
 * @export
 * @interface ISnapshot
 */
export interface ISnapshot{
    readonly created_at: string;
    readonly id: string;
    readonly min_disk_size: number;
    readonly name: string;
    readonly regions: Array<string>;
    readonly resource_id: string;
    readonly resource_type: string;
    readonly size_gigabytes: number;
}
/**
 * Snapshot endpoint methods.
 * 
 * @export
 * @interface ISnapshotEndpoint
 */
export interface ISnapshotEndpoint{
    delete(id: string);
    get(id: string);
    list(page: number, perPage?: number);
    list(resourceType: string, page: number, perPage?: number);
}