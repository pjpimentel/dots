import API from './common/api';
/**
 * Digital Ocean API
 *
 * @export
 * @class DigitalOcean
 * @extends {API}
 */
declare class DigitalOcean extends API {
    /**
     * error fn handler interceptor
     *
     * @private
     * @static
     *
     * @memberof DigitalOcean
     */
    private static errorHandler(error);
    /**
     * Creates an instance of DigitalOcean.
     * @param {string} token
     * @param {number} [timeout]
     *
     * @memberof DigitalOcean
     */
    constructor(token: string, timeout?: number);
}
export default DigitalOcean;
export { DigitalOcean };
