import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { IImage } from '..';

export interface IListImageApiResponse extends IListResponse {
  images: IImage[];
}

export type IImageType = 'distribution' | 'application' | undefined;

export interface IListImageApiRequest extends IListRequest {
  type?: IImageType;
  user_images?: boolean;
  tag_name?: string;
}

export type ListImagesResponse = IResponse<IListImageApiResponse>;

export const listImages = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
  tag_name = undefined,
  type = undefined,
  user_images = undefined,
}: IListImageApiRequest): Promise<Readonly<ListImagesResponse>> => {
  const path = '/images';
  const query_params = {
    page,
    per_page,
    private: user_images,
    tag_name,
    type,
  };
  const url = `${path}`;

  return httpClient.get<IListImageApiResponse>(url, {params: query_params});
};
