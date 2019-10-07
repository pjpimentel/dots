import { AxiosInstance } from 'axios';

export interface IDeleteVolumeApiRequest {
  id: string;
}

export type DeleteVolumeResponse = IResponse<void>;

export const deleteVolume = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IDeleteVolumeApiRequest): Promise<Readonly<DeleteVolumeResponse>> => {
  const path = `/volumes/${id}`;
  const url = `${path}`;

  return httpClient.delete(url);
};
