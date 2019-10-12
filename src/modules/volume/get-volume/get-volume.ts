import { AxiosInstance } from 'axios';

export interface IGetVolumeApiResponse {
  volume: IVolume;
}

export interface IGetVolumeApiRequest {
  id: string;
}

export type GetVolumeResponse = IResponse<IGetVolumeApiResponse>;

export const getVolume = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IGetVolumeApiRequest): Promise<Readonly<GetVolumeResponse>> => {
  const path = '/volumes';
  const url = `${path}/${id}`;

  return httpClient.get<IGetVolumeApiResponse>(url);
};
