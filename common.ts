
'use strict';
import DigitalOcean from './digitalOcean';
import { AxiosError } from 'axios';
/*interfaces*/




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