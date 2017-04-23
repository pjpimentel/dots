'use strict';
import { ISize } from './interfaces';
import SizeEndpoint from './endpoint';
import Asset from '../common/asset';
/**
 * Size asset.
 * 
 * @class Size
 * @extends {Asset<SizeEndpoint>}
 * @implements {ISize}
 */
class Size extends Asset<SizeEndpoint> implements ISize {
    readonly available: boolean;
    readonly disk: number;
    readonly memory: number;
    readonly price_hourly: number;
    readonly price_monthly: number;
    readonly regions: Array<string>;
    readonly slug: string;
    readonly transfer: number;
    readonly vcpus: number;
    /**
     * Creates an instance of Size.
     * @param {SizeEndpoint} endpoint 
     * @param {ISize} size 
     * 
     * @memberOf Size
     */
    constructor(endpoint: SizeEndpoint, size: ISize) {
        super(endpoint);
        this.available = size.available;
        this.disk = size.disk;
        this.memory = size.memory;
        this.price_hourly = size.price_hourly;
        this.price_monthly = size.price_monthly;
        this.regions = size.regions;
        this.slug = size.slug;
        this.transfer = size.transfer;
        this.vcpus = size.vcpus;
    }
}

export default Size;