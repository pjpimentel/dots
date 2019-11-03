import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';
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
  tag_name,
  type,
  user_images,
}: IListImageApiRequest): Promise<Readonly<ListImagesResponse>> => {
  const path = '/images';
  const queryParams = {page, per_page};
  const hasTypeFilter = typeof type === 'string';
  const hasPrivateFilter = typeof user_images === 'boolean';
  const hasTagFilter = typeof tag_name === 'string';

  if (hasTypeFilter) Object.assign(queryParams, {type});
  if (hasPrivateFilter) Object.assign(queryParams, {private: user_images});
  if (hasTagFilter) Object.assign(queryParams, {tag_name});

  const url = `${path}`;

  return httpClient.get<IListImageApiResponse>(url, {params: queryParams});
};
