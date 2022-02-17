import { IResponse, IContext } from '../../types';
import { IImage } from '..';

export interface IUpdateImageApiResponse {
  image: IImage;
}

export interface IUpdateImageApiRequest {
  description?: string;
  distribution?: string;
  image_id: number;
  name?: string;
}

export type UpdateImageRes = IResponse<IUpdateImageApiResponse>;

export const updateImage = ({
  httpClient,
}: IContext) => ({
  description,
  distribution,
  image_id,
  name,
}: IUpdateImageApiRequest): Promise<Readonly<UpdateImageRes>> => {
  const path = '/images';
  const url = `${path}/${image_id}`;
  const body = {description, distribution, name};

  return httpClient.post<IUpdateImageApiResponse>(url, body);
};
