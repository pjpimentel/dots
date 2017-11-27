import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import { AxiosPromise } from "axios";
import { Observable } from "rxjs/Observable";
import API from "./api";
import { IAction, ICollection } from "./interfaces";
export declare type predicate<T> = (value: T, index: number) => boolean;
/**
 * Endpoint belongs to APIs
 *
 * @abstract
 * @class Endpoint
 * @template API
 */
export default abstract class Endpoint {
    /**
     * reference to API instance
     *
     * @protected
     * @type {API}
     * @memberof Endpoint
     */
    protected readonly api: API;
    /**
     * url prefix
     *
     * @protected
     * @type {string}
     * @memberof Endpoint
     */
    protected readonly prefix: string;
    /**
     * Creates an instance of Endpoint.
     * @param {API} api
     * @param {string} prefix
     *
     * @memberof Endpoint
     */
    constructor(api: API, prefix: string);
    /**
     * Default function to get and process pagination responses
     *
     * @protected
     * @template C
     * @param {number} page
     * @param {number} perPage
     * @param {string} url
     * @param {string} property
     * @returns {Observable<ICollection<C>>}
     * @memberof Endpoint
     */
    protected getCollection<C>(page: number, perPage: number, url: string, property: string, filter?: predicate<C>): Observable<ICollection<C>>;
    /**
     * Generic function to make a action request.
     *
     * @protected
     * @param {string} url
     * @param {object} params
     * @returns {Observable<Action>}
     *
     * @memberof Endpoint
     */
    protected doAction(url: string, params: object): Observable<IAction>;
    /**
     * Create observable from axios promise.
     *
     * @protected
     * @template T
     * @param {AxiosPromise} promise
     * @param {string} [property]
     * @param {(v: any, i: number) => boolean} [filter]
     * @returns {Observable<T>}
     * @memberof Endpoint
     */
    protected fromPromise<T>(promise: AxiosPromise, property?: string, filter?: predicate<T>): Observable<T>;
    /**
     * Get object with collection params
     *
     * @private
     * @param {number} [page]
     * @param {number} [perPage]
     * @returns {ICollectionParams}
     *
     * @memberof Endpoint
     */
    private getCollectionParams(page?, perPage?);
}
