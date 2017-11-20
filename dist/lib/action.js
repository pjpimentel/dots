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
 * Action endpoint
 *
 * @class ActionEndpoint
 * @extends {Endpoint}
 * @implements {IActionEndpoint}
 */
var ActionEndpoint = /** @class */ (function (_super) {
    __extends(ActionEndpoint, _super);
    /**
     * Creates an instance of ActionEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof ActionEndpoint
     */
    function ActionEndpoint(digitalOcean) {
        return _super.call(this, digitalOcean, '/actions') || this;
    }
    /**
     * List all actions.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IAction>>}
     *
     * @memberof ActionEndpoint
     */
    ActionEndpoint.prototype.list = function (page, perPage) {
        var url = this.prefix;
        return this.getCollection(page, perPage, url, 'actions', type_guards_1.isAction);
    };
    /**
     * Get action by id.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof ActionEndpoint
     */
    ActionEndpoint.prototype.get = function (id) {
        var url = this.prefix + "/" + id;
        var promise = this.api.get(url);
        return this.fromPromise(promise, 'action', type_guards_1.isAction);
    };
    return ActionEndpoint;
}(endpoint_1.default));
exports.default = ActionEndpoint;
//# sourceMappingURL=action.js.map