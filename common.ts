
'use strict';
import DigitalOcean from './digitalOcean';
import { AxiosError } from 'axios';
/*interfaces*/


export interface IImage {
    readonly id: number;
    readonly name: string;
    readonly type: string;
    readonly distribution: string;
    readonly slug: string | null;
    readonly public: boolean;
    readonly regions: Array<string>;
    readonly min_disk_size: number;
    readonly size_gigabytes: number;
    readonly created_at: Date;
}

// export interface IParamsByName{
//     name: string;
//     region: string;
// }
export interface ICollection<C> {
    minPage: number;
    curPage: number;
    maxPage: number;
    perPage: number;
    total: number;
    items: Array<C>;
}
export interface ICollectionParams {
    page: number;
    per_page?: number;
};

/*endpoints interfaces*/
export interface IEndpoint {
    readonly digitalOcean: DigitalOcean;
    readonly path: string;
    //getResourceInstance()?;
}
export interface IAccountEndpoint extends IEndpoint {
    get();
}


export interface IDomainEndpoint extends IEndpoint {
    list();
    create();
    get();
    delete();
}
export interface IDomainRecordEndpoint extends IEndpoint {
    listByDomain();
    create();
    getById();
    updateById();
    deleteById();
}
export interface IDropletEndpoint extends IEndpoint {
    create();
    createMulti();
    getById();
    list();
    listByTag();
    listKernelsByDropletId();
    listSnapshotsByDropletId();
    listBackupsByDropletId();
    listActionsByDropletId();
    deleteById();
    deleteByTag();
    listNeighborsByDropletId();
    listNeighbors();
    enableBackupsById();
    disableBackupsById();
    rebootById();
    powerCycleById();
    shutdownById();
    powerOffById();
    powerOnById();
    restoreById();
    passwordResetById();
    resizeById();
    rebuildById();
    renameById();
    changeKernelById();
    enableIPv6ById();
    enablePrivateNetworkingById();
    snapshotById();
    actionsByTag();
    getActionById();
}
export interface IImageEndpoint extends IEndpoint {
    delete(id: number);
    get(id: number);
    get(slug: string);
    /*list(page: number, perPage?: number);*/
    /*list(type: string, page: number, perPage?: number);*/
    /*listActions(id: number, page: number, perPage?: number);*/
    /*listPrivate(page: number, perPage?: number);*/
    /*update(id: number, specs: IImageUpdateSpecs);*/
}
export interface ILoadBalancerEndpoint extends IEndpoint {
    create();
    createWithTag();
    getById();
    list();
    updateById();
    deleteById();
    addDroplet();
    removeDroplet();
    addRules();
    removeRules();
}



export interface IFloatingIPEndpoint extends IEndpoint {
    list();
    createAndAssignToDroplet();
    createAndReserve();
    getById();
    deleteById();
    assignToDroplet();
    unassignFromDroplet();
    listActions();
    getActionById();
}


/*
Account
Action
Volume
Certificate
Domain
DomainRecord
Droplet
Image
LoadBalancer
Snapshot
SSHKeys
Region
Size
FloatingIP
Tag
*/


/*validator*/

/*error handler*/
export function errorHandler(error: AxiosError) {
    let res = error.response;
    if (!res) return Promise.reject(error);
    error.message = [
        res.status || '',
        res.statusText || ''
    ].join(' - ');
    if (res.data && res.data.id) {
        let data = res.data;
        let id = ['[', data.id, ']'].join('');
        error.message = [error.message, id].join(': ');
        if (data.message) {
            error.message = [
                error.message,
                data.message
            ].join(' ');
        }
    }
    return Promise.reject(error);
};