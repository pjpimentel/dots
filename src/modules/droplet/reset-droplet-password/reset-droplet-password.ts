import { AxiosInstance } from 'axios';

export interface IResetDropletPasswordApiResponse extends IListResponse {
  action: IAction;
}

export interface IResetDropletPasswordApiRequest {
  id: string;
}

export type ResetDropletPasswordResponse = IResponse<IResetDropletPasswordApiResponse>;

export const resetDropletPassword = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
}: IResetDropletPasswordApiRequest): Promise<Readonly<ResetDropletPasswordResponse>> => {
  const path = `/droplets/${id}/actions`;
  const type = 'password_reset';
  const body = {type};
  const url = `${path}`;

  return httpClient.post<IResetDropletPasswordApiResponse>(url, body);
};
