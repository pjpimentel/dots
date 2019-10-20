import { AxiosInstance } from 'axios';

export interface IGetImageApiRequest {
  id?: number;
  slug?: string;
}

export interface IGetImageApiResponse {
  image: IImage;
}

export type GetImageResponse = IResponse<IGetImageApiResponse>;

export const getImage = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
  slug,
}: IGetImageApiRequest): Promise<Readonly<GetImageResponse>> => {
  const path = '/images';
  const url = `${path}/${id || slug}`;

  return httpClient.get<IGetImageApiResponse>(url);
};