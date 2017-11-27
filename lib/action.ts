import { Observable } from "rxjs/Observable";

import Endpoint from './common/endpoint';
import { IAction, IActionEndpoint, ICollection } from './common/interfaces';
import { isAction } from './common/type.guards';
import DigitalOcean from './digitalOcean';

/**
 * Action endpoint
 *
 * @class ActionEndpoint
 * @extends {Endpoint}
 * @implements {IActionEndpoint}
 */
export default class ActionEndpoint extends Endpoint implements IActionEndpoint {
    /**
     * Creates an instance of ActionEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof ActionEndpoint
     */
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/actions');
    }
    /**
     * List all actions.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IAction>>}
     *
     * @memberof ActionEndpoint
     */
    public list(page: number, perPage?: number): Observable<ICollection<IAction>> {
        let url: string = this.prefix;
        return this.getCollection<IAction>(page, perPage, url, 'actions', isAction)
    }
    /**
     * Get action by id.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof ActionEndpoint
     */
    public get(id: number): Observable<IAction> {
        let url: string = `${this.prefix}/${id}`;
        let promise = this.api.get(url);
        return this.fromPromise(promise, 'action', isAction);
    }
}