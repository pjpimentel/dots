
'use strict';
import {AxiosError} from 'axios';
import API from './common/api';
/**
 * Digital Ocean API
 * 
 * @export
 * @class DigitalOcean
 * @extends {API}
 */
class DigitalOcean extends API{
    /**
     * error fn handler interceptor
     * 
     * @private
     * @static
     * 
     * @memberOf DigitalOcean
     */
    private static errorHandler(error: AxiosError) {
        let res = error.response;
        if (!res) return Promise.reject(error);
        error.message = [
            res.status || '',
            res.statusText || ''
        ].join(' - ');
        if (res.data && res.data.id) {
            let data = res.data;
            let id = ['[', data.id, ']'].join('');
            error.message = [error.message, id].join(': ');
            if (data.message) {
                error.message = [
                    error.message,
                    data.message
                ].join(' ');
            }
        }
        return Promise.reject(error);
    };
    /**
     * Creates an instance of DigitalOcean.
     * @param {string} token 
     * @param {number} [timeout] 
     * 
     * @memberOf DigitalOcean
     */
    constructor(token: string, timeout?: number) {
        super({
            protocol: 'https',
            host: 'api.digitalocean.com',
            prefix: '/v2',
            timeout: timeout || 5000,
            headers: [
                { key: 'Authorization', value: ['Bearer', token].join(' ') },
                { key: 'Content-Type', value: 'application/json' }
            ],
            invalidResponse: new Error('Invalid API response.')
        });
        this.http
            .interceptors
            .response
            .use(null, DigitalOcean.errorHandler);
    };
}

export default DigitalOcean;
export {DigitalOcean};