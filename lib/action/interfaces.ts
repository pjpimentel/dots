
'use strict';
/**
 * Action raw object
 * 
 * @export
 * @interface IAction
 */
export interface IAction{
    readonly completed_at: Date;
    readonly id: number;
    readonly region_slug: string;
    readonly resource_id: number;
    readonly resource_type: string;
    readonly started_at: Date;
    readonly status: string;
    readonly type: string;
}
/**
 * Action endpoint methods
 * 
 * @export
 * @interface IActionEndpoint
 */
export interface IActionEndpoint{
    get(id: number);
    list(page: number, perPage?: number);
}
/**
 * Validator of IAction
 * 
 * @export
 * @param {*} arg 
 * @returns {arg is IAction} 
 */
export function isAction(arg: any): arg is IAction{
    if((arg as IAction).completed_at === undefined) return false;
    if((arg as IAction).id === undefined) return false;
    if((arg as IAction).region_slug === undefined) return false;
    if((arg as IAction).resource_id === undefined) return false;
    if((arg as IAction).resource_type === undefined) return false;
    if((arg as IAction).started_at === undefined) return false;
    if((arg as IAction).status === undefined) return false;
    if((arg as IAction).type === undefined) return false;
    return true;
}
/**
 * Validator of Array<IAction>
 * 
 * @export
 * @param {*} arg 
 * @returns {arg is Array<IAction>} 
 */
export function isActionArray(arg: any): arg is Array<IAction>{
    if(!Array.isArray(arg)) return false;
    for (let i = arg.length - 1; i >= 0; i--)
        if(!isAction(arg[i])) return false;
    return true
}