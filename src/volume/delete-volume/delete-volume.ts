import { IResponse, IContext } from '../../types';

export interface IDeleteVolumeApiRequest {
  volume_id: string;
}

export type DeleteVolumeResponse = IResponse<void>;

export const deleteVolume = ({
  httpClient,
}: IContext) => ({
  volume_id,
}: IDeleteVolumeApiRequest): Promise<Readonly<DeleteVolumeResponse>> => {
  const url = `/volumes/${volume_id}`;

  return httpClient.delete(url);
};
