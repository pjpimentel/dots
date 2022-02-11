import { IResponse, IContext } from '../../types';
import { IApp } from '..';

export interface IGetAppApiResponse {
  app: IApp;
}

export interface IGetAppApiRequest {
  app_id: string;
}

export type GetAppResponse = IResponse<IGetAppApiResponse>;

export const getApp = ({
  httpClient,
}: IContext) => ({
  app_id,
}: IGetAppApiRequest): Promise<Readonly<GetAppResponse>> => {
  const path = '/apps';
  const url = `${path}/${app_id}`;

  return httpClient.get<IGetAppApiResponse>(url);
};
