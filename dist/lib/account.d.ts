import { Observable } from "rxjs/Observable";
import Endpoint from './common/endpoint';
import { IAccount, IAccountEndpoint } from './common/interfaces';
import DigitalOcean from './digitalOcean';
/**
 * Account endpoint
 *
 * @class AccountEndpoint
 * @extends {Endpoint<DigitalOcean>}
 * @implements {IAccountEndpoint}
 */
export default class AccountEndpoint extends Endpoint implements IAccountEndpoint {
    /**
     * Creates an instance of AccountEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof AccountEndpoint
     */
    constructor(digitalOcean: DigitalOcean);
    /**
     * get account info
     *
     * @returns {Observable<IAccount>}
     *
     * @memberof AccountEndpoint
     */
    get(): Observable<IAccount>;
}
