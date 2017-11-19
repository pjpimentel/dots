import { AxiosPromise } from "axios";
import { Observable } from "rxjs";

import API from "./api";
import { IAction, ICollection, ICollectionParams } from "./interfaces";
import { isAction } from "./type.guards";

type predicate<T> = (value: T, index: number) => boolean;
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
    constructor(api: API, prefix: string) {
        this.api = api;
        this.prefix = prefix;
    }
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
    protected getCollection<C>(page: number, perPage: number, url: string, property: string, filter?: predicate<C>): Observable<ICollection<C>> {
        const params: ICollectionParams = this.getCollectionParams(page, perPage);
        return this.fromPromise(this.api.get(url, { params }))
            .map((data: any) => {
                const collection: ICollection<C> = {} as ICollection<C>;
                collection.items = data[property];
                if (filter && !collection.items.every(filter)) throw this.api.invalidResponse;
                collection.total = data && data.meta ? data.meta.total : undefined;
                collection.perPage = params.per_page;
                collection.curPage = params.page;
                collection.minPage = 1;
                collection.maxPage = Math.ceil(collection.total / params.per_page);
                return collection;
            });
    }
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
    protected doAction(url: string, params: object): Observable<IAction> {
        const promise = this.api.post(url, params);
        return this.fromPromise(promise, "action", isAction);
    }
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
    protected fromPromise<T>(promise: AxiosPromise, property?: string, filter?: predicate<T>): Observable<T> {
        const dataValidator = data => { if (!data) throw this.api.invalidResponse; return data; };
        // let objectValidator = data => {
        //     if (typeof data !== 'object') throw this.api.invalidResponse;
        //     if (Object.keys(data).length === 0) throw this.api.invalidResponse;
        //     return data;
        // };
        let observable = Observable.fromPromise(promise).map(res => res.data);
        if (property) observable = observable.map(data => data[property]).map(dataValidator);
        if (filter) observable = observable.filter(filter).map(dataValidator);
        return observable;
    }
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
    private getCollectionParams(page?: number, perPage?: number): ICollectionParams {
        return { per_page: perPage || 25, page: page || 1 };
    }
}
