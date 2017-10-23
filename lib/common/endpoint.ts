'use strict';
import { Observable } from 'rxjs';

import { ICollection, ICollectionParams } from "./interfaces";
import API from './api';
// import Action from "../action/action";
// import { isActionArray, IAction } from "../action/interfaces";
import { AxiosPromise } from 'axios';
/**
 * Endpoint belongs to APIs
 *
 * @abstract
 * @class Endpoint
 * @template API
 */
abstract class Endpoint {
    /**
     * reference to API instance
     *
     * @type {API}
     * @memberof Endpoint
     */
    readonly api: API;
    /**
     * url prefix
     *
     * @type {string}
     * @memberof Endpoint
     */
    readonly prefix: string;
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
    protected getCollection<C>(page: number, perPage: number, url: string, property: string, filter?: (v: any, i: number) => boolean): Observable<ICollection<C>> {
        let params: ICollectionParams = this.getCollectionParams(page, perPage);
        return this.fromPromise(this.api.get(url, { params: params }))
            .map((data: any) => {
                let collection: ICollection<C> = <ICollection<C>>{};
                collection.items = data[property];
                if (filter && !collection.items.every(filter)) throw this.api.invalidResponse;
                collection.total = data && data.meta ? data.meta.total : undefined;
                collection.perPage = params.per_page;
                collection.curPage = params.page;
                collection.minPage = 1;
                collection.maxPage = Math.ceil(collection.total / params.per_page);
                return collection;
            })
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
        page = page || 1;
        perPage = perPage || 25;
        return {
            per_page: perPage,
            page: page
        };
    }
    /**
     * Generic function to make a action request.
     *
     * @protected
     * @param {string} url
     * @param {object} params
     * @returns {Promise<Action>}
     *
     * @memberof Endpoint
     */
    // protected async doAction(url: string, params: object): Promise<IAction> {
    //     let res = await this.api.post(url, params);
    //     if (!res.data) throw this.api.invalidResponse;
    //     let action: IAction = <IAction>res.data.action;
    //     return action;
    // }
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
    protected fromPromise<T>(promise: AxiosPromise, property?: string, filter?: (v: any, i: number) => boolean): Observable<T> {
        let dataValidator = data => { if (!data) throw this.api.invalidResponse; return data };
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
}

export default Endpoint;