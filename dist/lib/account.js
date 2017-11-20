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
 * Account endpoint
 *
 * @class AccountEndpoint
 * @extends {Endpoint<DigitalOcean>}
 * @implements {IAccountEndpoint}
 */
var AccountEndpoint = /** @class */ (function (_super) {
    __extends(AccountEndpoint, _super);
    /**
     * Creates an instance of AccountEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof AccountEndpoint
     */
    function AccountEndpoint(digitalOcean) {
        return _super.call(this, digitalOcean, '/account') || this;
    }
    /**
     * get account info
     *
     * @returns {Observable<IAccount>}
     *
     * @memberof AccountEndpoint
     */
    AccountEndpoint.prototype.get = function () {
        var url = this.prefix;
        var promise = this.api.get(url);
        return this.fromPromise(promise, 'account', type_guards_1.isAccount);
    };
    return AccountEndpoint;
}(endpoint_1.default));
exports.default = AccountEndpoint;
//# sourceMappingURL=account.js.map