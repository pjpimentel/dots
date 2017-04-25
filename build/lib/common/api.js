'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var endpoint_1 = require("../account/endpoint");
var endpoint_2 = require("../action/endpoint");
var endpoint_3 = require("../certificate/endpoint");
//import DomainEndpoint from '../domain/endpoint';
var endpoint_4 = require("../droplet/endpoint");
//import FloatingIPEndpoint from '../floatingIP/endpoint';
var endpoint_5 = require("../image/endpoint");
//import LoadBalancerEndpoint from '../loadBalancer/endpoint';
//import ImageEndpoint from '../image/endpoint';
var endpoint_6 = require("../region/endpoint");
var endpoint_7 = require("../size/endpoint");
var endpoint_8 = require("../snapshot/endpoint");
var endpoint_9 = require("../sshkey/endpoint");
var endpoint_10 = require("../tag/endpoint");
var endpoint_11 = require("../volume/endpoint");
/**
 * Generic API client
 *
 * @abstract
 * @class API
 */
var API = (function () {
    /**
     * Creates an instance of API.
     * @param {IAPISpecs} specs
     *
     * @memberOf API
     */
    function API(specs) {
        this.headers = specs.headers;
        this.host = specs.host;
        this.invalidResponse = specs.invalidResponse;
        this.prefix = specs.prefix || '/';
        this.protocol = specs.protocol;
        this.timeout = specs.timeout;
        this.http = axios_1.default.create(this.axiosConfig);
        this.loadEndpoints();
    }
    Object.defineProperty(API.prototype, "baseUrl", {
        /**
         *  $protocol://$host$prefix
         *
         * @readonly
         * @private
         * @type {string}
         * @memberOf API
         */
        get: function () {
            return [
                this.protocol,
                '://',
                this.host,
                this.prefix
            ].join('');
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
         * @memberOf API
         */
        get: function () {
            var obj = {};
            this.headers.forEach(function (header) {
                obj[header.key] = header.value;
            });
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
         * @memberOf API
         */
        get: function () {
            return {
                baseURL: this.baseUrl,
                timeout: this.timeout,
                headers: this.headersObj
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API.prototype, "get", {
        /**
         * alias to axios.get
         *
         * @readonly
         *
         * @memberOf API
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
         * @memberOf API
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
         * @memberOf API
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
         * @memberOf API
         */
        get: function () { return this.http.delete; },
        enumerable: true,
        configurable: true
    });
    /**
     * load all endpoints instances
     *
     * @private
     *
     * @memberOf DigitalOcean
     */
    API.prototype.loadEndpoints = function () {
        this.Account = new endpoint_1.default(this);
        this.Action = new endpoint_2.default(this);
        this.Certificate = new endpoint_3.default(this);
        //this.Domain = new DomainEndpoint(this);
        this.Droplet = new endpoint_4.default(this);
        //this.FloatingIP = new FloatingIPEndpoint(this);
        this.Image = new endpoint_5.default(this);
        //this.LoadBalancer = new LoadBalancerEndpoint(this);
        this.Region = new endpoint_6.default(this);
        this.Size = new endpoint_7.default(this);
        this.Snapshot = new endpoint_8.default(this);
        this.SSHKey = new endpoint_9.default(this);
        this.Tag = new endpoint_10.default(this);
        this.Volume = new endpoint_11.default(this);
    };
    return API;
}());
exports.default = API;
