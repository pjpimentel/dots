import { IResponse, IContext } from '../../../types';
import { IAction } from '../../action';

export interface IResetDropletPasswordApiResponse {
  action: IAction;
}

export interface IResetDropletPasswordApiRequest {
  droplet_id: number;
}

export type ResetDropletPasswordResponse = IResponse<IResetDropletPasswordApiResponse>;

export const resetDropletPassword = ({
  httpClient,
}: IContext) => ({
  droplet_id,
}: IResetDropletPasswordApiRequest): Promise<Readonly<ResetDropletPasswordResponse>> => {
  const path = '/droplets';
  const type = 'password_reset';
  const body = {type};
  const url = `${path}/${droplet_id}/actions`;

  return httpClient.post<IResetDropletPasswordApiResponse>(url, body);
};
