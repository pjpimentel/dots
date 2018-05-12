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
 * Region endpoint.
 *
 * @class RegionEndpoint
 * @extends {Endpoint}
 * @implements {IRegionEndpoint}
 */
var RegionEndpoint = /** @class */ (function (_super) {
    __extends(RegionEndpoint, _super);
    /**
     * Creates an instance of RegionEndpoint.a
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof RegionEndpoint
     */
    function RegionEndpoint(digitalOcean) {
        return _super.call(this, digitalOcean, '/regions') || this;
    }
    /**
     * List all regions.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IRegion>>}
     *
     * @memberof RegionEndpoint
     */
    RegionEndpoint.prototype.list = function (page, perPage) {
        var url = this.prefix;
        return this.getCollection(page, perPage, url, 'regions', type_guards_1.isRegion);
    };
    return RegionEndpoint;
}(endpoint_1.default));
exports.default = RegionEndpoint;
//# sourceMappingURL=region.js.map