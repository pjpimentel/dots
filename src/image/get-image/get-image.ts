import { IResponse, IContext } from '../../types';
import { IImage } from '..';

export interface IGetImageApiRequest {
  image_id?: number;
  slug?: string;
}

export interface IGetImageApiResponse {
  image: IImage;
}

export type GetImageResponse = IResponse<IGetImageApiResponse>;

export const getImage = ({
  httpClient,
}: IContext) => ({
  image_id,
  slug,
}: IGetImageApiRequest): Promise<Readonly<GetImageResponse>> => {
  const path = '/images';
  const url = `${path}/${image_id || slug}`;

  return httpClient.get<IGetImageApiResponse>(url);
};
