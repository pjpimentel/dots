import { Observable } from 'rxjs';

import Endpoint from './common/endpoint';
import { IAccount, IAccountEndpoint } from './common/interfaces';
import DigitalOcean from './digitalOcean';
import { isAccount } from './common/type.guards';

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
    constructor(digitalOcean: DigitalOcean) {
        super(digitalOcean, '/account');
    }
    /**
     * get account info
     *
     * @returns {Observable<IAccount>}
     *
     * @memberof AccountEndpoint
     */
    public get(): Observable<IAccount> {
        let url: string = this.prefix;
        let promise = this.api.get(url);
        return this.fromPromise(promise, 'account', isAccount);
    }
}