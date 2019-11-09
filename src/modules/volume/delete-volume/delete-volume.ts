import { IResponse, IContext } from '../../../types';

export interface IDeleteVolumeApiRequest {
  id: string;
}

export type DeleteVolumeResponse = IResponse<void>;

export const deleteVolume = ({
  httpClient,
}: IContext) => ({
  id,
}: IDeleteVolumeApiRequest): Promise<Readonly<DeleteVolumeResponse>> => {
  const path = '/volumes';
  const url = `${path}/${id}`;

  return httpClient.delete(url);
};
