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
 * Action asset
 *
 * @class Action
 * @extends {Asset<ActionEndpoint>}
 * @implements {IAction}
 */
var Action = (function (_super) {
    __extends(Action, _super);
    /**
     * Creates an instance of Action.
     * @param {ActionEndpoint} endpoint
     * @param {IAction} action
     *
     * @memberOf Action
     */
    function Action(endpoint, action) {
        var _this = _super.call(this, endpoint) || this;
        _this.completed_at = action.completed_at;
        _this.id = action.id;
        _this.region_slug = action.region_slug;
        _this.resource_id = action.resource_id;
        _this.resource_type = action.resource_type;
        _this.started_at = action.started_at;
        _this.status = action.status;
        _this.type = action.type;
        return _this;
    }
    return Action;
}(asset_1.default));
exports.default = Action;
