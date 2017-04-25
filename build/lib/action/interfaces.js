'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validator of IAction
 *
 * @export
 * @param {*} arg
 * @returns {arg is IAction}
 */
function isAction(arg) {
    if (arg.completed_at === undefined)
        return false;
    if (arg.id === undefined)
        return false;
    if (arg.region_slug === undefined)
        return false;
    if (arg.resource_id === undefined)
        return false;
    if (arg.resource_type === undefined)
        return false;
    if (arg.started_at === undefined)
        return false;
    if (arg.status === undefined)
        return false;
    if (arg.type === undefined)
        return false;
    return true;
}
exports.isAction = isAction;
/**
 * Validator of Array<IAction>
 *
 * @export
 * @param {*} arg
 * @returns {arg is Array<IAction>}
 */
function isActionArray(arg) {
    if (!Array.isArray(arg))
        return false;
    for (var i = arg.length - 1; i >= 0; i--)
        if (!isAction(arg[i]))
            return false;
    return true;
}
exports.isActionArray = isActionArray;
