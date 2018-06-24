import {AxiosError} from 'axios';
import API from './common/api';
/**
 * Digital Ocean API
 *
 * @export
 * @class DigitalOcean
 * @extends {API}
 */
class DigitalOcean extends API {
    /**
     * error fn handler interceptor
     *
     * @private
     * @static
     *
     * @memberof DigitalOcean
     */
    private static errorHandler(error: AxiosError) {
        const res = error.response;
        if (!res) return Promise.reject(error);
        error.message = [
            res.status || '',
            res.statusText || '',
        ].join(' - ');
        if (res.data && res.data.id) {
            const data = res.data;
            const id = ['[', data.id, ']'].join('');
            error.message = [error.message, id].join(': ');
            if (data.message) {
                error.message = [
                    error.message,
                    data.message,
                ].join(' ');
            }
        }
        return Promise.reject(error);
    }
    /**
     * Creates an instance of DigitalOcean.
     * @param {string} token
     * @param {number} [timeout]
     *
     * @memberof DigitalOcean
     */
    constructor(token: string, timeout?: number) {
        super({
            headers: [
                { key: 'Authorization', value: ['Bearer', token].join(' ') },
                { key: 'Content-Type', value: 'application/json' },
            ],
            host: 'api.digitalocean.com',
            invalidResponse: new Error('Invalid API response.'),
            prefix: '/v2',
            protocol: 'https',
            timeout: timeout || 5000,

        });
        this.http.interceptors.response.use(null, DigitalOcean.errorHandler);
    }
}

export default DigitalOcean;
export {DigitalOcean};
