import { IResponse, IContext } from '../../types';

export interface IDeleteVolumeByNameApiRequest {
  region: string;
  volume_name: string;
}

export type DeleteVolumeByNameResponse = IResponse<void>;

export const deleteVolumeByName = ({
  httpClient,
}: IContext) => ({
  region,
  volume_name,
}: IDeleteVolumeByNameApiRequest): Promise<Readonly<DeleteVolumeByNameResponse>> => {
  const url = `/volumes`;
  const query_params = {name: volume_name, region};

  return httpClient.delete(url, {params: query_params});
};
