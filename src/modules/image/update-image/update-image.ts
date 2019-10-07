import { AxiosInstance } from 'axios';

export interface IUpdateImageApiResponse {
  image: IImage;
}

export interface IUpdateImageApiRequest {
  description?: string;
  distribution?: string;
  id: number;
  name?: string;
}

export type UpdateImageRes = IResponse<IUpdateImageApiResponse>;

export const updateImage = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  description,
  distribution,
  id,
  name,
}: IUpdateImageApiRequest): Promise<Readonly<UpdateImageRes>> => {
  const path = `/images/${id}`;
  const url = `${path}`;
  const body = {description, distribution, name};

  return httpClient.post<IUpdateImageApiResponse>(url, body);
};
