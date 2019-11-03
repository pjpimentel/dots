import { IResponse, IContext } from '../../../types';
import { IAction } from '../../action';

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
}: IContext) => ({
  action_id,
  volume_id,
}: IGetVolumeActionApiRequest): Promise<Readonly<GetVolumeActionResponse>> => {
  const path = '/volumes';
  const url = `${path}/${volume_id}/actions/${action_id}`;

  return httpClient.get<IGetVolumeActionApiResponse>(url);
};
