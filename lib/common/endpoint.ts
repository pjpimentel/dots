'use strict';
import {ICollection, ICollectionParams} from "./interfaces";
import API from './api';
import { isActionArray } from "../action/interfaces";
/**
 * Endpoint belongs to APIs
 * 
 * @abstract
 * @class Endpoint
 * @template API 
 */
abstract class Endpoint{
    /**
     * reference to API instance
     * 
     * @type {API}
     * @memberOf Endpoint
     */
    readonly api: API;
    /**
     * url prefix
     * 
     * @type {string}
     * @memberOf Endpoint
     */
    readonly prefix: string;
    /**
     * Creates an instance of Endpoint.
     * @param {API} api 
     * @param {string} prefix 
     * 
     * @memberOf Endpoint
     */
    constructor(api: API, prefix: string){
        this.api = api;
        this.prefix = prefix;
    }
    /**
     * Default function to get and process pagination responses
     * @param page 
     * @param perPage 
     * @param url 
     * @param property 
     */
    protected async getCollection<C>(
        page: number,
        perPage: number,
        url: string,
        property: string
    ): Promise<ICollection<C>>{
        let params: ICollectionParams = this.getCollectionParams(page, perPage);
        let collection: ICollection<C> = <ICollection<C>> {};
        let res = await this.api.get(url,{params:params});
        if(!res.data) throw this.api.invalidResponse;
        collection.items = res.data[property];
        collection.total = res.data.meta.total;
        collection.perPage = params.per_page;
        collection.curPage = params.page;
        collection.minPage = 1;
        collection.maxPage = Math.ceil(collection.total / params.per_page);
        return collection;
    }
    /**
     * Get object with collection params
     * 
     * @private
     * @param {number} [page] 
     * @param {number} [perPage] 
     * @returns {ICollectionParams} 
     * 
     * @memberOf Endpoint
     */
    private getCollectionParams(
        page?: number,
        perPage?: number
    ): ICollectionParams{
        page = page || 1;
        perPage = perPage || 25;
        return {
            per_page: perPage,
            page: page
        };
    }
    /**
     * Function to update interface to class instance
     * 
     * @protected
     * @template I 
     * @template C 
     * @param {ICollection<I>} from 
     * @param {*} to 
     * @returns {ICollection<C>} 
     * 
     * @memberOf Endpoint
     */
    protected upcastCollection<I,C>(
        from: ICollection<I>,
        to: any
    ): ICollection<C>{
        let collection: ICollection<C> = <ICollection<C>> {};
        let endpoint: any = <any> this;
        
        if(isActionArray(from)) endpoint = this.api.Action;
        
        collection.total = from.total;
        collection.perPage = from.perPage;
        collection.curPage = from.curPage;
        collection.minPage = from.minPage;
        collection.maxPage = from.maxPage;
        collection.items = from.items.map((item: I) => {
            return new to(endpoint, item);
        });
        return collection;
    }
}

export default Endpoint;