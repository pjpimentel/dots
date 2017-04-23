'use strict';
import {IAccount} from './interfaces';
import AccountEndpoint from './endpoint';
import Asset from '../common/asset';
/**
 * Account asset
 * 
 * @class Account
 * @extends {Asset<AccountEndpoint>}
 * @implements {IAccount}
 */
class Account extends Asset<AccountEndpoint> implements IAccount{
    readonly droplet_limit: number;
    readonly email_verified: boolean;
    readonly email: string;
    readonly floating_ip_limit: number;
    readonly status_message: string;
    readonly status: string;
    readonly uuid: string;
    /**
     * Creates an instance of Account.
     * @param {AccountEndpoint} endpoint 
     * @param {IAccount} account 
     * 
     * @memberOf Account
     */
    constructor(endpoint: AccountEndpoint, account: IAccount){
        super(endpoint);
        this.droplet_limit = account.droplet_limit;
        this.email = account.email;
        this.email_verified = account.email_verified;
        this.floating_ip_limit = account.floating_ip_limit;
        this.status = account.status;
        this.status_message = account.status_message;
        this.uuid = account.uuid;
    }
}

export default Account;
