import { AxiosInstance } from 'axios';

export interface IDeleteImageApiRequest {
  id: number;
}

export type DeleteImageRes = IResponse<void>;

export const deleteImage = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IDeleteImageApiRequest): Promise<Readonly<DeleteImageRes>> => {
  const path = '/images';
  const url = `${path}/${id}`;

  return httpClient.delete(url);
};
