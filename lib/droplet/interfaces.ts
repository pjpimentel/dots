import { IRegion } from '../region/interfaces';
import { IImage } from '../image/interfaces';
import { ISize } from '../size/interfaces';
export interface IDroplet {
    readonly backup_ids: Array<string>;
    readonly created_at: string;
    readonly disk: number;
    readonly features: Array<string>;
    readonly id: number;
    readonly image: IImage;
    readonly kernel: any | null;
    readonly locked: boolean;
    readonly memory: number;
    readonly name: string;
    readonly networks: object;
    readonly next_backup_window: any | null;
    readonly region: IRegion;
    readonly size_slug: string;
    readonly size: ISize;
    readonly snapshot_ids: Array<string>;
    readonly status: string;
    readonly tags: Array<string>;
    readonly vcpus: number;
    readonly volume_ids: Array<string>;
}
export interface IDropletEndpoint {
    // actionsByTag();
    changeKernel(id: number, kernelId: number);
    create(specs: IDropletSpecs);
    // createMulti();
    createSnapshot(id: number, snapshotMame: string);
    delete(id: number);
    delete(tag: string);
    disableBackups(id: number);
    enableBackups(id: number);
    enableIPv6(id: number);
    enablePrivateNetworking(id: number);
    get(id: number);
    getActionById(dropletId: number, actionId: number);
    list(page: number, perPage?: number);
    list(tag: string, page: number, perPage?: number);
    // listActionsByDropletId();
    // listBackupsByDropletId();
    listImages(
        id: number,
        type: 'snapshots' | 'backups' | string,
        page: number,
        perPage?: number
    );
    // listKernelsByDropletId();
    listNeighbors();
    listNeighborsByDropletId(id: number);
    passwordReset(id: number);
    powerCycle(id: number);
    powerOff(id: number);
    powerOn(id: number);
    reboot(id: number);
    rebuild(id: number, imageSlug: string);
    rebuild(id: number, imageId: number);
    rename(id: number, newName: string);
    resize(id: number, sizeSlug: string, resizeDisk: boolean);
    restore(id: number, imageSlug: string);
    restore(id: number, imageId: number);
    shutdown(id: number);
}
export type Neighbors = Array<IDroplet>;
/**
 * Droplet specs.
 *
 * @export
 * @interface IDropletSpecs
 */
export interface IDropletSpecs {
    name: string;
    region: string;
    size: string;
    image: string|number;
    ssh_keys?: Array<string>;
    backups?: boolean;
    ipv6?: boolean;
    private_networking?: boolean;
    user_data?: Array<string>;
    monitoring?: boolean;
    volumes?: Array<string>;
    tags?: Array<string>;
}