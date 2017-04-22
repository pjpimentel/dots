
'use strict';
import {IAction} from './interfaces';
import ActionEndpoint from './endpoint';
import Asset from '../common/asset';
/**
 * Action asset
 * 
 * @class Action
 * @extends {Asset<ActionEndpoint>}
 * @implements {IAction}
 */
class Action extends Asset<ActionEndpoint> implements IAction{
    readonly completed_at: Date;
    readonly id: number;
    readonly region_slug: string;
    readonly resource_id: number;
    readonly resource_type: string;
    readonly started_at: Date;
    readonly status: string;
    readonly type: string;
    /**
     * Creates an instance of Action.
     * @param {ActionEndpoint} endpoint 
     * @param {IAction} action 
     * 
     * @memberOf Action
     */
    constructor(endpoint: ActionEndpoint, action: IAction){
        super(endpoint);
        this.completed_at = action.completed_at
        this.id = action.id
        this.region_slug = action.region_slug
        this.resource_id = action.resource_id
        this.resource_type = action.resource_type
        this.started_at = action.started_at
        this.status = action.status
        this.type = action.type
    }
}

export default Action;
