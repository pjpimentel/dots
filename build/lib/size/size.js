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
 * Size asset.
 *
 * @class Size
 * @extends {Asset<SizeEndpoint>}
 * @implements {ISize}
 */
var Size = (function (_super) {
    __extends(Size, _super);
    /**
     * Creates an instance of Size.
     * @param {SizeEndpoint} endpoint
     * @param {ISize} size
     *
     * @memberOf Size
     */
    function Size(endpoint, size) {
        var _this = _super.call(this, endpoint) || this;
        _this.available = size.available;
        _this.disk = size.disk;
        _this.memory = size.memory;
        _this.price_hourly = size.price_hourly;
        _this.price_monthly = size.price_monthly;
        _this.regions = size.regions;
        _this.slug = size.slug;
        _this.transfer = size.transfer;
        _this.vcpus = size.vcpus;
        return _this;
    }
    return Size;
}(asset_1.default));
exports.default = Size;
