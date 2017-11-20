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
//TODO: test
/**
 * Image endpoint.
 *
 * @class ImageEndpoint
 * @extends {Endpoint<DigitalOcean>}
 * @implements {IImageEndpoint}
 */
var ImageEndpoint = /** @class */ (function (_super) {
    __extends(ImageEndpoint, _super);
    /**
     * Creates an instance of ImageEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof ImageEndpoint
     */
    function ImageEndpoint(digitalOcean) {
        return _super.call(this, digitalOcean, '/images') || this;
    }
    /**
     * Convert image to snapshot.
     *
     * @param {number} id
     * @returns {Observable<IAction>}
     *
     * @memberof ImageEndpoint
     */
    ImageEndpoint.prototype.convertToSnapshot = function (id) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: 'convert' };
        var promise = this.api.post(url, params);
        return this.fromPromise(promise, 'action', type_guards_1.isAction);
    };
    /**
     * Delete image by id.
     *
     * @param {number} id
     * @returns {Observable<void>}
     *
     * @memberof ImageEndpoint
     */
    ImageEndpoint.prototype.delete = function (id) {
        var url = this.prefix + "/" + id;
        var promise = this.api.get(url);
        return this.fromPromise(promise);
    };
    ImageEndpoint.prototype.get = function (uid) {
        var url = this.prefix + "/" + uid;
        var promise = this.api.get(url);
        return this.fromPromise(promise, 'image', type_guards_1.isImage);
    };
    /**
     * Get images's action by id.
     *
     * @param {number} id
     * @param {number} actionId
     * @returns {Observable<IAction>}
     *
     * @memberof ImageEndpoint
     */
    ImageEndpoint.prototype.getActionById = function (id, actionId) {
        var url = this.prefix + "/" + id + "/actions/" + actionId;
        var promise = this.api.get(url);
        return this.fromPromise(promise, 'action', type_guards_1.isAction);
    };
    ImageEndpoint.prototype.list = function (a, b, c) {
        var type = null, page = null, perPage = null;
        if (typeof a === 'string')
            ((type = a) && (page = b) && (perPage = c));
        else
            ((page = a) && (perPage = b));
        var url = this.prefix;
        if (type)
            url = url + "?type=" + type;
        return this.getCollection(page, perPage, url, 'images', type_guards_1.isImage);
    };
    /**
     * List image's actions.
     *
     * @param {number} id
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IAction>>}
     *
     * @memberof ImageEndpoint
     */
    ImageEndpoint.prototype.listActions = function (id, page, perPage) {
        var url = this.prefix + "/" + id + "/actions";
        return this.getCollection(page, perPage, url, 'actions');
    };
    /**
     * List User's images.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<IImage>>}
     *
     * @memberof ImageEndpoint
     */
    ImageEndpoint.prototype.listPrivate = function (page, perPage) {
        var url = this.prefix + "?private=true";
        return this.getCollection(page, perPage, url, 'images');
    };
    /**
     * Transfer image to another region.
     *
     * @param {number} id
     * @param {string} regionSlug
     * @returns {Observable<IAction>}
     *
     * @memberof ImageEndpoint
     */
    ImageEndpoint.prototype.transfer = function (id, regionSlug) {
        var url = this.prefix + "/" + id + "/actions";
        var params = { type: 'transfer', region: regionSlug };
        var promise = this.api.post(url, params);
        return this.fromPromise(promise, 'action', type_guards_1.isAction);
    };
    /**
     * Update image.
     *
     * @param {number} id
     * @param {IImageUpdateSpecs} specs
     * @returns {Observable<IImage>}
     *
     * @memberof ImageEndpoint
     */
    ImageEndpoint.prototype.update = function (id, specs) {
        var url = this.prefix + "/" + id;
        var promise = this.api.post(url, specs);
        return this.fromPromise(promise, 'action', type_guards_1.isAction);
    };
    return ImageEndpoint;
}(endpoint_1.default));
exports.default = ImageEndpoint;
//# sourceMappingURL=image.js.map