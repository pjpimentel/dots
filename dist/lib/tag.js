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
 * Tag endpoint.
 *
 * @class TagEndpoint
 * @extends {Endpoint}
 * @implements {ITagEndpoint}
 */
var TagEndpoint = /** @class */ (function (_super) {
    __extends(TagEndpoint, _super);
    /**
     * Creates an instance of TagEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberof TagEndpoint
     */
    function TagEndpoint(digitalOcean) {
        return _super.call(this, digitalOcean, '/tags') || this;
    }
    /**
     * Create create new tag.
     *
     * @param {ITagSpecs} specs
     * @returns {Observable<Tag>}
     *
     * @memberof TagEndpoint
     */
    TagEndpoint.prototype.create = function (specs) {
        var url = this.prefix;
        var promise = this.api.post(url, specs);
        return this.fromPromise(promise, 'tag', type_guards_1.isTag);
    };
    ;
    /**
     * Delete tag by name.
     *
     * @param {string} name
     * @returns {Observable<void>}
     *
     * @memberof TagEndpoint
     */
    TagEndpoint.prototype.delete = function (name) {
        var url = this.prefix + "/" + name;
        var promise = this.api.delete(url);
        return this.fromPromise(promise);
    };
    /**
     * Get Tag by name.
     *
     * @param {string} name
     * @returns {Observable<Tag>}
     *
     * @memberof TagEndpoint
     */
    TagEndpoint.prototype.get = function (name) {
        var url = this.prefix + "/" + name;
        var promise = this.api.get(url);
        return this.fromPromise(promise, 'tag', type_guards_1.isTag);
    };
    /**
     * List all tags.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Observable<ICollection<Tag>>}
     *
     * @memberof TagEndpoint
     */
    TagEndpoint.prototype.list = function (page, perPage) {
        var url = this.prefix;
        return this.getCollection(page, perPage, url, 'tags', type_guards_1.isTag);
    };
    /**
     * Prepare tag/untag parameters
     *
     * @private
     * @param {(number | string | IResource | IResource[])} a
     * @param {string} [b]
     * @returns {IResource[]}
     *
     * @memberof TagEndpoint
     */
    TagEndpoint.prototype.getResouceArray = function (a, b) {
        var resources = [];
        if (!type_guards_1.isArrayOfResource(a)) {
            if (!type_guards_1.isResource(a)) {
                if (typeof a === 'number')
                    a = a.toString();
                if (typeof a !== 'string')
                    throw new TypeError('Expecting resource id as first parameter.');
                if (typeof b !== 'string')
                    throw new TypeError('Expecting resource type as second parameter.');
                a = { resource_id: a, resource_type: b };
            }
            a = [a];
        }
        resources = a;
        return resources;
    };
    TagEndpoint.prototype.tagResource = function (name, a, b) {
        var resources = this.getResouceArray(a, b);
        var url = this.prefix + "/" + name + "/resources";
        var promise = this.api.post(url, { resources: resources });
        return this.fromPromise(promise);
    };
    TagEndpoint.prototype.untagResource = function (name, a, b) {
        var resources = this.getResouceArray(a, b);
        var url = this.prefix + "/" + name + "/resources";
        var promise = this.api.delete(url, { data: { resources: resources } });
        return this.fromPromise(promise);
    };
    return TagEndpoint;
}(endpoint_1.default));
exports.default = TagEndpoint;
//# sourceMappingURL=tag.js.map