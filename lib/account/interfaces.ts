'use strict';
/**
 * Account raw object
 * 
 * @export
 * @interface IAccount
 */
export interface IAccount{
    readonly droplet_limit: number;
    readonly email_verified: boolean;
    readonly email: string;
    readonly floating_ip_limit: number;
    readonly status_message: string;
    readonly status: string;
    readonly uuid: string;
}
/**
 * Account endpoint methods
 * 
 * @export
 * @interface IAccountEndpoint
 */
export interface IAccountEndpoint{
    get();
}