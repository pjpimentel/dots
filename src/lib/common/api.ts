import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import AccountEndpoint from '../account';
import ActionEndpoint from '../action';
import CertificateEndpoint from '../certificate';
import DropletEndpoint from '../droplet';
import ImageEndpoint from '../image';
import RegionEndpoint from '../region';
import SizeEndpoint from '../size';
import SnapshotEndpoint from '../snapshot';
import SSHKeyEndpoint from '../sshkey';
import TagEndpoint from '../tag';
import VolumeEndpoint from '../volume';
import { IAPISpecs, IaxiosConfig, IHeader } from './interfaces';

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
export default abstract class API {
    /**
     * Default invalid response throwable error
     *
     * @type {Error}
     * @memberof API
     */
    invalidResponse: Error;
    /**
     * alias to axios.get
     *
     * @readonly
     *
     * @memberof API
     */
    get get() { return this.http.get; }
    /**
     * alias to axios.post
     *
     * @readonly
     *
     * @memberof API
     */
    get post() { return this.http.post; }
    /**
     * alias to axios.put
     *
     * @readonly
     *
     * @memberof API
     */
    get put() { return this.http.put; }
    /**
     * alias to axios.delete
     *
     * @readonly
     *
     * @memberof API
     */
    get delete() { return this.http.delete; }
    /**
     * Account endpoint
     *
     * @type {AccountEndpoint}
     * @memberof DigitalOcean
     */
    Account: AccountEndpoint;
    /**
     * Action endpoint
     *
     * @type {ActionEndpoint}
     * @memberof DigitalOcean
     */
    Action: ActionEndpoint;
    /**
     * Certificate endpoint
     *
     * @type {CertificateEndpoint}
     * @memberof DigitalOcean
     */
    Certificate: CertificateEndpoint;
    /**
     * Domain endpoint
     *
     * @type {DomainEndpoint}
     * @memberof DigitalOcean
     */
    // public Domain: DomainEndpoint;
    /**
     * Droplet endpoint
     *
     * @type {DropletEndpoint}
     * @memberof DigitalOcean
     */
    Droplet: DropletEndpoint;
    /**
     * FloatingIP endpoint
     *
     * @type {FloatingIPEndpoint}
     * @memberof DigitalOcean
     */
    // public FloatingIP: FloatingIPEndpoint;
    /**
     * Image endpoint
     *
     * @type {ImageEndpoint}
     * @memberof DigitalOcean
     */
    Image: ImageEndpoint;
    /**
     * LoadBalancer endpoint
     *
     * @type {LoadBalancerEndpoint}
     * @memberof DigitalOcean
     */
    // public LoadBalancer: LoadBalancerEndpoint;
    /**
     * Region endpoint
     *
     * @type {RegionEndpoint}
     * @memberof DigitalOcean
     */
    Region: RegionEndpoint;
    /**
     * Size endpoint
     *
     * @type {SizeEndpoint}
     * @memberof DigitalOcean
     */
    Size: SizeEndpoint;
    /**
     * Snapshot endpoint
     *
     * @type {SnapshotEndpoint}
     * @memberof DigitalOcean
     */
    Snapshot: SnapshotEndpoint;
    /**
     * SSHKey endpoint
     *
     * @type {SSHKeyEndpoint}
     * @memberof DigitalOcean
     */
    SSHKey: SSHKeyEndpoint;
    /**
     * Tag endpoint
     *
     * @type {TagEndpoint}
     * @memberof DigitalOcean
     */
    Tag: TagEndpoint;
    /**
     * Volume endpoint
     *
     * @type {VolumeEndpoint}
     * @memberof DigitalOcean
     */
    Volume: VolumeEndpoint;
    /**
     * request timeout
     *
     * @public
     * @type {number}
     * @memberof API
     */
    timeout: number;
    /**
     * default request headers
     *
     * @protected
     * @type {IHeader[]}
     * @memberof API
     */
    protected headers: IHeader[];
    /**
     * host $protocol://$host$prefix
     *
     * @protected
     * @type {string}
     * @memberof API
     */
    protected host: string;
    /**
     * axios client
     *
     * @protected
     * @type {AxiosInstance}
     * @memberof API
     */
    protected http: AxiosInstance;
    /**
     * prefix $protocol://$host$prefix
     *
     * @protected
     * @type {string}
     * @memberof API
     */
    protected prefix: string;
    /**
     * protocol $protocol://$host$prefix
     *
     * @protected
     * @type {('http'|'https')}
     * @memberof API
     */
    protected protocol: 'http' | 'https';
    /**
     *  $protocol://$host$prefix
     *
     * @readonly
     * @private
     * @type {string}
     * @memberof API
     */
    private get baseUrl(): string {
        return `${this.protocol}://${this.host}${this.prefix}`;
    }
    /**
     * turn headers array into key -> value object
     *
     * @readonly
     * @private
     *
     * @memberof API
     */
    private get headersObj() {
        const obj = {};
        this.headers.forEach((header) => obj[header.key] = header.value);
        return obj;
    }
    /**
     * axios config object
     *
     * @readonly
     * @private
     * @type {IaxiosConfig}
     * @memberof API
     */
    private get axiosConfig(): IaxiosConfig {
        return { baseURL: this.baseUrl, headers: this.headersObj, timeout: this.timeout };
    }
    /**
     * Creates an instance of API.
     * @param {IAPISpecs} specs
     *
     * @memberof API
     */
    constructor(specs: IAPISpecs) {
        this.headers = specs.headers;
        this.host = specs.host;
        this.invalidResponse = specs.invalidResponse;
        this.prefix = specs.prefix || '/';
        this.protocol = specs.protocol;
        this.timeout = specs.timeout;
        this.http = axios.create(this.axiosConfig);
        this.loadEndpoints();
    }
    /**
     * load all endpoints instances
     *
     * @private
     *
     * @memberof DigitalOcean
     */
    private loadEndpoints(): void {
        this.Account = new AccountEndpoint(this);
        this.Action = new ActionEndpoint(this);
        this.Certificate = new CertificateEndpoint(this);
        // this.Domain = new DomainEndpoint(this);
        this.Droplet = new DropletEndpoint(this);
        // this.FloatingIP = new FloatingIPEndpoint(this);
        this.Image = new ImageEndpoint(this);
        // this.LoadBalancer = new LoadBalancerEndpoint(this);
        this.Region = new RegionEndpoint(this);
        this.Size = new SizeEndpoint(this);
        this.Snapshot = new SnapshotEndpoint(this);
        this.SSHKey = new SSHKeyEndpoint(this);
        this.Tag = new TagEndpoint(this);
        this.Volume = new VolumeEndpoint(this);
    }
}
