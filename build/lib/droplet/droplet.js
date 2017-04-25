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
Object.defineProperty(exports, "__esModule", { value: true });
var asset_1 = require("../common/asset");
/**
 * Droplet asset.
 *
 * @class Droplet
 * @extends {Asset<DropletEndpoint>}
 * @implements {IDroplet}
 */
var Droplet = (function (_super) {
    __extends(Droplet, _super);
    /**
     * Creates an instance of Droplet.
     * @param {DropletEndpoint} endpoint
     * @param {IDroplet} droplet
     *
     * @memberOf Droplet
     */
    function Droplet(endpoint, droplet) {
        var _this = _super.call(this, endpoint) || this;
        _this.backup_ids = droplet.backup_ids;
        _this.created_at = droplet.created_at;
        _this.disk = droplet.disk;
        _this.features = droplet.features;
        _this.id = droplet.id;
        _this.image = droplet.image;
        _this.kernel = droplet.kernel;
        _this.locked = droplet.locked;
        _this.memory = droplet.memory;
        _this.name = droplet.name;
        _this.networks = droplet.networks;
        _this.next_backup_window = droplet.next_backup_window;
        _this.region = droplet.region;
        _this.size_slug = droplet.size_slug;
        _this.size = droplet.size;
        _this.snapshot_ids = droplet.snapshot_ids;
        _this.status = droplet.status;
        _this.tags = droplet.tags;
        _this.vcpus = droplet.vcpus;
        _this.volume_ids = droplet.volume_ids;
        return _this;
    }
    return Droplet;
}(asset_1.default));
exports.default = Droplet;
