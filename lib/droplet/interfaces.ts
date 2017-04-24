'use strict';
import {IRegion} from '../region/interfaces';
import {IImage} from '../image/interfaces';
import {ISize} from '../size/interfaces';
export interface IDroplet{
    readonly backup_ids: Array<string>;
    readonly created_at: string;
    readonly disk: number;
    readonly features: Array<string>;
    readonly id: number;
    readonly image: IImage;
    readonly kernel: any|null;
    readonly locked: boolean;
    readonly memory: number;
    readonly name: string;
    readonly networks: object;
    readonly next_backup_window: any|null;
    readonly region: IRegion;
    readonly size_slug: string;
    readonly size: ISize;
    readonly snapshot_ids: Array<string>;
    readonly status: string;
    readonly tags: Array<string>;
    readonly vcpus: number;
    readonly volume_ids: Array<string>;
}
export interface IDropletEndpoint{
    // actionsByTag();
    // changeKernelById();
    // create();
    // createMulti();
    createSnapshot(id: number, snapshotMame: string);
    // deleteById();
    // deleteByTag();
    // disableBackupsById();
    // enableBackupsById();
    // enableIPv6ById();
    // enablePrivateNetworkingById();
    get(id: number);
    // getActionById();
    list(page: number, perPage?: number);
    list(tag: string, page: number, perPage?: number);
    // listActionsByDropletId();
    // listBackupsByDropletId();
    listImages(
        id: number,
        type: 'snapshots'|'backups'|string,
        page: number,
        perPage?: number
    );
    // listKernelsByDropletId();
    // listNeighbors();
    // listNeighborsByDropletId();
    // passwordReset();
    // powerCycle();
    // powerOff();
    // powerOn();
    // reboot();
    // rebuild();
    // rename();
    // resize();
    // restore();
    // shutdown();
}
