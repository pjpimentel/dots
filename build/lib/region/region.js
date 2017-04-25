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
 * Region asset.
 *
 * @class Region
 * @extends {Asset<RegionEndpoint>}
 * @implements {IRegion}
 */
var Region = (function (_super) {
    __extends(Region, _super);
    /**
     * Creates an instance of Region.
     * @param {RegionEndpoint} endpoint
     * @param {IRegion} region
     *
     * @memberOf Region
     */
    function Region(endpoint, region) {
        var _this = _super.call(this, endpoint) || this;
        _this.available = region.available;
        _this.features = region.features;
        _this.name = region.name;
        _this.sizes = region.sizes;
        _this.slug = region.slug;
        return _this;
    }
    return Region;
}(asset_1.default));
exports.default = Region;
