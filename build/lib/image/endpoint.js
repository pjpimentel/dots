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
var image_1 = require("./image");
var endpoint_1 = require("../common/endpoint");
var action_1 = require("../action/action");
/**
 * Image endpoint.
 *
 * @class ImageEndpoint
 * @extends {Endpoint<DigitalOcean>}
 * @implements {IImageEndpoint}
 */
var ImageEndpoint = (function (_super) {
    __extends(ImageEndpoint, _super);
    /**
     * Creates an instance of ImageEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberOf ImageEndpoint
     */
    function ImageEndpoint(digitalOcean) {
        return _super.call(this, digitalOcean, '/images') || this;
    }
    /**
     * Convert image to snapshot.
     *
     * @param {number} id
     * @returns {Promise<Action>}
     *
     * @memberOf ImageEndpoint
     */
    ImageEndpoint.prototype.convertToSnapshot = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params, res, action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, id, 'actions'].join('/');
                        params = { type: 'convert' };
                        return [4 /*yield*/, this.api.post(url, params)];
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
    /**
     * Delete image by id.
     *
     * @param {number} id
     * @returns {Promise<void>}
     *
     * @memberOf ImageEndpoint
     */
    ImageEndpoint.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, id].join('/');
                        return [4 /*yield*/, this.api.get(url)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ImageEndpoint.prototype.get = function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            var url, res, image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof uid === 'string')
                            uid = uid;
                        url = [this.prefix, uid].join('/');
                        return [4 /*yield*/, this.api.get(url)];
                    case 1:
                        res = _a.sent();
                        if (!res.data)
                            throw this.api.invalidResponse;
                        image = res.data.image;
                        return [2 /*return*/, new image_1.default(this, image)];
                }
            });
        });
    };
    /**
     * Get images's action by id.
     *
     * @param {number} id
     * @param {number} actionId
     * @returns {Promise<Action>}
     *
     * @memberOf ImageEndpoint
     */
    ImageEndpoint.prototype.getActionById = function (id, actionId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, res, action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, id, 'actions', actionId].join('/');
                        return [4 /*yield*/, this.api.get(url)];
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
    ImageEndpoint.prototype.list = function (a, b, c) {
        return __awaiter(this, void 0, void 0, function () {
            var type, page, perPage, collection, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        type = null;
                        page = null, perPage = null;
                        if (typeof a === 'string')
                            ((type = a) && (page = b) && (perPage = c));
                        else
                            ((page = a) && (perPage = b));
                        url = this.prefix;
                        if (type)
                            url = [url, ['type', type].join('=')].join('?');
                        return [4 /*yield*/, this.getCollection(page, perPage, url, 'images')];
                    case 1:
                        collection = _a.sent();
                        collection = this.upcastCollection(collection, image_1.default);
                        return [2 /*return*/, collection];
                }
            });
        });
    };
    /**
     * List image's actions.
     *
     * @param {number} id
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Promise<ICollection<Action>>}
     *
     * @memberOf ImageEndpoint
     */
    ImageEndpoint.prototype.listActions = function (id, page, perPage) {
        return __awaiter(this, void 0, void 0, function () {
            var collection, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, id, 'actions'].join('/');
                        return [4 /*yield*/, this.getCollection(page, perPage, url, 'actions')];
                    case 1:
                        collection = _a.sent();
                        collection = this.upcastCollection(collection, action_1.default);
                        return [2 /*return*/, collection];
                }
            });
        });
    };
    /**
     * List User's images.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Promise<ICollection<Image>>}
     *
     * @memberOf ImageEndpoint
     */
    ImageEndpoint.prototype.listPrivate = function (page, perPage) {
        return __awaiter(this, void 0, void 0, function () {
            var collection, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, ['private', true].join('=')].join('?');
                        return [4 /*yield*/, this.getCollection(page, perPage, url, 'images')];
                    case 1:
                        collection = _a.sent();
                        collection = this.upcastCollection(collection, action_1.default);
                        return [2 /*return*/, collection];
                }
            });
        });
    };
    /**
     * Transfer image to another region.
     *
     * @param {number} id
     * @param {string} regionSlug
     * @returns {Promise<Action>}
     *
     * @memberOf ImageEndpoint
     */
    ImageEndpoint.prototype.transfer = function (id, regionSlug) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params, res, action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, id, 'actions'].join('/');
                        params = { type: 'transfer', region: regionSlug };
                        return [4 /*yield*/, this.api.post(url, params)];
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
    /**
     * Update image.
     *
     * @param {number} id
     * @param {IImageUpdateSpecs} specs
     * @returns {Promise<Image>}
     *
     * @memberOf ImageEndpoint
     */
    ImageEndpoint.prototype.update = function (id, specs) {
        return __awaiter(this, void 0, void 0, function () {
            var url, res, image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, id].join('/');
                        return [4 /*yield*/, this.api.post(url, specs)];
                    case 1:
                        res = _a.sent();
                        if (!res.data)
                            throw this.api.invalidResponse;
                        image = res.data.action;
                        return [2 /*return*/, new image_1.default(this, image)];
                }
            });
        });
    };
    return ImageEndpoint;
}(endpoint_1.default));
exports.default = ImageEndpoint;
