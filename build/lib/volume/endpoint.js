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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var volume_1 = require("./volume");
var endpoint_1 = require("../common/endpoint");
var action_1 = require("../action/action");
var snapshot_1 = require("../snapshot/snapshot");
/**
 * Volume endpoint.
 *
 * @class VolumeEndpoint
 * @extends {Endpoint}
 * @implements {IVolumeEndpoint}
 */
var VolumeEndpoint = (function (_super) {
    __extends(VolumeEndpoint, _super);
    /**
     * Creates an instance of VolumeEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberOf VolumeEndpoint
     */
    function VolumeEndpoint(digitalOcean) {
        return _super.call(this, digitalOcean, '/volumes') || this;
    }
    VolumeEndpoint.prototype.attach = function (a, b, c) {
        return __awaiter(this, void 0, void 0, function () {
            var dropletId, volumeId, volumeName, region, url, params, res, action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dropletId = b;
                        volumeId = null, volumeName = null, region = null;
                        url = null, params = {};
                        if (c)
                            ((volumeName = a) && (region = c));
                        else
                            volumeId = a;
                        url = [this.prefix, volumeId, 'actions'].join('/');
                        params.type = 'attach';
                        params.droplet_id = dropletId;
                        if (!volumeId) {
                            url = [this.prefix, 'actions'].join('/');
                            params.volume_name = volumeName;
                            params.region = region;
                        }
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
     * Create new volume.
     *
     * @param {IVolumeSpecs} specs
     * @returns {Promise<Volume>}
     *
     * @memberOf VolumeEndpoint
     */
    VolumeEndpoint.prototype.create = function (specs) {
        return __awaiter(this, void 0, void 0, function () {
            var url, res, volume;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.prefix;
                        if (specs.snapshot_id)
                            specs.region = undefined;
                        else if (!specs.region)
                            throw new Error('Missing volume region.');
                        return [4 /*yield*/, this.api.post(url, specs)];
                    case 1:
                        res = _a.sent();
                        if (!res.data)
                            throw this.api.invalidResponse;
                        volume = res.data.volume;
                        return [2 /*return*/, new volume_1.default(this, volume)];
                }
            });
        });
    };
    /**
     * Create new Snapshot from volume.
     *
     * @param {string} id
     * @param {string} snapshotName
     * @returns {Promise<Snapshot>}
     *
     * @memberOf VolumeEndpoint
     */
    VolumeEndpoint.prototype.createSnapshot = function (id, snapshotName) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params, res, snapshot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, id, 'snapshots'].join('/');
                        params = {};
                        if (snapshotName)
                            params.name = snapshotName;
                        return [4 /*yield*/, this.api.post(url, params)];
                    case 1:
                        res = _a.sent();
                        if (!res.data)
                            throw this.api.invalidResponse;
                        snapshot = res.data.snapshot;
                        return [2 /*return*/, new snapshot_1.default(this.api.Snapshot, snapshot)];
                }
            });
        });
    };
    VolumeEndpoint.prototype.delete = function (name, region) {
        return __awaiter(this, void 0, void 0, function () {
            var id, url, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = null;
                        url = this.prefix;
                        params = {};
                        if (!region)
                            ((id = name) && (url = [this.prefix, id].join('/')));
                        else
                            ((params.name = name) && (params.region = region));
                        return [4 /*yield*/, this.api.delete(url, { params: params })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VolumeEndpoint.prototype.detach = function (a, b, c) {
        return __awaiter(this, void 0, void 0, function () {
            var dropletId, volumeId, volumeName, region, url, params, res, action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dropletId = b;
                        volumeId = null, volumeName = null, region = null;
                        url = null, params = {};
                        if (c)
                            ((volumeName = a) && (region = c));
                        else
                            volumeId = a;
                        url = [this.prefix, volumeId, 'actions'].join('/');
                        params.type = 'detach';
                        params.droplet_id = dropletId;
                        if (!volumeId) {
                            url = [this.prefix, 'actions'].join('/');
                            params.volume_name = volumeName;
                            params.region = region;
                        }
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
     * Get volume's action by id.
     *
     * @param {string} volumeId
     * @param {number} actionId
     * @returns {Promise<Action>}
     *
     * @memberOf VolumeEndpoint
     */
    VolumeEndpoint.prototype.getActionById = function (volumeId, actionId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, res, action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, volumeId, 'actions', actionId].join('/');
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
    /**
     * Get volume by id.
     *
     * @param {string} id
     * @returns {Promise<Volume>}
     *
     * @memberOf VolumeEndpoint
     */
    VolumeEndpoint.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, res, volume;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, id].join('/');
                        return [4 /*yield*/, this.api.get(url)];
                    case 1:
                        res = _a.sent();
                        if (!res.data)
                            throw this.api.invalidResponse;
                        volume = res.data.volume;
                        return [2 /*return*/, new volume_1.default(this, volume)];
                }
            });
        });
    };
    /**
     * List all volumes.
     *
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Promise<ICollection<Volume>>}
     *
     * @memberOf VolumeEndpoint
     */
    VolumeEndpoint.prototype.list = function (page, perPage) {
        return __awaiter(this, void 0, void 0, function () {
            var collection, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.prefix;
                        return [4 /*yield*/, this.getCollection(page, perPage, url, 'volumes')];
                    case 1:
                        collection = _a.sent();
                        collection = this.upcastCollection(collection, volume_1.default);
                        return [2 /*return*/, collection];
                }
            });
        });
    };
    /**
     * List all volumes's actions.
     *
     * @param {string} volumeId
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Promise<ICollection<Action>>}
     *
     * @memberOf VolumeEndpoint
     */
    VolumeEndpoint.prototype.listActions = function (volumeId, page, perPage) {
        return __awaiter(this, void 0, void 0, function () {
            var collection, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, volumeId, 'actions'].join('/');
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
     * List all volumes by name.
     *
     * @param {string} name
     * @param {string} region
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Promise<ICollection<Volume>>}
     *
     * @memberOf VolumeEndpoint
     */
    VolumeEndpoint.prototype.listByName = function (name, region, page, perPage) {
        return __awaiter(this, void 0, void 0, function () {
            var collection, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.prefix;
                        url = [
                            url,
                            [
                                ['name', name].join('='),
                                ['region', region].join('=')
                            ].join('&')
                        ].join('?');
                        return [4 /*yield*/, this.getCollection(page, perPage, url, 'volumes')];
                    case 1:
                        collection = _a.sent();
                        collection = this.upcastCollection(collection, volume_1.default);
                        return [2 /*return*/, collection];
                }
            });
        });
    };
    /**
     * List all volumes's snapshots.
     *
     * @param {string} volumeId
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Promise<ICollection<Snapshot>>}
     *
     * @memberOf VolumeEndpoint
     */
    VolumeEndpoint.prototype.listSnapshots = function (volumeId, page, perPage) {
        return __awaiter(this, void 0, void 0, function () {
            var collection, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, volumeId, 'snapshots'].join('/');
                        return [4 /*yield*/, this.getCollection(page, perPage, url, 'snapshots')];
                    case 1:
                        collection = _a.sent();
                        collection = this.upcastCollection(collection, snapshot_1.default);
                        return [2 /*return*/, collection];
                }
            });
        });
    };
    /**
     * Resize volume.
     *
     * @param {string} id
     * @param {number} size
     * @returns {Promise<Action>}
     *
     * @memberOf VolumeEndpoint
     */
    VolumeEndpoint.prototype.resize = function (id, size) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params, res, action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, id, 'actions'].join('/');
                        params = { type: 'resize', size_gigabytes: size };
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
    return VolumeEndpoint;
}(endpoint_1.default));
exports.default = VolumeEndpoint;
