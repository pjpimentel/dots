import { AxiosInstance } from 'axios';

export interface IGetActionApiRequest {
  id: number;
}

export interface IGetActionApiResponse {
  action: IAction;
}

export type GetActionResponse = IResponse<IGetActionApiResponse>;

export const getAction = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IGetActionApiRequest): Promise<Readonly<GetActionResponse>> => {
  const path = '/action';
  const url = `${path}/${id}`;

  return httpClient.get<IGetActionApiResponse>(url);
};