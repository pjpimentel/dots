"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./common/api");
/**
 * Digital Ocean API
 *
 * @export
 * @class DigitalOcean
 * @extends {API}
 */
var DigitalOcean = /** @class */ (function (_super) {
    __extends(DigitalOcean, _super);
    /**
     * Creates an instance of DigitalOcean.
     * @param {string} token
     * @param {number} [timeout]
     *
     * @memberof DigitalOcean
     */
    function DigitalOcean(token, timeout) {
        var _this = _super.call(this, {
            protocol: 'https',
            host: 'api.digitalocean.com',
            prefix: '/v2',
            timeout: timeout || 5000,
            headers: [
                { key: 'Authorization', value: ['Bearer', token].join(' ') },
                { key: 'Content-Type', value: 'application/json' },
            ],
            invalidResponse: new Error('Invalid API response.'),
        }) || this;
        _this.http
            .interceptors
            .response
            .use(null, DigitalOcean.errorHandler);
        return _this;
    }
    /**
     * error fn handler interceptor
     *
     * @private
     * @static
     *
     * @memberof DigitalOcean
     */
    DigitalOcean.errorHandler = function (error) {
        var res = error.response;
        if (!res)
            return Promise.reject(error);
        error.message = [
            res.status || '',
            res.statusText || '',
        ].join(' - ');
        if (res.data && res.data.id) {
            var data = res.data;
            var id = ['[', data.id, ']'].join('');
            error.message = [error.message, id].join(': ');
            if (data.message) {
                error.message = [
                    error.message,
                    data.message,
                ].join(' ');
            }
        }
        return Promise.reject(error);
    };
    return DigitalOcean;
}(api_1.default));
exports.DigitalOcean = DigitalOcean;
exports.default = DigitalOcean;
//# sourceMappingURL=digitalOcean.js.map