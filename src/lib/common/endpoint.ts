import { AxiosPromise } from 'axios';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import API from './api';
import { IAction, ICollection, ICollectionParams } from './interfaces';
import { isAction } from './type.guards';

export type predicate<T> = (value: T, index?: number) => boolean;
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
    protected getCollection<C>(
        page: number,
        perPage: number,
        url: string,
        property: string,
        guard?: predicate<C>,
    ): Observable<ICollection<C>> {
        const params: ICollectionParams = this.getCollectionParams(page, perPage);
        const promise = this.api.get(url, { params });
        return this.fromPromise(promise)
            .pipe(
                map((data: any) => {
                    const collection: ICollection<C> = {
                        curPage: params.page,
                        items: data[property],
                        maxPage: 1,
                        minPage: 1,
                        perPage: params.per_page,
                        total: data && data.meta ? data.meta.total : undefined,
                    };
                    collection.maxPage = Math.ceil(collection.total / params.per_page);
                    return collection;
                }),
                filter(guard),
            );
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
        return this.fromPromise(promise, 'action', isAction);
    }
    /**
     * Create observable from axios promise.
     *
     * @protected
     * @template T
     * @param {AxiosPromise} promise
     * @param {string} [property]
     * @param {(v: any, i: number) => boolean} [guard]
     * @returns {Observable<T>}
     * @memberof Endpoint
     */
    protected fromPromise<T>(promise: AxiosPromise, property?: string, guard?: predicate<T>): Observable<T> {
        const dataValidator = (data) => {
            if (!data) throw this.api.invalidResponse;
            if (!guard(data)) throw this.api.invalidResponse;
            return data;
        };
        let observable = from(promise).pipe(
            map((res) => res.data),
        );
        if (property) {
            observable = observable.pipe(
                map((data) => data[property]),
                map(dataValidator),
            );
        }
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
