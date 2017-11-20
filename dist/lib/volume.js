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
 * Volume endpoint.
 *
 * @class VolumeEndpoint
 * @extends {Endpoint}
 * @implements {IVolumeEndpoint}
 */
var VolumeEndpoint = /** @class */ (function (_super) {
    __extends(VolumeEndpoint, _super);
    /**
     * Creates an instance of VolumeEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof VolumeEndpoint
     */
    function VolumeEndpoint(digitalOcean) {
        return _super.call(this, digitalOcean, "/volumes") || this;
    }
    VolumeEndpoint.prototype.attach = function (a, b, c) {
        var dropletId = b;
        var volumeId = null, volumeName = null, region = null;
        var url = null, params = {};
        if (c)
            ((volumeName = a) && (region = c));
        else
            volumeId = a;
        url = this.prefix + "/" + volumeId + "/actions";
        params.type = "attach";
        params.droplet_id = dropletId;
        if (!volumeId) {
            url = this.prefix + "/actions";
            params.volume_name = volumeName;
            params.region = region;
        }
        var promise = this.api.post(url, params);
        return this.fromPromise(promise, "action", type_guards_1.isAction);
    };
    /**
     * Create new volume.
     *
     * @param {IVolumeSpecs} specs
     * @returns {Observable<IVolume>}
     *
     * @memberof VolumeEndpoint
     */
    VolumeEndpoint.prototype.create = function (specs) {
        var url = this.prefix;
        if (specs.snapshot_id)
            specs.region = undefined;
        else if (!specs.region)
            throw new Error("Missing volume region.");
        var promise = this.api.post(url, specs);
        return this.fromPromise(promise, "volume", type_guards_1.isVolume);
    };
    /**
     * Create new Snapshot from volume.
     *
     * @param {string} id
     * @param {string} snapshotName
     * @returns {Observable<ISnapshot>}
     *
     * @memberof VolumeEndpoint
     */
    VolumeEndpoint.prototype.createSnapshot = function (id, snapshotName) {
        var url = this.prefix + "/" + id + "/snapshots";
        var params = {};
        if (snapshotName)
            params.name = snapshotName;
        var promise = this.api.post(url, params);
        return this.fromPromise(promise, "snapshot", type_guards_1.isSnapshot);
    };
    VolumeEndpoint.prototype.delete = function (name, region) {
        var id = null;
        var url = this.prefix;
        var params = {};
        if (!region)
            ((id = name) && (url = this.prefix + "/" + id));
        else
            ((params.name = name) && (params.region = region));
        var promise = this.api.delete(url, { params: params });
        return this.fromPromise(promise);
    };
    VolumeEndpoint.prototype.detach = function (a, b, c) {
        var dropletId = b, volumeId = null, volumeName = null, region = null, url = null, params = {};
        if (c)
            ((volumeName = a) && (region = c));
        else
            volumeId = a;
        url = this.prefix + "/" + volumeId + "/actions";
        params.type = "detach";
        params.droplet_id = dropletId;
        if (!volumeId) {
            url = this.prefix + "/actions";
            params.volume_name = volumeName;
            params.region = region;
        }
        var promise = this.api.post(url, params);
        return this.fromPromise(promise, "action", type_guards_1.isAction);
    };
    /**
     * Get volume's action by id.
     *
     * @param {string} volumeId
     * @param {number} actionId
     * @returns {Observable<IAction>}
     *
     * @memberof VolumeEndpoint
     */
    VolumeEndpoint.prototype.getActionById = function (volumeId, actionId) {
        var url = this.prefix + "/" + volumeId + "/actions/" + actionId;
        var promise = this.api.get(url);
        return this.fromPromise(promise, "action", type_guards_1.isAction);
    };
    /**
     * Get volume by id.
     *
     * @param {string} id
     * @returns {Observable<IVolume>}
     *
     * @memberof VolumeEndpoint
     */
    VolumeEndpoint.prototype.get = function (id) {
        var url = this.prefix + "/" + id;
        var promise = this.api.get(url);
        return this.fromPromise(promise, "volume", type_guards_1.isVolume);
    };
    /**
     * List all volumes.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IVolume>>}
     *
     * @memberof VolumeEndpoint
     */
    VolumeEndpoint.prototype.list = function (page, perPage) {
        var url = this.prefix;
        return this.getCollection(page, perPage, url, "volumes", type_guards_1.isVolume);
    };
    /**
     * List all volumes's actions.
     *
     * @param {string} volumeId
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IAction>>}
     *
     * @memberof VolumeEndpoint
     */
    VolumeEndpoint.prototype.listActions = function (volumeId, page, perPage) {
        var url = this.prefix + "/" + volumeId + "/actions";
        return this.getCollection(page, perPage, url, "actions", type_guards_1.isAction);
    };
    /**
     * List all volumes by name.
     *
     * @param {string} name
     * @param {string} region
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IVolume>>}
     *
     * @memberof VolumeEndpoint
     */
    VolumeEndpoint.prototype.listByName = function (name, region, page, perPage) {
        var url = this.prefix + "?name=" + name + "&region=" + region;
        return this.getCollection(page, perPage, url, "volumes", type_guards_1.isVolume);
    };
    /**
     * List all volumes's snapshots.
     *
     * @param {string} volumeId
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<ISnapshot>>}
     *
     * @memberof VolumeEndpoint
     */
    VolumeEndpoint.prototype.listSnapshots = function (volumeId, page, perPage) {
        var url = this.prefix + "/" + volumeId + "/snapshots";
        return this.getCollection(page, perPage, url, "snapshots", type_guards_1.isSnapshot);
    };
    /**
     * Resize volume.
     *
     * @param {string} id
     * @param {number} size
     * @returns {Observable<IAction>}
     *
     * @memberof VolumeEndpoint
     */
    VolumeEndpoint.prototype.resize = function (id, size) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "resize", size_gigabytes: size };
        var promise = this.api.post(url, params);
        return this.fromPromise(promise, "action", type_guards_1.isAction);
    };
    return VolumeEndpoint;
}(endpoint_1.default));
exports.default = VolumeEndpoint;
//# sourceMappingURL=volume.js.map