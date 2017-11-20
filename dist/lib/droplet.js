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
 * Droplet endpoint
 *
 * @class DropletEndpoint
 * @extends {Endpoint<DigitalOcean>}
 * @implements {IDropletEndpoint}
 */
var DropletEndpoint = /** @class */ (function (_super) {
    __extends(DropletEndpoint, _super);
    /**
     * Creates an instance of DropletEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof DropletEndpoint
     */
    function DropletEndpoint(digitalOcean) {
        return _super.call(this, digitalOcean, "/droplets") || this;
    }
    /**
     * Change droplet's kernel.
     *
     * @param {number} id
     * @param {number} kernelId
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.changeKernel = function (id, kernelId) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "change_kernel", kernel: kernelId };
        return this.doAction(url, params);
    };
    /**
     * Create new droplet.
     *
     * @param {IDropletSpecs} specs
     * @returns {Observable<IDroplet>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.create = function (specs) {
        var url = this.prefix;
        var promise = this.api.post(url, specs);
        return this.fromPromise(promise, "droplet", type_guards_1.isDroplet);
    };
    /**
     * Create snapshot from droplet.
     *
     * @param {number} id
     * @param {string} snapshotName
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.createSnapshot = function (id, snapshotName) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "snapshot", name: snapshotName };
        return this.doAction(url, params);
    };
    DropletEndpoint.prototype.delete = function (param) {
        var params = {};
        var url = this.prefix;
        if (typeof param === "number")
            url += "/" + param;
        else
            params.tag_name = param;
        var promise = this.api.delete(url, { params: params });
        return this.fromPromise(promise);
    };
    /**
     * Disable droplet backups.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.disableBackups = function (id) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "disable_backups" };
        return this.doAction(url, params);
    };
    /**
     * Enable droplet backups.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.enableBackups = function (id) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "enable_backups" };
        return this.doAction(url, params);
    };
    /**
     * Enable ipv6 networking in one droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.enableIPv6 = function (id) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "enable_ipv6" };
        return this.doAction(url, params);
    };
    /**
     * Enable private networking in one droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.enablePrivateNetworking = function (id) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "enable_private_networking" };
        return this.doAction(url, params);
    };
    /**
     * Get droplet by id.
     *
     * @param {number} id
     * @returns {Observable<IDroplet>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.get = function (id) {
        var url = this.prefix + "/" + id;
        var promise = this.api.get(url);
        return this.fromPromise(promise, "droplet", type_guards_1.isDroplet);
    };
    /**
     * Get droplet's action.
     *
     * @param {number} dropletId
     * @param {number} actionId
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.getActionById = function (dropletId, actionId) {
        var url = this.prefix + "/" + dropletId + "/actions/" + actionId;
        var promise = this.api.get(url);
        return this.fromPromise(promise, "action", type_guards_1.isAction);
    };
    DropletEndpoint.prototype.list = function (a, b, c) {
        var tag = null;
        var page = null;
        var perPage = null;
        // tslint:disable-next-line:no-unused-expression
        if (typeof a === "string")
            ((tag = a) && (page = b) && (perPage = c));
        else
            ((page = a) && (perPage = b));
        var url = this.prefix;
        if (tag)
            url = url + "?tag_name=" + tag;
        return this.getCollection(page, perPage, url, "droplets");
    };
    /**
     * List all droplet's snapshots. [droplet ? snapshot = image]
     *
     * @param {number} id
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IImage>>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.listImages = function (id, type, page, perPage) {
        var url = this.prefix + "/" + id + "/" + type;
        return this.getCollection(page, perPage, url, type, type_guards_1.isImage);
    };
    /**
     * List droplets that are running on the same physical hardware.
     *
     * @returns {Observable<IDroplet[]>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.listNeighbors = function () {
        var url = "reports/droplet_neighbors";
        var promise = this.api.get(url);
        return this.fromPromise(promise, "neighbors");
    };
    /**
     * List droplet's neighbors.
     *
     * @param {number} id
     * @returns {Observable<Neighbors>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.listNeighborsByDropletId = function (id) {
        var url = this.prefix + "/" + id + "/neighbors";
        var promise = this.api.get(url);
        return this.fromPromise(promise, "droplets", type_guards_1.isArrayOfDroplet);
    };
    /**
     * Reset droplet password.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.passwordReset = function (id) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "password_reset" };
        return this.doAction(url, params);
    };
    /**
     * Power cycle droplet [similar to pushing the reset button].
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.powerCycle = function (id) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "power_cycle" };
        return this.doAction(url, params);
    };
    /**
     * Power off a droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.powerOff = function (id) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "power_off" };
        return this.doAction(url, params);
    };
    /**
     * Power on a droplet.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.powerOn = function (id) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "power_on" };
        return this.doAction(url, params);
    };
    /**
     * Reboot droplet [reboot in a graceful way].
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.reboot = function (id) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "reboot" };
        return this.doAction(url, params);
    };
    DropletEndpoint.prototype.rebuild = function (id, b) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "rebuild", image: b };
        return this.doAction(url, params);
    };
    /**
     * Rename droplet.
     *
     * @param {number} id
     * @param {string} newName
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.rename = function (id, newName) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "rename", name: newName };
        return this.doAction(url, params);
    };
    /**
     * Resize droplet.
     *
     * @param {number} id
     * @param {string} sizeSlug
     * @param {boolean} [resizeDisk=false]
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.resize = function (id, sizeSlug, resizeDisk) {
        if (resizeDisk === void 0) { resizeDisk = false; }
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "resize", disk: resizeDisk, size: sizeSlug };
        return this.doAction(url, params);
    };
    DropletEndpoint.prototype.restore = function (id, b) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "restore", image: b };
        return this.doAction(url, params);
    };
    /**
     * Shutdown a droplet [shutdown in a graceful way].
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.shutdown = function (id) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: "shutdown" };
        return this.doAction(url, params);
    };
    return DropletEndpoint;
}(endpoint_1.default));
exports.default = DropletEndpoint;
//# sourceMappingURL=droplet.js.map