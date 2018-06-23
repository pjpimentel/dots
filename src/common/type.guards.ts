import {
    isArray,
    isBoolean,
    isNull,
    isNumber,
    isObject,
    isString,
} from 'util';
import {
    IAccount,
    IAction,
    ICertificate,
    ICollection,
    IDroplet,
    IImage,
    IKernel,
    IRegion,
    IResource,
    ISize,
    ISnapshot,
    ISSHKey,
    ITag,
    IVolume,
} from './interfaces';
/**
 * Guard of null|number
 *
 * @export
 * @param {*} data
 * @returns {data is null|number}
 */
export function isNumberOrNull(data): data is null|number {
    return isNull(data) || isNumber(data);
}
/**
 * Guard of null|string
 *
 * @export
 * @param {*} data
 * @returns {data is null|string}
 */
export function isStringOrNull(data): data is null|string {
    return isNull(data) || isString(data);
}
/**
 * Guard of string[];
 *
 * @export
 * @param {*} data
 * @returns {data is string[]}
 */
export function isArrayOfString(data): data is string[] {
    if (!isArray(data)) return false;
    return data.every(isString);
}
/**
 * Guard of number[];
 *
 * @export
 * @param {*} data
 * @returns {data is number[]}
 */
export function isArrayOfNumber(data): data is number[] {
    if (!Array.isArray(data)) return false;
    return data.every((elem) => elem.typeof !== 'number');
}
/**
 * Guard of IAccount.
 *
 * @export
 * @param {*} data
 * @returns {data is IAccount}
 */
export function isAccount(data): data is IAccount {
    if (!isObject(data)) return false;
    if (!isNumber(data.droplet_limit)) return false;
    if (!isString(data.email)) return false;
    if (!isBoolean(data.email_verified)) return false;
    if (!isNumber(data.floating_ip_limit)) return false;
    if (!isString(data.status)) return false;
    if (!isString(data.status_message)) return false;
    if (!isString(data.uuid)) return false;
    return true;
}
/**
 * Guard of ISize.
 *
 * @export
 * @param {*} data
 * @returns {data is ISize}
 */
export function isSize(data): data is ISize {
    if (!isObject(data)) return false;
    if (!isBoolean(data.available)) return false;
    if (!isNumber(data.disk)) return false;
    if (!isNumber(data.memory)) return false;
    if (!isNumber(data.price_hourly)) return false;
    if (!isNumber(data.price_monthly)) return false;
    if (!isArrayOfString(data.regions)) return false;
    if (!isNumber(data.transfer)) return false;
    if (!isNumber(data.vcpus)) return false;
    if (!isString(data.slug)) return false;
    return true;
}
/**
 * Guard of ISize[].
 *
 * @export
 * @param {*} data
 * @returns {data is ISize[]}
 */
export function isArrayOfSize(data): data is ISize[] {
    if (!Array.isArray(data)) return false;
    return data.every(isSize);
}
/**
 * Guard of ITag.
 *
 * @export
 * @param {*} data
 * @returns {data is ITag}
 */
export function isTag(data): data is ITag {
    if (!isObject(data)) return false;
    if (!isString(data.name)) return false;
    if (!isObject(data.resources)) return false;
    return true;
}
/**
 * Guard of ITag[].
 *
 * @export
 * @param {*} data
 * @returns {data is ITag}
 */
export function isArrayOfTag(data): data is ITag {
    if (!Array.isArray(data)) return false;
    return data.every(isTag);
}
/**
 * Guard of IResource.
 *
 * @export
 * @param {*} data
 * @returns {data is IResource}
 */
export function isResource(data): data is IResource {
    if (!isObject(data)) return false;
    if (!isString(data.resource_id)) return false;
    if (!isString(data.resource_type)) return false;
    return true;
}
/**
 * Guard of IResource[].
 *
 * @export
 * @param {*} data
 * @returns {data is Array<IResource>}
 */
export function isArrayOfResource(data): data is IResource[] {
    if (!Array.isArray(data)) return false;
    return data.every(isResource);
}
/**
 * Guard of IRegion
 *
 * @export
 * @param {*} data
 * @returns {data is IRegion}
 */
export function isRegion(data): data is IRegion {
    if (!isObject(data)) return false;
    if (!isBoolean(data.available)) return false;
    if (!isArrayOfString(data.features)) return false;
    if (!isString(data.name)) return false;
    if (!isArrayOfString(data.sizes)) return false;
    if (!isString(data.slug)) return false;
    return true;
}
/**
 * Guard of IRegion[]
 *
 * @export
 * @param {*} data
 * @returns {data is IRegion}
 */
export function isArrayOfRegion(data): data is IRegion[] {
    if (!Array.isArray(data)) return false;
    return data.every(isRegion);
}
/**
 * Guard of IAction
 *
 * @export
 * @param {*} data
 * @returns {data is IAction}
 */
export function isAction(data): data is IAction {
    if (!isObject(data)) return false;
    if (!isString(data.completed_at)) return false;
    if (!isNumber(data.id)) return false;
    if (!isStringOrNull(data.region_slug)) return false;
    if (!isNumberOrNull(data.resource_id)) return false;
    if (!isString(data.resource_type)) return false;
    if (!isString(data.started_at)) return false;
    if (!isString(data.status)) return false;
    if (!isString(data.type)) return false;
    return true;
}
/**
 * Guard of IAction[]
 *
 * @export
 * @param {*} data
 * @returns {data is IAction[]}
 */
export function isArrayOfAction(data): data is IAction[] {
    if (!Array.isArray(data)) return false;
    return data.every(isAction);
}
/**
 * Guard of ISSHKey
 *
 * @export
 * @param {*} data
 * @returns {data is ISSHKey}
 */
export function isSSHKey(data): data is ISSHKey {
    if (!isObject(data)) return false;
    if (!isNumber(data.id)) return false;
    if (!isString(data.fingerprint)) return false;
    if (!isString(data.name)) return false;
    if (!isString(data.public_key)) return false;
    return true;
}
/**
 * Guard of ISSHKey[]
 *
 * @export
 * @param {*} data
 * @returns {data is ISSHKey[]}
 */
export function isArrayOfSSHKey(data): data is ISSHKey[] {
    if (!Array.isArray(data)) return false;
    return data.every(isSSHKey);
}
/**
 * Guard of ISnapshot
 *
 * @export
 * @param {*} data
 * @returns {data is ISnapshot}
 */
export function isSnapshot(data): data is ISnapshot {
    if (!isObject(data)) return false;
    if (!isArrayOfString(data.regions)) return false;
    if (!isNumber(data.min_disk_size)) return false;
    if (!isNumber(data.size_gigabytes)) return false;
    if (!isString(data.created_at)) return false;
    if (!isString(data.id)) return false;
    if (!isString(data.name)) return false;
    if (!isString(data.resource_id)) return false;
    if (!isString(data.resource_type)) return false;
    return true;
}
/**
 * Guard of ISnapshot[]
 *
 * @export
 * @param {*} data
 * @returns {data is ISnapshot[]}
 */
export function isArrayOfSnapshot(data): data is ISnapshot[] {
    if (!Array.isArray(data)) return false;
    return data.every(isSnapshot);
}
/**
 * Guard of IVolume
 *
 * @export
 * @param {*} data
 * @returns {data is IVolume}
 */
export function isVolume(data): data is IVolume {
    if (typeof (data as IVolume).created_at !== 'string') return false;
    if (typeof (data as IVolume).description !== 'string') return false;
    if (typeof (data as IVolume).id !== 'string') return false;
    if (typeof (data as IVolume).name !== 'string') return false;
    if (typeof (data as IVolume).size_gigabytes !== 'number') return false;
    if (!isRegion((data as IVolume).region)) return false;
    if (!isArrayOfNumber((data as IVolume).droplet_ids)) return false;
    return true;
}
/**
 * Guard of IVolume[]
 *
 * @export
 * @param {*} data
 * @returns {data is IVolume[]}
 */
export function isArrayOfVolume(data): data is IVolume[] {
    if (!Array.isArray(data)) return false;
    return data.every(isVolume);
}
/**
 * Guard of IImage
 *
 * @export
 * @param {*} data
 * @returns {data is IImage}
 */
export function isImage(data): data is IImage {
    data = data as IImage;
    if (typeof (data as IImage).created_at !== 'string') return false;
    if (typeof (data as IImage).distribution !== 'string') return false;
    if (typeof (data as IImage).id !== 'number') return false;
    if (typeof (data as IImage).name !== 'string') return false;
    if (typeof (data as IImage).size_gigabytes !== 'number') return false;
    if (typeof (data as IImage).min_disk_size !== 'number') return false;
    if (typeof (data as IImage).public !== 'boolean') return false;
    if (typeof (data as IImage).min_disk_size !== 'number') return false;
    if ((data as IImage).slug !== null && typeof (data as IImage).slug !== 'string') return false;
    if (typeof (data as IImage).type !== 'string') return false;
    // if ((data as IImage).regions !== null && !isArrayOfString(typeof (data as IImage).regions)) return false;
    return true;
}
/**
 * Guard of IImage[]
 *
 * @export
 * @param {*} data
 * @returns {data is IImage[]}
 */
export function isArrayOfImage(data): data is IImage[] {
    if (!Array.isArray(data)) return false;
    return data.every(isImage);
}
/**
 * Guard of ICertificate
 *
 * @export
 * @param {*} data
 * @returns {data is ICertificate}
 */
export function isCertificate(data): data is ICertificate {
    if (!isObject(data)) return false;
    if (!isArrayOfString(data.dns_names)) return false;
    if (!isString(data.created_at)) return false;
    if (!isString(data.id)) return false;
    if (!isString(data.name)) return false;
    if (!isString(data.not_after)) return false;
    if (!isString(data.sha1_fingerprint)) return false;
    if (!isString(data.state)) return false;
    if (!isString(data.type)) return false;
    return true;
}
/**
 * Guard of ICertificate[]
 *
 * @export
 * @param {*} data
 * @returns {data is ICertificate[]}
 */
export function isArrayOfCertificate(data): data is ICertificate[] {
    if (!Array.isArray(data)) return false;
    return data.every(isCertificate);
}
/**
 * Guard of IKernel
 *
 * @export
 * @param {*} data
 * @returns {data is IKernel}
 */
export function isKernel(data): data is IKernel {
    if (!isObject(data)) return false;
    if (!isNumber(data.id)) return false;
    if (!isString(data.name)) return false;
    if (!isString(data.version)) return false;
    return true;
}
/**
 * Guard of IDroplet
 *
 * @export
 * @param {*} data
 * @returns {data is IDroplet}
 */
export function isDroplet(data): data is IDroplet {
    if (!isObject(data)) return false;
    if (!isString(data.created_at)) return false;
    if (!isNumber(data.disk)) return false;
    if (!isNumber(data.id)) return false;
    if (!isKernel(data.kernel)) return false;
    if (!isBoolean(data.locked)) return false;
    if (!isNumber(data.memory)) return false;
    if (!isString(data.name)) return false;
    if (!isObject(data.networks)) return false; // TODO: networks type
    // i!isString(f (data.next_backup_window)) return false;  // TODO: next_backup_window type
    if (!isString(data.size_slug)) return false;
    if (!isString(data.status)) return false;
    if (!isNumber(data.vcpus)) return false;
    if (!isArrayOfString((data as IDroplet).backup_ids)) return false;
    if (!isArrayOfString((data as IDroplet).features)) return false;
    if (!isArrayOfString((data as IDroplet).snapshot_ids)) return false;
    if (!isArrayOfString((data as IDroplet).tags)) return false;
    if (!isArrayOfString((data as IDroplet).volume_ids)) return false;
    if (!isImage((data as IDroplet).image)) return false;
    if (!isRegion((data as IDroplet).region)) return false;
    if (!isSize((data as IDroplet).size)) return false;

    return true;
}
/**
 * Guard of IDroplet[]
 *
 * @export
 * @param {*} data
 * @returns {data is IDroplet[]}
 */
export function isArrayOfDroplet(data): data is IDroplet[] {
    if (!Array.isArray(data)) return false;
    return data.every(isDroplet);
}
/**
 * Guard of ICollection<any>
 *
 * @export
 * @param {*} data
 * @returns {data is ICollection<any>}
 */
export function isCollection(data): data is ICollection<any> {
    if (!isObject(data)) return false;
    if (!isArray(data.items)) return false;
    if (!isNumber(data.curPage)) return false;
    if (!isNumber(data.maxPage)) return false;
    if (!isNumber(data.minPage)) return false;
    if (!isNumber(data.perPage)) return false;
    if (!isNumber(data.total)) return false;
    return true;
}
