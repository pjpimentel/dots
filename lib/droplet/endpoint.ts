'use strict';
import {IAccount} from './interfaces';
import {IAccountEndpoint} from './interfaces';
import Account from './account';
import DigitalOcean from '../digitalOcean';
import Endpoint from '../common/endpoint';
/**
 * Account endpoint
 * 
 * @class AccountEndpoint
 * @extends {Endpoint<DigitalOcean>}
 * @implements {IAccountEndpoint}
 */
class AccountEndpoint extends Endpoint<DigitalOcean> implements IAccountEndpoint{
    /**
     * Creates an instance of AccountEndpoint.
     * @param {DigitalOcean} digitalOcean 
     * 
     * @memberOf AccountEndpoint
     */
    constructor(digitalOcean: DigitalOcean){
        super(digitalOcean, '/account');
    }
    /**
     * get account info
     * 
     * @returns {Promise<Account>} 
     * 
     * @memberOf AccountEndpoint
     */
    public async get(): Promise<Account>{
        let url: string = this.prefix;
        let res = await this.api.get(url);
        if(!res.data) throw this.api.invalidResponse;
        let account: IAccount = <IAccount> res.data.account;
        return new Account(this, account);
    }
}

export default AccountEndpoint;