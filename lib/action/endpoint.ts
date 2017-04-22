
'use strict';
import {IAction,IActionEndpoint} from './interfaces';
import Action from './action';
import DigitalOcean from '../digitalOcean';
import Endpoint from '../common/endpoint';
import {ICollection} from "../common/interfaces";
/**
 * Action endpoint
 * 
 * @class ActionEndpoint
 * @extends {Endpoint}
 * @implements {IActionEndpoint}
 */
class ActionEndpoint extends Endpoint implements IActionEndpoint{
    /**
     * Creates an instance of ActionEndpoint.
     * @param {DigitalOcean} digitalOcean 
     * 
     * @memberOf ActionEndpoint
     */
    constructor(digitalOcean: DigitalOcean){
        super(digitalOcean, '/actions');
    }
    /**
     * List all actions.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns {Promise<ICollection<Action>>} 
     * 
     * @memberOf ActionEndpoint
     */
    public async list(
        page: number,
        perPage?: number
    ): Promise<ICollection<Action>>{
        let collection: ICollection<IAction>|ICollection<Action>;
        let url: string = this.prefix;
        collection = await this.getCollection<IAction>(
            page,
            perPage,
            url,
            'actions'
        );
        collection = this.upcastCollection<IAction,Action>(collection, Action);
        return <ICollection<Action>> collection;
    }
    /**
     * Get action by id.
     * 
     * @param {number} id 
     * @returns {Promise<Action>} 
     * 
     * @memberOf ActionEndpoint
     */
    public async get(id: number): Promise<Action>{
        let url: string = [this.prefix,id.toString()].join('/');
        let res = await this.api.get(url);
        if(!res.data) throw this.api.invalidResponse;
        let action: IAction = <IAction> res.data.action;
        return new Action(this, action);
    }
}

export default ActionEndpoint;