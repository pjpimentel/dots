import { AxiosInstance } from 'axios';

export interface ICreateCustomImageApiResponse {
  image: IImage;
}

export interface ICreateCustomImageApiRequest extends IListRequest {
    description?: string;
    distribution?: string;
    name: string;
    region: string;
    tags?: string[];
    url: string;
}

type CreateCustomImageRes = IResponse<ICreateCustomImageApiResponse>;

export const createCustomImage = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
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
