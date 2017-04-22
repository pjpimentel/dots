
'use strict';
import {IImage} from './common';
import {IImageSpecs} from './common';
import {IImageEndpoint} from './common';
import {ICollection} from './common';
import DigitalOcean from './digitalOcean';
import Endpoint from './endpoint';
import Resource from './resource';

class ImageEndpoint extends Endpoint implements IImageEndpoint{
    /**
     * [constructor]
     * @param {DigitalOcean} digitalOcean [digitalOcean instance]
     */
    constructor(digitalOcean: DigitalOcean){
        super(digitalOcean, '/images');
    }
    /**
     * [delete delete image]
     * @param  {number}        id [image id]
     * @return {Promise<void>}    []
     */
    public async delete(id: number): Promise<void>{
        let url = [this.prefix,id].join('/');
        await this.api.delete(url);
        return;
    }
    /**
     * [list list all keys]
     * @param  {number}  page         [page number]
     * @param  {number}  perPage      [items per page]
     * @return {Promise<ICollection>} []
     */
    public async list(
        page: number,
        perPage?: number
    ): Promise<ICollection<Image>>{
        let collection: ICollection<IImage>|ICollection<Image>;
        let url: string = this.prefix;
        collection = await this.getCollection<IImage>(
            page,
            perPage,
            url,
            'ssh_keys'
        );
        collection = this.upcastCollection<IImage,Image>(collection, Image);
        return <ICollection<Image>> collection;
    }
    /**
     * [get get image by slug]
     * @param  {string}          slug [image slug]
     * @return {Promise<Image>}       []
     */
    public async get(slug: string): Promise<Image>;
    /**
     * [get get image by id]
     * @param  {number}          id [image id]
     * @return {Promise<Image>}     []
     */
    public async get(id: number): Promise<Image>;
    public async get(uid: number|string): Promise<Image>{
        if(typeof uid === 'number') uid = uid.toString();
        let url: string = [this.prefix,uid].join('/');
        let res = await this.api.get(url);
        if(!res.data) throw this.api.invalidResponse;
        let image: IImage = <IImage> res.data.image;
        return new Image(this, image);
    }
    /**
     * [update update image by fingerprint]
     * @param  {string}          fingerprint [image figerprint]
     * @param  {IImageSpecs}    specs       [specifications]
     * @return {Promise<Image>}             []
     */
    public async update(fingerprint: string, specs: IImageSpecs): Promise<Image>;
    /**
     * [update update image by id]
     * @param  {number}          id [image id]
     * @param  {IImageSpecs}    specs       [specifications]
     * @return {Promise<Image>}    []
     */
    public async update(id: number, specs: IImageSpecs): Promise<Image>;
    public async update(uid: number|string, specs: IImageSpecs): Promise<Image>{
        if(typeof uid === 'number') uid = uid.toString();
        let url = [this.prefix,uid].join('/');
        let res = await this.api.put(url, specs);
        if(!res.data) throw new Error('Invalid API response.');
        let image: IImage = res.data.image;
        return new Image(this, image);
    };
}
class Image extends Resource<ImageEndpoint> implements IImage{
    readonly id: number;
    readonly fingerprint: string;
    readonly public_key: string;
    name: string;
    constructor(endpoint: ImageEndpoint, image: IImage){
        super(endpoint),
        this.id = image.id;
        this.fingerprint = image.fingerprint;
        this.public_key = image.public_key;
        this.name = image.name;
    }
    /**
     * [delete delete current image]
     * @return {Promise<void>} []
     */
    public async delete(): Promise<void>{
        return this.endpoint.delete(this.id);
    }
    /**
     * [setName change image name]
     * @param  {string}        name [image name]
     * @return {Promise<void>}      []
     */
    public async setName(name: string): Promise<void>{
        let params: IImageSpecs = {name: name};
        await this.endpoint.update(this.id, params);
        this.name = name;
    }
}

export default ImageEndpoint;
export {Image};
