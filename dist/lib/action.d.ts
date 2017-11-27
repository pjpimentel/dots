import { Observable } from "rxjs/Observable";
import Endpoint from './common/endpoint';
import { IAction, IActionEndpoint, ICollection } from './common/interfaces';
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
    constructor(digitalOcean: DigitalOcean);
    /**
     * List all actions.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IAction>>}
     *
     * @memberof ActionEndpoint
     */
    list(page: number, perPage?: number): Observable<ICollection<IAction>>;
    /**
     * Get action by id.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof ActionEndpoint
     */
    get(id: number): Observable<IAction>;
}
