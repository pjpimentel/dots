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
var image_1 = require("../image/image");
var droplet_1 = require("./droplet");
var endpoint_1 = require("../common/endpoint");
var action_1 = require("../action/action");
/**
 * Droplet endpoint
 *
 * @class DropletEndpoint
 * @extends {Endpoint<DigitalOcean>}
 * @implements {IDropletEndpoint}
 */
var DropletEndpoint = (function (_super) {
    __extends(DropletEndpoint, _super);
    /**
     * Creates an instance of DropletEndpoint.
     * @param {DigitalOcean} digitalOcean
     *
     * @memberOf DropletEndpoint
     */
    function DropletEndpoint(digitalOcean) {
        return _super.call(this, digitalOcean, '/droplets') || this;
    }
    /**
     * Change droplet's kernel.
     *
     * @param {number} id
     * @param {number} kernelId
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.changeKernel = function (id, kernelId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'change_kernel', kernel: kernelId };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    /**
     * Create new droplet.
     *
     * @param {IDropletSpecs} specs
     * @returns {Promise<Droplet>}
     *
     * @memberof DropletEndpoint
     */
    DropletEndpoint.prototype.create = function (specs) {
        return __awaiter(this, void 0, void 0, function () {
            var url, res, droplet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.prefix;
                        if (!specs.name)
                            throw new Error('Missing droplet name.');
                        if (!specs.region)
                            throw new Error('Missing droplet region.');
                        if (!specs.size)
                            throw new Error('Missing droplet size.');
                        if (!specs.image)
                            throw new Error('Missing droplet image.');
                        return [4 /*yield*/, this.api.post(url, specs)];
                    case 1:
                        res = _a.sent();
                        if (!res.data)
                            throw this.api.invalidResponse;
                        droplet = res.data.droplet;
                        return [2 /*return*/, new droplet_1.default(this, droplet)];
                }
            });
        });
    };
    /**
     * Create snapshot from droplet.
     *
     * @param {number} id
     * @param {string} snapshotName
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.createSnapshot = function (id, snapshotName) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'snapshot', name: snapshotName };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    DropletEndpoint.prototype.delete = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var params, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {};
                        url = this.prefix;
                        if (typeof param === 'number')
                            (url = [this.prefix, param].join('/'));
                        else
                            (params.tag_name = param);
                        return [4 /*yield*/, this.api.delete(url, { params: params })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Disable droplet backups.
     *
     * @param {number} id
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.disableBackups = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'disable_backups' };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    /**
     * Enable droplet backups.
     *
     * @param {number} id
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.enableBackups = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'enable_backups' };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    /**
     * Enable ipv6 networking in one droplet.
     *
     * @param {number} id
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.enableIPv6 = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'enable_ipv6' };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    /**
     * Enable private networking in one droplet.
     *
     * @param {number} id
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.enablePrivateNetworking = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'enable_private_networking' };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    /**
     * Get droplet by id.
     *
     * @param {number} id
     * @returns {Promise<Droplet>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.get = function (id) {
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
                        volume = res.data.droplet;
                        return [2 /*return*/, new droplet_1.default(this, volume)];
                }
            });
        });
    };
    ;
    /**
     * Get droplet's action.
     *
     * @param {number} dropletId
     * @param {number} actionId
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.getActionById = function (dropletId, actionId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, res, action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, dropletId, 'actions', actionId].join('/');
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
    DropletEndpoint.prototype.list = function (a, b, c) {
        return __awaiter(this, void 0, void 0, function () {
            var tag, page, perPage, collection, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tag = null;
                        page = null, perPage = null;
                        if (typeof a === 'string')
                            ((tag = a) && (page = b) && (perPage = c));
                        else
                            ((page = a) && (perPage = b));
                        url = this.prefix;
                        if (tag)
                            url = [url, ['tag_name', tag].join('=')].join('?');
                        return [4 /*yield*/, this.getCollection(page, perPage, url, 'droplets')];
                    case 1:
                        collection = _a.sent();
                        collection = this.upcastCollection(collection, droplet_1.default);
                        return [2 /*return*/, collection];
                }
            });
        });
    };
    /**
     * List all droplet's snapshots. [droplet ? snapshot = image]
     *
     * @param {number} id
     * @param {number} page
     * @param {number} [perPage]
     * @returns {Promise<ICollection<Image>>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.listImages = function (id, type, page, perPage) {
        return __awaiter(this, void 0, void 0, function () {
            var collection, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (type !== 'snapshots' && type !== 'backups')
                            throw new Error('Invalid image type.');
                        url = [this.prefix, id, type].join('/');
                        return [4 /*yield*/, this.getCollection(page, perPage, url, type)];
                    case 1:
                        collection = _a.sent();
                        collection = this.upcastCollection(collection, image_1.default);
                        return [2 /*return*/, collection];
                }
            });
        });
    };
    /**
     * List droplets that are running on the same physical hardware.
     *
     * @returns {Promise<Array<any>>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.listNeighbors = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, res, collection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = ['', 'reports', 'droplet_neighbors'].join('/');
                        return [4 /*yield*/, this.api.get(url)];
                    case 1:
                        res = _a.sent();
                        if (!res.data)
                            throw this.api.invalidResponse;
                        collection = res.data.neighbors;
                        collection.map(function (neighbors) {
                            return neighbors.map(function (droplet) { return new droplet_1.default(_this, droplet); });
                        });
                        return [2 /*return*/, collection];
                }
            });
        });
    };
    /**
     * List droplet's neighbors.
     *
     * @param {number} id
     * @returns {Promise<Neighbors>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.listNeighborsByDropletId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, res, neighbors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = [this.prefix, id, 'neighbors'].join('/');
                        return [4 /*yield*/, this.api.get(url)];
                    case 1:
                        res = _a.sent();
                        if (!res.data)
                            throw this.api.invalidResponse;
                        neighbors = res.data.droplets;
                        neighbors.map(function (droplet) { return new droplet_1.default(_this, droplet); });
                        return [2 /*return*/, neighbors];
                }
            });
        });
    };
    /**
     * Reset droplet password.
     *
     * @param {number} id
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.passwordReset = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'password_reset' };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    /**
     * Power cycle droplet [similar to pushing the reset button].
     *
     * @param {number} id
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.powerCycle = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'power_cycle' };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    /**
     * Power off a droplet.
     *
     * @param {number} id
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.powerOff = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'power_off' };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    /**
     * Power on a droplet.
     *
     * @param {number} id
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.powerOn = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'power_on' };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    /**
     * Reboot droplet [reboot in a graceful way].
     *
     * @param {number} id
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.reboot = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'reboot' };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    ;
    DropletEndpoint.prototype.rebuild = function (id, b) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'rebuild', image: b };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    /**
     * Rename droplet.
     *
     * @param {number} id
     * @param {string} newName
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.rename = function (id, newName) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'rename', name: newName };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    /**
     * Resize droplet.
     *
     * @param {number} id
     * @param {string} sizeSlug
     * @param {boolean} increaseDisk
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.resize = function (id, sizeSlug, resizeDisk) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'resize', disk: resizeDisk, size: sizeSlug };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    DropletEndpoint.prototype.restore = function (id, b) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'restore', image: b };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    /**
     * Shutdown a droplet [shutdown in a graceful way].
     *
     * @param {number} id
     * @returns {Promise<Action>}
     *
     * @memberOf DropletEndpoint
     */
    DropletEndpoint.prototype.shutdown = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params;
            return __generator(this, function (_a) {
                url = [this.prefix, id, 'actions'].join('/');
                params = { type: 'shutdown' };
                return [2 /*return*/, this.doAction(url, params)];
            });
        });
    };
    ;
    return DropletEndpoint;
}(endpoint_1.default));
exports.default = DropletEndpoint;
