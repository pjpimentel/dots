'use strict';
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
var asset_1 = require("../common/asset");
/**
 * Account asset
 *
 * @class Account
 * @extends {Asset<AccountEndpoint>}
 * @implements {IAccount}
 */
var Account = (function (_super) {
    __extends(Account, _super);
    /**
     * Creates an instance of Account.
     * @param {AccountEndpoint} endpoint
     * @param {IAccount} account
     *
     * @memberOf Account
     */
    function Account(endpoint, account) {
        var _this = _super.call(this, endpoint) || this;
        _this.droplet_limit = account.droplet_limit;
        _this.email = account.email;
        _this.email_verified = account.email_verified;
        _this.floating_ip_limit = account.floating_ip_limit;
        _this.status = account.status;
        _this.status_message = account.status_message;
        _this.uuid = account.uuid;
        return _this;
    }
    return Account;
}(asset_1.default));
exports.default = Account;
