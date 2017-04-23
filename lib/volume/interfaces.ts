'use strict';
import {IRegion} from '../region/interfaces';
/**
 * Volume raw object.
 * 
 * @export
 * @interface IVolume
 */
export interface IVolume {
    readonly created_at: Date;
    readonly description: string;
    readonly droplet_ids: Array<number>;
    readonly id: string;
    readonly name: string;
    readonly region: IRegion; //TODO: change this type
    readonly size_gigabytes: number;
}
/**
 * Volume endpoint methods.
 * 
 * @export
 * @interface IVolumeEndpoint
 * @extends {IEndpoint}
 */
export interface IVolumeEndpoint {
    attach(id: string, dropletId: number);
    attach(name: string, dropletId: number, region: string);
    create(specs: IVolumeSpecs);
    createSnapshot(id: string, snapshotName: string);
    delete(id: string);
    delete(name: string, region?: string);
    detach(id: string, dropletId: number);
    detach(name: string, dropletId: number, region: string);
    getActionById(volumeId: string, actionId: number);
    get(id: string);
    list(page: number, perPage?: number);
    listActions(volumeId: string, page: number, perPage?: number);
    listByName(name: string, region: string, page: number, perPage?: number);
    listSnapshots(volumeId: string, page: number, perPage?: number);
    resize(id: string, size: number);
}
/**
 * Volume specs.
 * 
 * @export
 * @interface IVolumeSpecs
 */
export interface IVolumeSpecs {
    description?: string;
    name: string;
    region?: string;
    size_gigabytes: number;
    snapshot_id?: string;
}