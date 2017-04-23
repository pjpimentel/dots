'use strict';
import {AxiosInstance} from 'axios';
import axios from 'axios';
import AccountEndpoint from '../account/endpoint';
import ActionEndpoint from '../action/endpoint';
import CertificateEndpoint from '../certificate/endpoint';
//import DomainEndpoint from '../domain/endpoint';
//import DropletEndpoint from '../droplet/endpoint';
//import FloatingIPEndpoint from '../floatingIP/endpoint';
import ImageEndpointEndpoint from '../image/endpoint';
//import LoadBalancerEndpoint from '../loadBalancer/endpoint';
//import ImageEndpoint from '../image/endpoint';
import RegionEndpoint from '../region/endpoint';
import SizeEndpoint from '../size/endpoint';
import SnapshotEndpoint from '../snapshot/endpoint';
import SSHKeyEndpoint from '../sshkey/endpoint';
import TagEndpoint from '../tag/endpoint';
import VolumeEndpoint from '../volume/endpoint';
import {IHeader,IaxiosConfig,IAPISpecs } from "./interfaces";
/**
 * Generic API client
 * 
 * @abstract
 * @class API
 */
abstract class API{
    /**
     * Default invalid response throwable error
     * 
     * @type {Error}
     * @memberOf API
     */
    public invalidResponse: Error;
    /**
     * default request headers
     * 
     * @protected
     * @type {Array<IHeader>}
     * @memberOf API
     */
    protected headers: Array<IHeader>;
    /**
     * host $protocol://$host$prefix
     * 
     * @protected
     * @type {string}
     * @memberOf API
     */
    protected host: string;
    /**
     * axios client
     * 
     * @protected
     * @type {AxiosInstance}
     * @memberOf API
     */
    protected http: AxiosInstance;
    /**
     * prefix $protocol://$host$prefix
     * 
     * @protected
     * @type {string}
     * @memberOf API
     */
    protected prefix: string;
    /**
     * protocol $protocol://$host$prefix
     * 
     * @protected
     * @type {('http'|'https')}
     * @memberOf API
     */
    protected protocol: 'http'|'https';
    /**
     * request timeout
     * 
     * @protected
     * @type {number}
     * @memberOf API
     */
    protected timeout: number;
    /**
     *  $protocol://$host$prefix
     * 
     * @readonly
     * @private
     * @type {string}
     * @memberOf API
     */
    private get baseUrl(): string{
        return [
            this.protocol,
            '://',
            this.host,
            this.prefix
        ].join('');
    }
    /**
     * turn headers array into key -> value object
     * 
     * @readonly
     * @private
     * 
     * @memberOf API
     */
    private get headersObj(){
        let obj = {};
        this.headers.forEach(header => {
            obj[header.key] = header.value;
        });
        return obj;
    }
    /**
     * axios config object
     * 
     * @readonly
     * @private
     * @type {IaxiosConfig}
     * @memberOf API
     */
    private get axiosConfig(): IaxiosConfig{
        return {
            baseURL: this.baseUrl,
            timeout: this.timeout,
            headers: this.headersObj
        }
    }
    /**
     * alias to axios.get
     * 
     * @readonly
     * 
     * @memberOf API
     */
    public get get(){return this.http.get;}
    /**
     * alias to axios.post
     * 
     * @readonly
     * 
     * @memberOf API
     */
    public get post(){return this.http.post;}
    /**
     * alias to axios.put
     * 
     * @readonly
     * 
     * @memberOf API
     */
    public get put(){return this.http.put;}
    /**
     * alias to axios.delete
     * 
     * @readonly
     * 
     * @memberOf API
     */
    public get delete(){return this.http.delete;}
        /**
     * Account endpoint
     * 
     * @type {AccountEndpoint}
     * @memberOf DigitalOcean
     */
    public Account: AccountEndpoint;
    /**
     * Action endpoint
     * 
     * @type {ActionEndpoint}
     * @memberOf DigitalOcean
     */
    public Action: ActionEndpoint;
    /**
     * Certificate endpoint
     * 
     * @type {CertificateEndpoint}
     * @memberOf DigitalOcean
     */
    public Certificate: CertificateEndpoint;
    /**
     * Domain endpoint
     * 
     * @type {DomainEndpoint}
     * @memberOf DigitalOcean
     */
    //public Domain: DomainEndpoint;
    /**
     * Droplet endpoint
     * 
     * @type {DropletEndpoint}
     * @memberOf DigitalOcean
     */
    //public Droplet: DropletEndpoint;
    /**
     * FloatingIP endpoint
     * 
     * @type {FloatingIPEndpoint}
     * @memberOf DigitalOcean
     */
    //public FloatingIP: FloatingIPEndpoint;
    /**
     * Image endpoint
     * 
     * @type {ImageEndpointEndpoint}
     * @memberOf DigitalOcean
     */
    public Image: ImageEndpointEndpoint;
    /**
     * LoadBalancer endpoint
     * 
     * @type {LoadBalancerEndpoint}
     * @memberOf DigitalOcean
     */
    //public LoadBalancer: LoadBalancerEndpoint;
    /**
     * Region endpoint
     * 
     * @type {RegionEndpoint}
     * @memberOf DigitalOcean
     */
    public Region: RegionEndpoint;
    /**
     * Size endpoint
     * 
     * @type {SizeEndpoint}
     * @memberOf DigitalOcean
     */
    public Size: SizeEndpoint;
    /**
     * Snapshot endpoint
     * 
     * @type {SnapshotEndpoint}
     * @memberOf DigitalOcean
     */
    public Snapshot: SnapshotEndpoint;
    /**
     * SSHKey endpoint
     * 
     * @type {SSHKeyEndpoint}
     * @memberOf DigitalOcean
     */
    public SSHKey: SSHKeyEndpoint;
    /**
     * Tag endpoint
     * 
     * @type {TagEndpoint}
     * @memberOf DigitalOcean
     */
    public Tag: TagEndpoint;
    /**
     * Volume endpoint
     * 
     * @type {VolumeEndpoint}
     * @memberOf DigitalOcean
     */
    public Volume: VolumeEndpoint;
    /**
     * Creates an instance of API.
     * @param {IAPISpecs} specs 
     * 
     * @memberOf API
     */
    constructor(specs: IAPISpecs){
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
     * @memberOf DigitalOcean
     */
    private loadEndpoints(): void {
        this.Account = new AccountEndpoint(this);
        this.Action = new ActionEndpoint(this);
        this.Certificate = new CertificateEndpoint(this);
        //this.Domain = new DomainEndpoint(this);
        //this.Droplet = new DropletEndpoint(this);
        //this.FloatingIP = new FloatingIPEndpoint(this);
        this.Image = new ImageEndpointEndpoint(this);
        //this.LoadBalancer = new LoadBalancerEndpoint(this);
        this.Region = new RegionEndpoint(this);
        this.Size = new SizeEndpoint(this);
        this.Snapshot = new SnapshotEndpoint(this);
        this.SSHKey = new SSHKeyEndpoint(this);
        this.Tag = new TagEndpoint(this);
        this.Volume = new VolumeEndpoint(this);
    }
}

export default API;