import { IResponse, IContext } from '../../../types';
import { IVolume } from '..';

export interface IGetVolumeApiResponse {
  volume: IVolume;
}

export interface IGetVolumeApiRequest {
  id: string;
}

export type GetVolumeResponse = IResponse<IGetVolumeApiResponse>;

export const getVolume = ({
  httpClient,
}: IContext) => ({
  id,
}: IGetVolumeApiRequest): Promise<Readonly<GetVolumeResponse>> => {
  const path = '/volumes';
  const url = `${path}/${id}`;

  return httpClient.get<IGetVolumeApiResponse>(url);
};
