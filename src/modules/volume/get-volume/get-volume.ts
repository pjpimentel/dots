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
}: IContext<AxiosInstance>) => async ({
  id,
}: IGetVolumeApiRequest): Promise<Readonly<GetVolumeResponse>> => {
  const path = `/volumes/${id}`;
  const url = `${path}`;

  return httpClient.get<IGetVolumeApiResponse>(url);
};
