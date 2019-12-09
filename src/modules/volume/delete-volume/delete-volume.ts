import { IResponse, IContext } from '../../../types';

export interface IDeleteVolumeApiRequest {
  id?: string;
  volume_id: string;
}

export type DeleteVolumeResponse = IResponse<void>;

export const deleteVolume = ({
  httpClient,
}: IContext) => ({
  id,
  volume_id,
}: IDeleteVolumeApiRequest): Promise<Readonly<DeleteVolumeResponse>> => {
  const path = '/volumes';
  const url = `${path}/${volume_id || id}`;

  return httpClient.delete(url);
};
