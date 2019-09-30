import { AxiosInstance } from 'axios';

export interface IListImageApiResponse extends IListResponse {
  images: IImage[];
}

export type IImageType = 'distribution' | 'application' | undefined;

export interface IListImageApiRequest extends IListRequest {
    type?: IImageType;
    userImages?: boolean;
    tagName?: string;
}

type ListImagesResponse = IResponse<IListImageApiResponse>;

export const listImages = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  page = 1,
  per_page = 25,
  tagName,
  type,
  userImages,
}: IListImageApiRequest): Promise<Readonly<ListImagesResponse>> => {
  const path = '/images';
  const queryParams = {page, per_page};
  const hasTypeFilter = typeof type === 'string';
  const hasPrivateFilter = typeof userImages === 'boolean';
  const hasTagFilter = typeof tagName === 'string';

  if (hasTypeFilter) Object.assign(queryParams, {type});
  if (hasPrivateFilter) Object.assign(queryParams, {private: userImages});
  if (hasTagFilter) Object.assign(queryParams, {tag_name: tagName});

  const url = `${path}`;

  return httpClient.get<IListImageApiResponse>(url, {params: queryParams});
};
