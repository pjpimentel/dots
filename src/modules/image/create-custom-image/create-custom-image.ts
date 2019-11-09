import { IResponse, IContext } from '../../../types';
import { IImage } from '..';

export interface ICreateCustomImageApiResponse {
  image: IImage;
}

export interface ICreateCustomImageApiRequest {
  description?: string;
  distribution?: string;
  name: string;
  region: string;
  tags?: string[];
  url: string;
}

export type CreateCustomImageRes = IResponse<ICreateCustomImageApiResponse>;

export const createCustomImage = ({
  httpClient,
}: IContext) => ({
  description,
  distribution,
  name,
  region,
  tags,
  url,
}: ICreateCustomImageApiRequest): Promise<Readonly<CreateCustomImageRes>> => {
  const path = '/images';
  const _url = `${path}`;
  const body = {
    description,
    distribution,
    name,
    region,
    tags,
    url,
  };

  return httpClient.post<ICreateCustomImageApiResponse>(_url, body);
};
