"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var type_guards_1 = require("./type.guards");
/**
 * Endpoint belongs to APIs
 *
 * @abstract
 * @class Endpoint
 * @template API
 */
var Endpoint = /** @class */ (function () {
    /**
     * Creates an instance of Endpoint.
     * @param {API} api
     * @param {string} prefix
     *
     * @memberof Endpoint
     */
    function Endpoint(api, prefix) {
        this.api = api;
        this.prefix = prefix;
    }
    /**
     * Default function to get and process pagination responses
     *
     * @protected
     * @template C
     * @param {number} page
     * @param {number} perPage
     * @param {string} url
     * @param {string} property
     * @returns {Observable<ICollection<C>>}
     * @memberof Endpoint
     */
    Endpoint.prototype.getCollection = function (page, perPage, url, property, filter) {
        var params = this.getCollectionParams(page, perPage);
        return this.fromPromise(this.api.get(url, { params: params }))
            .pipe(operators_1.map(function (data) {
            var collection = {};
            collection.items = data[property];
            collection.total = data && data.meta ? data.meta.total : undefined;
            collection.perPage = params.per_page;
            collection.curPage = params.page;
            collection.minPage = 1;
            collection.maxPage = Math.ceil(collection.total / params.per_page);
            return collection;
        }));
    };
    /**
     * Generic function to make a action request.
     *
     * @protected
     * @param {string} url
     * @param {object} params
     * @returns {Observable<Action>}
     *
     * @memberof Endpoint
     */
    Endpoint.prototype.doAction = function (url, params) {
        var promise = this.api.post(url, params);
        return this.fromPromise(promise, 'action', type_guards_1.isAction);
    };
    /**
     * Create observable from axios promise.
     *
     * @protected
     * @template T
     * @param {AxiosPromise} promise
     * @param {string} [property]
     * @param {(v: any, i: number) => boolean} [filter]
     * @returns {Observable<T>}
     * @memberof Endpoint
     */
    Endpoint.prototype.fromPromise = function (promise, property, filter) {
        var _this = this;
        var dataValidator = function (data) {
            if (!data)
                throw _this.api.invalidResponse;
            return data;
        };
        var observable = rxjs_1.from(promise).pipe(operators_1.map(function (res) { return res.data; }));
        if (property) {
            observable = observable.pipe(operators_1.map(function (data) { return data[property]; }), operators_1.map(dataValidator));
        }
        return observable;
    };
    /**
     * Get object with collection params
     *
     * @private
     * @param {number} [page]
     * @param {number} [perPage]
     * @returns {ICollectionParams}
     *
     * @memberof Endpoint
     */
    Endpoint.prototype.getCollectionParams = function (page, perPage) {
        return { per_page: perPage || 25, page: page || 1 };
    };
    return Endpoint;
}());
exports.default = Endpoint;
//# sourceMappingURL=endpoint.js.map