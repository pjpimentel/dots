import { AxiosInstance } from 'axios';

export interface IResetDropletPasswordApiResponse {
  action: IAction;
}

export interface IResetDropletPasswordApiRequest {
  id: string;
}

export type ResetDropletPasswordResponse = IResponse<IResetDropletPasswordApiResponse>;

export const resetDropletPassword = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IResetDropletPasswordApiRequest): Promise<Readonly<ResetDropletPasswordResponse>> => {
  const path = '/droplets';
  const type = 'password_reset';
  const body = {type};
  const url = `${path}/${id}/actions`;

  return httpClient.post<IResetDropletPasswordApiResponse>(url, body);
};
