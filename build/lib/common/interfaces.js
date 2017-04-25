'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
;
/**
 * Validator of IResource.
 *
 * @export
 * @param {*} arg
 * @returns {arg is IResource}
 */
function isResource(arg) {
    if (arg.resource_id === undefined)
        return false;
    if (arg.resource_type === undefined)
        return false;
    return true;
}
exports.isResource = isResource;
/**
 * Validator of Array<IResource>.
 *
 * @export
 * @param {*} arg
 * @returns {arg is Array<IResource>}
 */
function isResourceArray(arg) {
    if (!Array.isArray(arg))
        return false;
    for (var i = arg.length - 1; i >= 0; i--)
        if (!isResource(arg[i]))
            return false;
    return true;
}
exports.isResourceArray = isResourceArray;
