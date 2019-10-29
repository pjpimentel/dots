import { AxiosInstance } from 'axios';

export interface IGetActionApiRequest {
  action_id: number;
}

export interface IGetActionApiResponse {
  action: IAction;
}

export type GetActionResponse = IResponse<IGetActionApiResponse>;

export const getAction = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  action_id,
}: IGetActionApiRequest): Promise<Readonly<GetActionResponse>> => {
  const path = '/action';
  const url = `${path}/${action_id}`;

  return httpClient.get<IGetActionApiResponse>(url);
};
