import { AxiosInstance } from 'axios';

export interface IDeleteImageApiRequest {
  image_id: number;
}

export type DeleteImageRes = IResponse<void>;

export const deleteImage = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  image_id,
}: IDeleteImageApiRequest): Promise<Readonly<DeleteImageRes>> => {
  const path = '/images';
  const url = `${path}/${image_id}`;

  return httpClient.delete(url);
};
