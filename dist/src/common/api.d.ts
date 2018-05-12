import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
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
import { IAPISpecs, IHeader } from './interfaces';
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
    readonly get: (url: string, config?: AxiosRequestConfig) => AxiosPromise;
    /**
     * alias to axios.post
     *
     * @readonly
     *
     * @memberof API
     */
    readonly post: (url: string, data?: any, config?: AxiosRequestConfig) => AxiosPromise;
    /**
     * alias to axios.put
     *
     * @readonly
     *
     * @memberof API
     */
    readonly put: (url: string, data?: any, config?: AxiosRequestConfig) => AxiosPromise;
    /**
     * alias to axios.delete
     *
     * @readonly
     *
     * @memberof API
     */
    readonly delete: (url: string, config?: AxiosRequestConfig) => AxiosPromise;
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
     * Creates an instance of API.
     * @param {IAPISpecs} specs
     *
     * @memberof API
     */
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
     * request timeout
     *
     * @protected
     * @type {number}
     * @memberof API
     */
    protected timeout: number;
    /**
     *  $protocol://$host$prefix
     *
     * @readonly
     * @private
     * @type {string}
     * @memberof API
     */
    private readonly baseUrl;
    /**
     * turn headers array into key -> value object
     *
     * @readonly
     * @private
     *
     * @memberof API
     */
    private readonly headersObj;
    /**
     * axios config object
     *
     * @readonly
     * @private
     * @type {IaxiosConfig}
     * @memberof API
     */
    private readonly axiosConfig;
    constructor(specs: IAPISpecs);
    /**
     * load all endpoints instances
     *
     * @private
     *
     * @memberof DigitalOcean
     */
    private loadEndpoints();
}
