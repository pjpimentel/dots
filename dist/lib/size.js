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
 * Size endpoint.
 *
 * @class SizeEndpoint
 * @extends {Endpoint}
 * @implements {ISizeEndpoint}
 */
var SizeEndpoint = /** @class */ (function (_super) {
    __extends(SizeEndpoint, _super);
    /**
     * Creates an instance of SizeEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof SizeEndpoint
     */
    function SizeEndpoint(digitalOcean) {
        return _super.call(this, digitalOcean, '/sizes') || this;
    }
    /**
     * List all sizes.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<ISize>>}
     *
     * @memberof SizeEndpoint
     */
    SizeEndpoint.prototype.list = function (page, perPage) {
        var url = this.prefix;
        return this.getCollection(page, perPage, url, 'sizes', type_guards_1.isSize);
    };
    return SizeEndpoint;
}(endpoint_1.default));
exports.default = SizeEndpoint;
//# sourceMappingURL=size.js.map