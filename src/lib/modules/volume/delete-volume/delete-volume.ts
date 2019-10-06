import { AxiosInstance } from 'axios';

export interface IDeleteVolumeApiRequest {
  id: string;
}

type DeleteVolumeResponse = IResponse<void>;

export const deleteVolume = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
}: IDeleteVolumeApiRequest): Promise<Readonly<DeleteVolumeResponse>> => {
  const path = `/volumes/${id}`;
  const url = `${path}`;

  return httpClient.delete(url);
};