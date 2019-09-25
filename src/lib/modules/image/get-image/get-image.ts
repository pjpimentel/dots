import { AxiosInstance } from 'axios';

export interface IGetImageApiRequest {
  id?: number;
  slug?: string;
}

export interface IGetImageApiResponse {
  image: IImage;
}

type GetImageResponse = IResponse<IGetImageApiResponse>;

export const getImage = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
  slug,
}: IGetImageApiRequest): Promise<Readonly<GetImageResponse>> => {
  const path = `/image/${id || slug}`;
  const url = `${path}`;

  return httpClient.get<IGetImageApiResponse>(url);
};
