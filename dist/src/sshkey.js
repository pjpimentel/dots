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
 * SSH Key endpoint;
 *
 * @class SSHKeyEndpoint
 * @extends {Endpoint}
 * @implements {ISSHKeyEndpoint}
 */
var SSHKeyEndpoint = /** @class */ (function (_super) {
    __extends(SSHKeyEndpoint, _super);
    /**
     * Creates an instance of SSHKeyEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof SSHKeyEndpoint
     */
    function SSHKeyEndpoint(digitalOcean) {
        return _super.call(this, digitalOcean, '/account/keys') || this;
    }
    /**
     * Create new ssh key.
     *
     * @param {ISSHKeySpecs} specs
     * @returns {Observable<ISSHKey>}
     *
     * @memberof SSHKeyEndpoint
     */
    SSHKeyEndpoint.prototype.create = function (specs) {
        var url = this.prefix;
        var promise = this.api.post(url, specs);
        return this.fromPromise(promise, 'ssh_key', type_guards_1.isSSHKey);
    };
    SSHKeyEndpoint.prototype.delete = function (uid) {
        var url = this.prefix + "/" + uid;
        var promise = this.api.delete(url);
        return this.fromPromise(promise);
    };
    /**
     * List all ssh keys.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<ISSHKey>>}
     *
     * @memberof SSHKeyEndpoint
     */
    SSHKeyEndpoint.prototype.list = function (page, perPage) {
        var url = this.prefix;
        return this.getCollection(page, perPage, url, 'ssh_keys', type_guards_1.isSSHKey);
    };
    SSHKeyEndpoint.prototype.get = function (uid) {
        var url = this.prefix + "/" + uid;
        var promise = this.api.get(url);
        return this.fromPromise(promise, 'ssh_key', type_guards_1.isSSHKey);
    };
    SSHKeyEndpoint.prototype.update = function (uid, specs) {
        var url = this.prefix + "/" + uid;
        var promise = this.api.put(url, specs);
        return this.fromPromise(promise, 'ssh_key', type_guards_1.isSSHKey);
    };
    return SSHKeyEndpoint;
}(endpoint_1.default));
exports.default = SSHKeyEndpoint;
//# sourceMappingURL=sshkey.js.map