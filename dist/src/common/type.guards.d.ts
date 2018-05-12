import { IAccount, IAction, ICertificate, IDroplet, IImage, IRegion, IResource, ISize, ISnapshot, ISSHKey, ITag, IVolume } from './interfaces';
/**
 * Guard of string[];
 *
 * @export
 * @param {*} data
 * @returns {data is string[]}
 */
export declare function isArrayOfString(data: any): data is string[];
/**
 * Guard of number[];
 *
 * @export
 * @param {*} data
 * @returns {data is number[]}
 */
export declare function isArrayOfNumber(data: any): data is number[];
/**
 * Guard of IAccount.
 *
 * @export
 * @param {*} data
 * @returns {data is IAccount}
 */
export declare function isAccount(data: any): data is IAccount;
/**
 * Guard of ISize.
 *
 * @export
 * @param {*} data
 * @returns {data is ISize}
 */
export declare function isSize(data: any): data is ISize;
/**
 * Guard of ISize[].
 *
 * @export
 * @param {*} data
 * @returns {data is ISize[]}
 */
export declare function isArrayOfSize(data: any): data is ISize[];
/**
 * Guard of ITag.
 *
 * @export
 * @param {*} data
 * @returns {data is ITag}
 */
export declare function isTag(data: any): data is ITag;
/**
 * Guard of ITag[].
 *
 * @export
 * @param {*} data
 * @returns {data is ITag}
 */
export declare function isArrayOfTag(data: any): data is ITag;
/**
 * Guard of IResource.
 *
 * @export
 * @param {*} data
 * @returns {data is IResource}
 */
export declare function isResource(data: any): data is IResource;
/**
 * Guard of IResource[].
 *
 * @export
 * @param {*} data
 * @returns {data is Array<IResource>}
 */
export declare function isArrayOfResource(data: any): data is IResource[];
/**
 * Guard of IRegion
 *
 * @export
 * @param {*} data
 * @returns {data is IRegion}
 */
export declare function isRegion(data: any): data is IRegion;
/**
 * Guard of IRegion[]
 *
 * @export
 * @param {*} data
 * @returns {data is IRegion}
 */
export declare function isArrayOfRegion(data: any): data is IRegion[];
/**
 * Guard of IAction
 *
 * @export
 * @param {*} data
 * @returns {data is IAction}
 */
export declare function isAction(data: any): data is IAction;
/**
 * Guard of IAction[]
 *
 * @export
 * @param {*} data
 * @returns {data is IAction[]}
 */
export declare function isArrayOfAction(data: any): data is IAction[];
/**
 * Guard of ISSHKey
 *
 * @export
 * @param {*} data
 * @returns {data is ISSHKey}
 */
export declare function isSSHKey(data: any): data is ISSHKey;
/**
 * Guard of ISSHKey[]
 *
 * @export
 * @param {*} data
 * @returns {data is ISSHKey[]}
 */
export declare function isArrayOfSSHKey(data: any): data is ISSHKey[];
/**
 * Guard of ISnapshot
 *
 * @export
 * @param {*} data
 * @returns {data is ISnapshot}
 */
export declare function isSnapshot(data: any): data is ISnapshot;
/**
 * Guard of ISnapshot[]
 *
 * @export
 * @param {*} data
 * @returns {data is ISnapshot[]}
 */
export declare function isArrayOfSnapshot(data: any): data is ISnapshot[];
/**
 * Guard of IVolume
 *
 * @export
 * @param {*} data
 * @returns {data is IVolume}
 */
export declare function isVolume(data: any): data is IVolume;
/**
 * Guard of IVolume[]
 *
 * @export
 * @param {*} data
 * @returns {data is IVolume[]}
 */
export declare function isArrayOfVolume(data: any): data is IVolume[];
/**
 * Guard of IImage
 *
 * @export
 * @param {*} data
 * @returns {data is IImage}
 */
export declare function isImage(data: any): data is IImage;
/**
 * Guard of IImage[]
 *
 * @export
 * @param {*} data
 * @returns {data is IImage[]}
 */
export declare function isArrayOfImage(data: any): data is IImage[];
/**
 * Guard of ICertificate
 *
 * @export
 * @param {*} data
 * @returns {data is ICertificate}
 */
export declare function isCertificate(data: any): data is ICertificate;
/**
 * Guard of ICertificate[]
 *
 * @export
 * @param {*} data
 * @returns {data is ICertificate[]}
 */
export declare function isArrayOfCertificate(data: any): data is ICertificate[];
/**
 * Guard of IDroplet
 *
 * @export
 * @param {*} data
 * @returns {data is IDroplet}
 */
export declare function isDroplet(data: any): data is IDroplet;
/**
 * Guard of IDroplet[]
 *
 * @export
 * @param {*} data
 * @returns {data is IDroplet[]}
 */
export declare function isArrayOfDroplet(data: any): data is IDroplet[];
