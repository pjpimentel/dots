/*

declare interface IImage{
    readonly id: number;
    readonly name: string;
    readonly type: string;
    readonly distribution: string;
    readonly slug: string|null;
    readonly public: boolean;
    readonly regions: Array<string>;
    readonly min_disk_size: number;
    readonly size_gigabytes: number;
    readonly created_at: Date;
}



declare class DigitalOcean{
    private static errorHandler = errorHandler;
    private token: string = null;
    private axiosConfig: IaxiosConfig = null;
    private httpClient: AxiosInstance;
    public timeout: number;
    public invalidResponse: Error;

}

    constructor(digitalOcean: DigitalOcean, path: string){
        this.api = digitalOcean;
        this.prefix = path;
    }

declare class ImageEndpoint extends Endpoint<DigitalOcean>{
    constructor(foo: number);
    delete(id: number): Promise<void>;
    get(id: number): Promise<Image>;
    get(slug: string): Promise<Image>;
    list(page: number, perPage?: number): Promise<ICollection<Image>>;
    list(
        type: string,
        page: number,
        perPage?: number
    ): Promise<ICollection<Image>>;
    listActions(
        id: number,
        page: number,
        perPage?: number
    ): Promise<ICollection<Image>>;
    listPrivate(page: number, perPage?: number): Promise<ICollection<Image>>;
    update(id: number, specs: IImageUpdateSpecs): Promise<Image>;
}

declare abstract class Asset<T>{
    protected readonly endpoint: T;
    constructor(endpoint: T);
}

type AssetConstructor<E,I,C> = (endpoint: E, asset: I) => C;

declare class Image extends Asset<ImageEndpoint> implements IImage{
    readonly id: number;
    readonly name: string;
    readonly type: string;
    readonly distribution: string;
    readonly slug: string|null;
    readonly public: boolean;
    readonly regions: Array<string>;
    readonly min_disk_size: number;
    readonly size_gigabytes: number;
    readonly created_at: Date;
    constructor: AssetConstructor<ImageEndpoint,IImage,Image>(endpoint: ImageEndpoint, image: IImage);
}*/