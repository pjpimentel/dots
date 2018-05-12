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
 * Snapshot endpoint.
 *
 * @class SnapshotEndpoint
 * @extends {Endpoint}
 * @implements {ISnapshotEndpoint}
 */
var SnapshotEndpoint = /** @class */ (function (_super) {
    __extends(SnapshotEndpoint, _super);
    /**
     * Creates an instance of SnapshotEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof SnapshotEndpoint
     */
    function SnapshotEndpoint(digitalOcean) {
        return _super.call(this, digitalOcean, '/snapshots') || this;
    }
    /**
     * Delete snapshot by id.
     *
     * @param {string} id
     * @returns {Observable<void>}
     *
     * @memberof SnapshotEndpoint
     */
    SnapshotEndpoint.prototype.delete = function (id) {
        var url = this.prefix + "/" + id;
        var promise = this.api.delete(url);
        return this.fromPromise(promise);
    };
    /**
     * Get snapshot by id.
     *
     * @param {string} id
     * @returns {Observable<ISnapshot>}
     *
     * @memberof SnapshotEndpoint
     */
    SnapshotEndpoint.prototype.get = function (id) {
        var url = this.prefix + "/" + id;
        var promise = this.api.get(url);
        return this.fromPromise(promise, 'snapshot', type_guards_1.isSnapshot);
    };
    SnapshotEndpoint.prototype.list = function (a, b, c) {
        var resourceType = null, page = null, perPage = null;
        if (typeof a === 'string')
            ((resourceType = a) && (page = b) && (perPage = c));
        else
            ((page = a) && (perPage = b));
        var url = this.prefix;
        if (resourceType)
            url = url + "?resource_type=" + resourceType;
        return this.getCollection(page, perPage, url, 'snapshots', type_guards_1.isSnapshot);
    };
    return SnapshotEndpoint;
}(endpoint_1.default));
exports.default = SnapshotEndpoint;
//# sourceMappingURL=snapshot.js.map