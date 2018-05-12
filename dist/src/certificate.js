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
var endpoint_1 = require("./common/endpoint");
var type_guards_1 = require("./common/type.guards");
/**
 * Certificate endpoint.
 *
 * @class CertificateEndpoint
 * @extends {Endpoint}
 * @implements {ICertificateEndpoint}
 */
var CertificateEndpoint = /** @class */ (function (_super) {
    __extends(CertificateEndpoint, _super);
    /**
     * Creates an instance of CertificateEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof CertificateEndpoint
     */
    function CertificateEndpoint(digitalOcean) {
        return _super.call(this, digitalOcean, '/account/certificates') || this;
    }
    /**
     * Create new certificate.
     *
     * @param {ICertificateSpecs} specs
     * @returns {Observable<ICertificate>}
     *
     * @memberof CertificateEndpoint
     */
    CertificateEndpoint.prototype.create = function (specs) {
        var url = this.prefix;
        var promise = this.api.post(url, specs);
        return this.fromPromise(promise, 'certificate', type_guards_1.isCertificate);
    };
    /**
     * Delete certificate by id.
     *
     * @param {string} id
     * @returns {Observable<void>}
     *
     * @memberof CertificateEndpoint
     */
    CertificateEndpoint.prototype.delete = function (id) {
        var url = this.prefix + "/" + id;
        var promise = this.api.delete(url);
        return this.fromPromise(promise);
    };
    /**
     * List all certificates.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<ICertificate>>}
     *
     * @memberof CertificateEndpoint
     */
    CertificateEndpoint.prototype.list = function (page, perPage) {
        var url = this.prefix;
        return this.getCollection(page, perPage, url, 'Certificates');
    };
    /**
     * Get certificate by id.
     *
     * @param {string} id
     * @returns {Observable<ICertificate>}
     *
     * @memberof CertificateEndpoint
     */
    CertificateEndpoint.prototype.get = function (id) {
        var url = this.prefix + "/" + id;
        var promise = this.api.get(url);
        return this.fromPromise(promise, 'certificate', type_guards_1.isCertificate);
    };
    return CertificateEndpoint;
}(endpoint_1.default));
exports.default = CertificateEndpoint;
//# sourceMappingURL=certificate.js.map