"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
// import * as axios from "axios";
var account_1 = require("../account");
var action_1 = require("../action");
var certificate_1 = require("../certificate");
var droplet_1 = require("../droplet");
var image_1 = require("../image");
var region_1 = require("../region");
var size_1 = require("../size");
var snapshot_1 = require("../snapshot");
var sshkey_1 = require("../sshkey");
var tag_1 = require("../tag");
var volume_1 = require("../volume");
// import DomainEndpoint from '../domain/endpoint';
// import FloatingIPEndpoint from '../floatingIP/endpoint';
// import ImageEndpointEndpoint from '../image/endpoint';
// import LoadBalancerEndpoint from '../loadBalancer/endpoint';
/**
 * Generic API client
 *
 * @export
 * @abstract
 * @class API
 */
var API = /** @class */ (function () {
    function API(specs) {
        this.headers = specs.headers;
        this.host = specs.host;
        this.invalidResponse = specs.invalidResponse;
        this.prefix = specs.prefix || "/";
        this.protocol = specs.protocol;
        this.timeout = specs.timeout;
        this.http = axios_1.default.create(this.axiosConfig);
        this.loadEndpoints();
    }
    Object.defineProperty(API.prototype, "get", {
        /**
         * alias to axios.get
         *
         * @readonly
         *
         * @memberof API
         */
        get: function () { return this.http.get; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API.prototype, "post", {
        /**
         * alias to axios.post
         *
         * @readonly
         *
         * @memberof API
         */
        get: function () { return this.http.post; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API.prototype, "put", {
        /**
         * alias to axios.put
         *
         * @readonly
         *
         * @memberof API
         */
        get: function () { return this.http.put; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API.prototype, "delete", {
        /**
         * alias to axios.delete
         *
         * @readonly
         *
         * @memberof API
         */
        get: function () { return this.http.delete; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API.prototype, "baseUrl", {
        /**
         *  $protocol://$host$prefix
         *
         * @readonly
         * @private
         * @type {string}
         * @memberof API
         */
        get: function () {
            return this.protocol + "://" + this.host + this.prefix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API.prototype, "headersObj", {
        /**
         * turn headers array into key -> value object
         *
         * @readonly
         * @private
         *
         * @memberof API
         */
        get: function () {
            var obj = {};
            this.headers.forEach(function (header) { return obj[header.key] = header.value; });
            return obj;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API.prototype, "axiosConfig", {
        /**
         * axios config object
         *
         * @readonly
         * @private
         * @type {IaxiosConfig}
         * @memberof API
         */
        get: function () {
            return { baseURL: this.baseUrl, headers: this.headersObj, timeout: this.timeout };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * load all endpoints instances
     *
     * @private
     *
     * @memberof DigitalOcean
     */
    API.prototype.loadEndpoints = function () {
        this.Account = new account_1.default(this);
        this.Action = new action_1.default(this);
        this.Certificate = new certificate_1.default(this);
        // this.Domain = new DomainEndpoint(this);
        this.Droplet = new droplet_1.default(this);
        // this.FloatingIP = new FloatingIPEndpoint(this);
        this.Image = new image_1.default(this);
        // this.LoadBalancer = new LoadBalancerEndpoint(this);
        this.Region = new region_1.default(this);
        this.Size = new size_1.default(this);
        this.Snapshot = new snapshot_1.default(this);
        this.SSHKey = new sshkey_1.default(this);
        this.Tag = new tag_1.default(this);
        this.Volume = new volume_1.default(this);
    };
    return API;
}());
exports.default = API;
//# sourceMappingURL=api.js.map