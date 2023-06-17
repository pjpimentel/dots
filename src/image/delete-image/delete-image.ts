import { IResponse, IContext } from '../../types';

export interface IDeleteImageApiRequest {
  image_id: number;
}

export type DeleteImageRes = IResponse<void>;

export const deleteImage = ({
  httpClient,
}: IContext) => ({
  image_id,
}: IDeleteImageApiRequest): Promise<Readonly<DeleteImageRes>> => {
  const url = `/images/${image_id}`;

  return httpClient.delete(url);
};
