'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = require("../action/action");
var interfaces_1 = require("../action/interfaces");
/**
 * Endpoint belongs to APIs
 *
 * @abstract
 * @class Endpoint
 * @template API
 */
var Endpoint = (function () {
    /**
     * Creates an instance of Endpoint.
     * @param {API} api
     * @param {string} prefix
     *
     * @memberOf Endpoint
     */
    function Endpoint(api, prefix) {
        this.api = api;
        this.prefix = prefix;
    }
    /**
     * Default function to get and process pagination responses
     * @param page
     * @param perPage
     * @param url
     * @param property
     */
    Endpoint.prototype.getCollection = function (page, perPage, url, property) {
        return __awaiter(this, void 0, void 0, function () {
            var params, collection, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getCollectionParams(page, perPage);
                        collection = {};
                        return [4 /*yield*/, this.api.get(url, { params: params })];
                    case 1:
                        res = _a.sent();
                        if (!res.data)
                            throw this.api.invalidResponse;
                        collection.items = res.data[property];
                        collection.total = res.data.meta.total;
                        collection.perPage = params.per_page;
                        collection.curPage = params.page;
                        collection.minPage = 1;
                        collection.maxPage = Math.ceil(collection.total / params.per_page);
                        return [2 /*return*/, collection];
                }
            });
        });
    };
    /**
     * Get object with collection params
     *
     * @private
     * @param {number} [page]
     * @param {number} [perPage]
     * @returns {ICollectionParams}
     *
     * @memberOf Endpoint
     */
    Endpoint.prototype.getCollectionParams = function (page, perPage) {
        page = page || 1;
        perPage = perPage || 25;
        return {
            per_page: perPage,
            page: page
        };
    };
    /**
     * Function to update interface to class instance
     *
     * @protected
     * @template I
     * @template C
     * @param {ICollection<I>} from
     * @param {*} to
     * @returns {ICollection<C>}
     *
     * @memberOf Endpoint
     */
    Endpoint.prototype.upcastCollection = function (from, to) {
        var collection = {};
        var endpoint = this;
        if (interfaces_1.isActionArray(from))
            endpoint = this.api.Action;
        collection.total = from.total;
        collection.perPage = from.perPage;
        collection.curPage = from.curPage;
        collection.minPage = from.minPage;
        collection.maxPage = from.maxPage;
        collection.items = from.items.map(function (item) {
            return new to(endpoint, item);
        });
        return collection;
    };
    /**
     * Generic function to make a action request.
     *
     * @protected
     * @param {string} url
     * @param {object} params
     * @returns {Promise<Action>}
     *
     * @memberOf Endpoint
     */
    Endpoint.prototype.doAction = function (url, params) {
        return __awaiter(this, void 0, void 0, function () {
            var res, action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.post(url, params)];
                    case 1:
                        res = _a.sent();
                        if (!res.data)
                            throw this.api.invalidResponse;
                        action = res.data.action;
                        return [2 /*return*/, new action_1.default(this.api.Action, action)];
                }
            });
        });
    };
    return Endpoint;
}());
exports.default = Endpoint;
