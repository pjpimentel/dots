import { Observable } from 'rxjs';
/**
 * Header interface
 *
 * @export
 * @interface IHeader
 */
export interface IHeader {
    key: string;
    value: string;
}
/**
 * Axios config interface
 *
 * @export
 * @interface IaxiosConfig
 */
export interface IaxiosConfig {
    baseURL: string;
    timeout: number;
    headers: any;
}
/**
 * Specs to API constructor
 *
 * @export
 * @interface IAPISpecs
 */
export interface IAPISpecs {
    headers: IHeader[];
    host: string;
    prefix: string;
    protocol: 'http' | 'https';
    timeout: number;
    invalidResponse: Error;
}
/**
 * Collection interface [used in paginated responses]
 *
 * @export
 * @interface ICollection
 * @template C
 */
export interface ICollection<C> {
    curPage: number;
    items: C[];
    maxPage: number;
    minPage: number;
    perPage: number;
    total: number;
}
/**
 * Collection request default Params
 *
 * @export
 * @interface ICollectionParams
 */
export interface ICollectionParams {
    page: number;
    per_page: number;
}
/**
 * Resource raw object.
 *
 * @export
 * @interface IResource
 */
export interface IResource {
    resource_id: string;
    resource_type: string;
}

/********************************************/
/**
 * RAW
 */
/**
 * Kernel raw object
 *
 * @export
 * @interface IKernel
 */
export interface IKernel {
    id: number;
    name: string;
    version: string;
}
/**
 * Account raw object
 *
 * @export
 * @interface IAccount
 */
export interface IAccount {
    droplet_limit: number;
    email_verified: boolean;
    email: string;
    floating_ip_limit: number;
    status_message: string;
    status: string;
    uuid: string;
}
/**
 * Size raw object.
 *
 * @export
 * @interface ISize
 */
export interface ISize {
    slug: string;
    available: boolean;
    transfer: number;
    price_monthly: number;
    price_hourly: number;
    memory: number;
    vcpus: number;
    disk: number;
    regions: string[];
}
/**
 * Tag raw object.
 *
 * @export
 * @interface ITag
 */
export interface ITag {
    name: string;
    resources: object;
}
/**
 * Region raw object.
 *
 * @export
 * @interface IRegion
 */
export interface IRegion {
    slug: string;
    name: string;
    sizes: string[];
    available: boolean;
    features: string[];
}
/**
 * Action raw object
 *
 * @export
 * @interface IAction
 */
export interface IAction {
    completed_at: string;
    id: number;
    region_slug: string;
    resource_id: number;
    resource_type: string;
    started_at: string;
    status: string;
    type: string;
}
/**
 * SSH Key raw object.
 *
 * @export
 * @interface ISSHKey
 */
export interface ISSHKey {
    fingerprint: string;
    id: number;
    name: string;
    public_key: string;
}

/**
 * Volume raw object.
 *
 * @export
 * @interface IVolume
 */
export interface IVolume {
    created_at: string;
    description: string;
    droplet_ids: number[];
    id: string;
    name: string;
    region: IRegion; // TODO: change this type
    size_gigabytes: number;
}
/**
 * Snapshot raw object.
 *
 * @export
 * @interface ISnapshot
 */
export interface ISnapshot {
    created_at: string;
    id: string;
    min_disk_size: number;
    name: string;
    regions: string[];
    resource_id: string;
    resource_type: string;
    size_gigabytes: number;
}
/**
 * Image raw object.
 *
 * @export
 * @interface IImage
 */
export interface IImage {
    created_at: string;
    distribution: string;
    id: number;
    min_disk_size: number;
    name: string;
    public: boolean;
    regions: string[];
    size_gigabytes: number;
    slug: string | null;
    type: string;
}
/**
 * Certificate raw object.
 *
 * @export
 * @interface ICertificate
 */
export interface ICertificate {
    created_at: string;
    dns_names: string[];
    id: string;
    name: string;
    not_after: string;
    sha1_fingerprint: string;
    state: string;
    type: string;
}
/**
 * Droplet raw object.
 *
 * @export
 * @interface IDroplet
 */
export interface IDroplet {
    backup_ids: string[];
    created_at: string;
    disk: number;
    features: string[];
    id: number;
    image: IImage;
    kernel: IKernel | null;
    locked: boolean;
    memory: number;
    name: string;
    networks: object;
    next_backup_window: object | null; // TODO: get object spec
    region: IRegion;
    size_slug: string;
    size: ISize;
    snapshot_ids: string[];
    status: string;
    tags: string[];
    vcpus: number;
    volume_ids: string[];
}
/**
 * Specs
 */
/**
 * Tag specs.
 *
 * @export
 * @interface ITagSpecs
 */
export interface ITagSpecs {
    name: string;
}
/**
 * SSH Key specs
 *
 * @export
 * @interface ISSHKeySpecs
 */
export interface ISSHKeySpecs {
    name: string;
    public_key?: string;
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
/**
 * Image update specs.
 *
 * @export
 * @interface IImageUpdateSpecs
 */
export interface IImageUpdateSpecs {
    name: string;
}
/**
 * Certificate specs
 *
 * @export
 * @interface ICertificateSpecs
 */
export interface ICertificateSpecs {
    certificate_chain?: string;
    leaf_certificate: string;
    name: string;
    private_key: string;
}
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
    image: string | number;
    ssh_keys?: string[];
    backups?: boolean;
    ipv6?: boolean;
    private_networking?: boolean;
    user_data?: string[];
    monitoring?: boolean;
    volumes?: string[];
    tags?: string[];
}
/**
 * ENDPOINTS
 */
/**
 * Account endpoint methods
 *
 * @export
 * @interface IAccountEndpoint
 */
export interface IAccountEndpoint {
    get(): Observable<IAccount>;
}
/**
 * Size endpoint methods.
 *
 * @export
 * @interface ISizeEndpoint
 * @extends {IEndpoint}
 */
export interface ISizeEndpoint {
    list(page: number, perPage?: number): Observable<ICollection<ISize>>;
}
/**
 * Tag endpoint methods.
 *
 * @export
 * @interface ITagEndpoint
 */
export interface ITagEndpoint {
    create(specs: ITagSpecs): Observable<ITag>;
    delete(name: string): Observable<void>;
    get(name: string): Observable<ITag>;
    list(page: number, perPage?: number): Observable<ICollection<ITag>>;
    tagResource(name: string, resouce: IResource): Observable<void>;
    tagResource(name: string, resouceId: number | string, resourcetype: string): Observable<void>;
    tagResource(name: string, resouces: IResource[]): Observable<void>;
    untagResource(name: string, resouce: IResource): Observable<void>;
    untagResource(name: string, resouceId: number | string, resourcetype: string): Observable<void>;
    untagResource(name: string, resouces: IResource[]): Observable<void>;
}
/**
 * Region endpoint methods.
 *
 * @export
 * @interface IRegionEndpoint
 */
export interface IRegionEndpoint {
    list(page: number, perPage?: number): Observable<ICollection<IRegion>>;
}
/**
 * Action endpoint methods
 *
 * @export
 * @interface IActionEndpoint
 */
export interface IActionEndpoint {
    get(id: number): Observable<IAction>;
    list(page: number, perPage?: number): Observable<ICollection<IAction>>;
}
/**
 * SSH Key
 *
 * @export
 * @interface ISSHKeyEndpoint
 * @extends {IEndpoint}
 */
export interface ISSHKeyEndpoint {
    create(specs: ISSHKeySpecs): Observable<ISSHKey>;
    delete(id: number): Observable<void>;
    get(fingerprint: string): Observable<ISSHKey>;
    get(id: number): Observable<ISSHKey>;
    list(page: number, perPage?: number): Observable<ICollection<ISSHKey>>;
    update(fingerprint: string, specs: ISSHKeySpecs): Observable<ISSHKey>;
    update(id: number, specs: ISSHKeySpecs): Observable<ISSHKey>;
}
/**
 * Volume endpoint methods.
 *
 * @export
 * @interface IVolumeEndpoint
 * @extends {IEndpoint}
 */
export interface IVolumeEndpoint {
    attach(id: string, dropletId: number): Observable<IAction>;
    attach(name: string, dropletId: number, region: string): Observable<IAction>;
    create(specs: IVolumeSpecs): Observable<IVolume>;
    createSnapshot(id: string, snapshotName: string): Observable<ISnapshot>;
    delete(id: string): Observable<void>;
    delete(name: string, region?: string): Observable<void>;
    detach(id: string, dropletId: number): Observable<IAction>;
    detach(name: string, dropletId: number, region: string): Observable<IAction>;
    getActionById(volumeId: string, actionId: number): Observable<IAction>;
    get(id: string): Observable<IVolume>;
    list(page: number, perPage?: number): Observable<ICollection<IVolume>>;
    listActions(volumeId: string, page: number, perPage?: number): Observable<ICollection<IAction>>;
    listByName(name: string, region: string, page: number, perPage?: number): Observable<ICollection<IVolume>>;
    listSnapshots(volumeId: string, page: number, perPage?: number): Observable<ICollection<ISnapshot>>;
    resize(id: string, size: number): Observable<IAction>;
}
/**
 * Snapshot endpoint methods.
 *
 * @export
 * @interface ISnapshotEndpoint
 */
export interface ISnapshotEndpoint {
    delete(id: string): Observable<void>;
    get(id: string): Observable<ISnapshot>;
    list(page: number, perPage?: number): Observable<ICollection<ISnapshot>>;
    list(resourceType: string, page: number, perPage?: number): Observable<ICollection<ISnapshot>>;
}
/**
 * Image endpoint methods.
 *
 * @export
 * @interface IImageEndpoint
 */
export interface IImageEndpoint {
    convertToSnapshot(id: number): Observable<IAction>;
    delete(id: number): Observable<void>;
    get(id: number): Observable<IImage>;
    get(slug: string): Observable<IImage>;
    getActionById(id: number, actionId: number): Observable<IAction>;
    list(page: number, perPage?: number): Observable<ICollection<IImage>>;
    list(type: string, page: number, perPage?: number): Observable<ICollection<IImage>>;
    listActions(id: number, page: number, perPage?: number): Observable<ICollection<IAction>>;
    listPrivate(page: number, perPage?: number): Observable<ICollection<IImage>>;
    transfer(id: number, regionSlug: string): Observable<IAction>;
    update(id: number, specs: IImageUpdateSpecs): Observable<IImage>;
}

/**
 * Bucket endpoint methods.
 *
 * @export
 * @interface IBucketEndpoint
 */
export interface IBucketEndpoint {
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
}
/**
 * Certificate endpoint methods
 *
 * @export
 * @interface ICertificateEndpoint
 */
export interface ICertificateEndpoint {
    create(specs: ICertificateSpecs): Observable<ICertificate>;
    delete(id: string): Observable<void>;
    get(id: string): Observable<ICertificate>;
    list(page: number, perPage?: number): Observable<ICollection<ICertificate>>;
}
/**
 * Droplet endpoint methods
 *
 * @export
 * @interface IDropletEndpoint
 */
export interface IDropletEndpoint {
    // actionsByTag();
    changeKernel(id: number, kernelId: number): Observable<IAction>;
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
    listImages(id: number, type: 'snapshots' | 'backups' | string, page: number, perPage?: number);
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
