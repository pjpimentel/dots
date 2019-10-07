import { AxiosInstance } from 'axios';

export interface IGetVolumeActionApiRequest {
  action_id: string | number;
  volume_id: string;
}

export interface IGetVolumeActionApiResponse {
  action: IAction;
}

export type GetVolumeActionResponse = IResponse<IGetVolumeActionApiResponse>;

export const getVolumeAction = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  action_id,
  volume_id,
}: IGetVolumeActionApiRequest): Promise<Readonly<GetVolumeActionResponse>> => {
  const path = `/volumes/${volume_id}/actions/${action_id}`;
  const url = `${path}`;

  return httpClient.get<IGetVolumeActionApiResponse>(url);
};
