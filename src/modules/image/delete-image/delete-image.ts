import { AxiosInstance } from 'axios';

export interface IDeleteImageApiRequest {
  id: number;
}

type DeleteImageRes = IResponse<void>;

export const deleteImage = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
}: IDeleteImageApiRequest): Promise<Readonly<DeleteImageRes>> => {
  const path = `/images/${id}`;
  const url = `${path}`;

  return httpClient.delete(url);
};
