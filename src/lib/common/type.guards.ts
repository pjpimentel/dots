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
    IImageLike,
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
 * Guard of ISnapshot
 *
 * @export
 * @param {*} data
 * @returns {data is ISnapshot}
 */
export function isSnapshot(data): data is ISnapshot {
    if (!isImageLike(data as ISnapshot)) return false;
    if (!isString(data.id)) return false;
    if (!isString(data.resource_id)) return false;
    if (!isString(data.resource_type)) return false;
    return true;
}
/**
 * Guard of IVolume
 *
 * @export
 * @param {*} data
 * @returns {data is IVolume}
 */
export function isVolume(data): data is IVolume {
    if (!isObject(data)) return false;
    if (!isString(data.created_at)) return false;
    if (!isString(data.description)) return false;
    if (!isArrayOfNumber(data.droplet_ids)) return false;
    if (!isString(data.filesystem_label)) return false;
    if (!isString(data.filesystem_type)) return false;
    if (!isString(data.id)) return false;
    if (!isString(data.name)) return false;
    if (!isRegion(data.region)) return false;
    if (!isNumber(data.size_gigabytes)) return false;
    return true;
}
/**
 * Guard of IImageLike.
 *
 * @export
 * @param {*} data
 * @returns {data is IImageLike}
 */
export function isImageLike(data): data is IImageLike {
    if (!isObject(data)) return false;
    if (!isArrayOfString(data.regions)) return false;
    if (!isNumber(data.min_disk_size)) return false;
    if (!isNumber(data.size_gigabytes)) return false;
    if (!isString(data.created_at)) return false;
    if (!isString(data.name)) return false;
    return true;
}
/**
 * Guard of IImage
 *
 * @export
 * @param {*} data
 * @returns {data is IImage}
 */
export function isImage(data): data is IImage {
    if (!isImageLike(data as IImage)) return false;
    if (!isNumber(data.id)) return false;
    if (!isString(data.distribution)) return false;
    if (!isBoolean(data.public)) return false;
    if (!isStringOrNull(data.slug)) return false;
    if (!isString(data.type)) return false;
    return true;
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
    if (!isNull(data.kernel) && !isKernel(data.kernel)) return false;
    if (!isBoolean(data.locked)) return false;
    if (!isNumber(data.memory)) return false;
    if (!isString(data.name)) return false;
    if (!isObject(data.networks)) return false;
    if (!isNull(data.next_backup_window) && !isObject(data.next_backup_window)) {
        return false;
    }
    if (!isString(data.size_slug)) return false;
    if (!isString(data.status)) return false;
    if (!isNumber(data.vcpus)) return false;
    if (!isArrayOfString(data.backup_ids)) return false;
    if (!isArrayOfString(data.features)) return false;
    if (!isArrayOfString(data.snapshot_ids)) return false;
    if (!isArrayOfString(data.tags)) return false;
    if (!isArrayOfString(data.volume_ids)) return false;
    if (!isImage(data.image)) return false;
    if (!isRegion(data.region)) return false;
    if (!isSize(data.size)) return false;
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
export function isCollection<T>(
    data,
    guard: (d) => d is T): data is ICollection<T> {
    if (!isObject(data)) return false;
    if (!isArray(data.items)) return false;
    if (!isNumber(data.curPage)) return false;
    if (!isNumber(data.maxPage)) return false;
    if (!isNumber(data.minPage)) return false;
    if (!isNumber(data.perPage)) return false;
    if (!isNumber(data.total)) return false;
    if (!data.items.every(guard)) return false;
    return true;
}
