"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Guard of string[];
 *
 * @export
 * @param {*} data
 * @returns {data is string[]}
 */
function isArrayOfString(data) {
    if (!Array.isArray(data))
        return false;
    return data.every(function (elem) { return elem.typeof !== 'string'; });
}
exports.isArrayOfString = isArrayOfString;
/**
 * Guard of number[];
 *
 * @export
 * @param {*} data
 * @returns {data is number[]}
 */
function isArrayOfNumber(data) {
    if (!Array.isArray(data))
        return false;
    return data.every(function (elem) { return elem.typeof !== 'number'; });
}
exports.isArrayOfNumber = isArrayOfNumber;
/**
 * Guard of IAccount.
 *
 * @export
 * @param {*} data
 * @returns {data is IAccount}
 */
function isAccount(data) {
    if (typeof data.droplet_limit !== 'number')
        return false;
    if (typeof data.email_verified !== 'boolean')
        return false;
    if (typeof data.email !== 'string')
        return false;
    if (typeof data.floating_ip_limit !== 'number')
        return false;
    if (typeof data.status_message !== 'string')
        return false;
    if (typeof data.status !== 'string')
        return false;
    if (typeof data.uuid !== 'string')
        return false;
    return true;
}
exports.isAccount = isAccount;
/**
 * Guard of ISize.
 *
 * @export
 * @param {*} data
 * @returns {data is ISize}
 */
function isSize(data) {
    if (typeof data.slug !== 'string')
        return false;
    if (typeof data.available !== 'boolean')
        return false;
    if (typeof data.transfer !== 'number')
        return false;
    if (typeof data.price_monthly !== 'number')
        return false;
    if (typeof data.price_hourly !== 'number')
        return false;
    if (typeof data.memory !== 'number')
        return false;
    if (typeof data.vcpus !== 'number')
        return false;
    if (typeof data.disk !== 'number')
        return false;
    if (isArrayOfString(data.regions) === false)
        return false;
    return true;
}
exports.isSize = isSize;
/**
 * Guard of ISize[].
 *
 * @export
 * @param {*} data
 * @returns {data is ISize[]}
 */
function isArrayOfSize(data) {
    if (!Array.isArray(data))
        return false;
    return data.every(isSize);
}
exports.isArrayOfSize = isArrayOfSize;
/**
 * Guard of ITag.
 *
 * @export
 * @param {*} data
 * @returns {data is ITag}
 */
function isTag(data) {
    if (typeof data.name !== 'string')
        return false;
    // if(!isArrayOfResource((data as ITag).resources)) return false;
    return true;
}
exports.isTag = isTag;
/**
 * Guard of ITag[].
 *
 * @export
 * @param {*} data
 * @returns {data is ITag}
 */
function isArrayOfTag(data) {
    if (!Array.isArray(data))
        return false;
    return data.every(isTag);
}
exports.isArrayOfTag = isArrayOfTag;
/**
 * Guard of IResource.
 *
 * @export
 * @param {*} data
 * @returns {data is IResource}
 */
function isResource(data) {
    if (typeof data.resource_id !== 'string')
        return false;
    if (typeof data.resource_type !== 'string')
        return false;
    return true;
}
exports.isResource = isResource;
/**
 * Guard of IResource[].
 *
 * @export
 * @param {*} data
 * @returns {data is Array<IResource>}
 */
function isArrayOfResource(data) {
    if (!Array.isArray(data))
        return false;
    return data.every(isResource);
}
exports.isArrayOfResource = isArrayOfResource;
/**
 * Guard of IRegion
 *
 * @export
 * @param {*} data
 * @returns {data is IRegion}
 */
function isRegion(data) {
    if (typeof data.slug !== 'string')
        return false;
    if (typeof data.name !== 'string')
        return false;
    if (typeof data.available !== 'boolean')
        return false;
    if (!isArrayOfString(data.sizes))
        return false;
    if (!isArrayOfString(data.features))
        return false;
    return true;
}
exports.isRegion = isRegion;
/**
 * Guard of IRegion[]
 *
 * @export
 * @param {*} data
 * @returns {data is IRegion}
 */
function isArrayOfRegion(data) {
    if (!Array.isArray(data))
        return false;
    return data.every(isRegion);
}
exports.isArrayOfRegion = isArrayOfRegion;
/**
 * Guard of IAction
 *
 * @export
 * @param {*} data
 * @returns {data is IAction}
 */
function isAction(data) {
    if (typeof data.id !== 'number')
        return false;
    if (typeof data.status !== 'string')
        return false;
    if (typeof data.type !== 'string')
        return false;
    if (typeof data.started_at !== 'string')
        return false;
    if (typeof data.completed_at !== 'string')
        return false;
    if (typeof data.resource_type !== 'string')
        return false;
    if (data.resource_id !== null)
        if (typeof data.resource_id !== 'number')
            return false;
    if (data.region_slug !== null)
        if (typeof data.region_slug !== 'string')
            return false;
    return true;
}
exports.isAction = isAction;
/**
 * Guard of IAction[]
 *
 * @export
 * @param {*} data
 * @returns {data is IAction[]}
 */
function isArrayOfAction(data) {
    if (!Array.isArray(data))
        return false;
    return data.every(isAction);
}
exports.isArrayOfAction = isArrayOfAction;
/**
 * Guard of ISSHKey
 *
 * @export
 * @param {*} data
 * @returns {data is ISSHKey}
 */
function isSSHKey(data) {
    if (typeof data.id !== 'number')
        return false;
    if (typeof data.fingerprint !== 'string')
        return false;
    if (typeof data.name !== "string")
        return false;
    if (typeof data.public_key !== "string")
        return false;
    return true;
}
exports.isSSHKey = isSSHKey;
/**
 * Guard of ISSHKey[]
 *
 * @export
 * @param {*} data
 * @returns {data is ISSHKey[]}
 */
function isArrayOfSSHKey(data) {
    if (!Array.isArray(data))
        return false;
    return data.every(isSSHKey);
}
exports.isArrayOfSSHKey = isArrayOfSSHKey;
/**
 * Guard of ISnapshot
 *
 * @export
 * @param {*} data
 * @returns {data is ISnapshot}
 */
function isSnapshot(data) {
    if (typeof data.created_at !== "string")
        return false;
    if (typeof data.id !== "string")
        return false;
    if (typeof data.min_disk_size !== "number")
        return false;
    if (typeof data.name !== "string")
        return false;
    if (typeof data.resource_id !== "string")
        return false;
    if (typeof data.resource_type !== "string")
        return false;
    if (typeof data.size_gigabytes !== "number")
        return false;
    if (!isArrayOfString(data.regions))
        return false;
    return true;
}
exports.isSnapshot = isSnapshot;
/**
 * Guard of ISnapshot[]
 *
 * @export
 * @param {*} data
 * @returns {data is ISnapshot[]}
 */
function isArrayOfSnapshot(data) {
    if (!Array.isArray(data))
        return false;
    return data.every(isSnapshot);
}
exports.isArrayOfSnapshot = isArrayOfSnapshot;
/**
 * Guard of IVolume
 *
 * @export
 * @param {*} data
 * @returns {data is IVolume}
 */
function isVolume(data) {
    if (typeof data.created_at !== "string")
        return false;
    if (typeof data.description !== "string")
        return false;
    if (typeof data.id !== "string")
        return false;
    if (typeof data.name !== "string")
        return false;
    if (typeof data.size_gigabytes !== "number")
        return false;
    if (!isRegion(data.region))
        return false;
    if (!isArrayOfNumber(data.droplet_ids))
        return false;
    return true;
}
exports.isVolume = isVolume;
/**
 * Guard of IVolume[]
 *
 * @export
 * @param {*} data
 * @returns {data is IVolume[]}
 */
function isArrayOfVolume(data) {
    if (!Array.isArray(data))
        return false;
    return data.every(isVolume);
}
exports.isArrayOfVolume = isArrayOfVolume;
/**
 * Guard of IImage
 *
 * @export
 * @param {*} data
 * @returns {data is IImage}
 */
function isImage(data) {
    data = data;
    if (typeof data.created_at !== "string")
        return false;
    if (typeof data.distribution !== "string")
        return false;
    if (typeof data.id !== "number")
        return false;
    if (typeof data.name !== "string")
        return false;
    if (typeof data.size_gigabytes !== "number")
        return false;
    if (typeof data.min_disk_size !== "number")
        return false;
    if (typeof data.public !== "boolean")
        return false;
    if (typeof data.min_disk_size !== "number")
        return false;
    if (data.slug !== null && typeof data.slug !== "string")
        return false;
    if (typeof data.type !== "string")
        return false;
    // if ((data as IImage).regions !== null && !isArrayOfString(typeof (data as IImage).regions)) return false;
    return true;
}
exports.isImage = isImage;
/**
 * Guard of IImage[]
 *
 * @export
 * @param {*} data
 * @returns {data is IImage[]}
 */
function isArrayOfImage(data) {
    if (!Array.isArray(data))
        return false;
    return data.every(isImage);
}
exports.isArrayOfImage = isArrayOfImage;
/**
 * Guard of ICertificate
 *
 * @export
 * @param {*} data
 * @returns {data is ICertificate}
 */
function isCertificate(data) {
    if (typeof data.created_at !== "string")
        return false;
    if (typeof data.not_after !== "string")
        return false;
    if (typeof data.id !== "string")
        return false;
    if (typeof data.name !== "string")
        return false;
    if (typeof data.sha1_fingerprint !== "string")
        return false;
    return true;
}
exports.isCertificate = isCertificate;
/**
 * Guard of ICertificate[]
 *
 * @export
 * @param {*} data
 * @returns {data is ICertificate[]}
 */
function isArrayOfCertificate(data) {
    if (!Array.isArray(data))
        return false;
    return data.every(isCertificate);
}
exports.isArrayOfCertificate = isArrayOfCertificate;
/**
 * Guard of IDroplet
 *
 * @export
 * @param {*} data
 * @returns {data is IDroplet}
 */
function isDroplet(data) {
    if (typeof data.created_at !== "string")
        return false;
    if (typeof data.disk !== "number")
        return false;
    if (typeof data.id !== "number")
        return false;
    if (typeof data.kernel !== "string")
        return false; // TODO: kernel type
    if (typeof data.locked !== "boolean")
        return false;
    if (typeof data.memory !== "number")
        return false;
    if (typeof data.name !== "string")
        return false;
    if (typeof data.networks !== "object")
        return false; // TODO: networks type
    // if (typeof (data as IDroplet).next_backup_window !== 'string') return false;  // TODO: next_backup_window type
    if (typeof data.size_slug !== "string")
        return false;
    if (typeof data.status !== "string")
        return false;
    if (typeof data.vcpus !== "number")
        return false;
    if (!isArrayOfString(data.backup_ids))
        return false;
    if (!isArrayOfString(data.features))
        return false;
    if (!isArrayOfString(data.snapshot_ids))
        return false;
    if (!isArrayOfString(data.tags))
        return false;
    if (!isArrayOfString(data.volume_ids))
        return false;
    if (!isImage(data.image))
        return false;
    if (!isRegion(data.region))
        return false;
    if (!isSize(data.size))
        return false;
    return true;
}
exports.isDroplet = isDroplet;
/**
 * Guard of IDroplet[]
 *
 * @export
 * @param {*} data
 * @returns {data is IDroplet[]}
 */
function isArrayOfDroplet(data) {
    if (!Array.isArray(data))
        return false;
    return data.every(isDroplet);
}
exports.isArrayOfDroplet = isArrayOfDroplet;
//# sourceMappingURL=type.guards.js.map