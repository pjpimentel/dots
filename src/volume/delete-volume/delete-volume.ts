import { IResponse, IContext } from '../../commom/types';

export interface IDeleteVolumeApiRequest {
  volume_id: string;
}

export type DeleteVolumeResponse = IResponse<void>;

export const deleteVolume = ({
  httpClient,
}: IContext) => ({
  volume_id,
}: IDeleteVolumeApiRequest): Promise<Readonly<DeleteVolumeResponse>> => {
  const path = '/volumes';
  const url = `${path}/${volume_id}`;

  return httpClient.delete(url);
};
