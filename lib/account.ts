import { Observable } from 'rxjs';

import Endpoint from './common/endpoint';
import { IAccount, IAccountEndpoint } from './common/interfaces';
import { isAccount } from './common/type.guards';
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
    get(): Observable<IAccount> {
        const url: string = this.prefix;
        const promise = this.api.get(url);
        return this.fromPromise(promise, 'account', isAccount);
    }
}
