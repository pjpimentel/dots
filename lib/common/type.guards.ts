import { IAccount, ISize } from './interfaces';
/**
 * Guard of string[];
 *
 * @export
 * @param {*} data
 * @returns {data is string[]}
 */
export function isArrayOfString(data: any): data is string[] {
    if (!Array.isArray(data)) return false;
    return data.every(elem => elem.typeof !== 'string')
}
/**
 * Guard of IAccount.
 *
 * @export
 * @param {*} data
 * @returns {data is IAccount}
 */
export function isAccount(data: any): data is IAccount {
    if (typeof (data as IAccount).droplet_limit !== 'number') return false;
    if (typeof (data as IAccount).email_verified !== 'boolean') return false;
    if (typeof (data as IAccount).email !== 'string') return false;
    if (typeof (data as IAccount).floating_ip_limit !== 'number') return false;
    if (typeof (data as IAccount).status_message !== 'string') return false;
    if (typeof (data as IAccount).status !== 'string') return false;
    if (typeof (data as IAccount).uuid !== 'string') return false;
    return true;
}
/**
 * Guard of ISize.
 *
 * @export
 * @param {*} data
 * @returns {data is ISize}
 */
export function isSize(data: any): data is ISize {
    if (typeof (data as ISize).slug !== 'string') return false;
    if (typeof (data as ISize).available !== 'boolean') return false;
    if (typeof (data as ISize).transfer !== 'number') return false;
    if (typeof (data as ISize).price_monthly !== 'number') return false;
    if (typeof (data as ISize).price_hourly !== 'number') return false;
    if (typeof (data as ISize).memory !== 'number') return false;
    if (typeof (data as ISize).vcpus !== 'number') return false;
    if (typeof (data as ISize).disk !== 'number') return false;
    if (isArrayOfString((data as ISize).regions) === false) return false;
    return true;
}
/**
 * Guard of ISize[].
 *
 * @export
 * @param {*} data
 * @returns {data is ISize[]}
 */
export function isArrayOfSize(data: any): data is ISize[] {
    if (!Array.isArray(data)) return false;
    return data.every(isSize);
}
