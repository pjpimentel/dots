'use strict';
export interface IAccount{
    readonly droplet_limit: number;
    readonly email_verified: boolean;
    readonly email: string;
    readonly floating_ip_limit: number;
    readonly status_message: string;
    readonly status: string;
    readonly uuid: string;
}
export interface IAccountEndpoint extends IEndpoint{
    get();
}