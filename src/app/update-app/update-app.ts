import { IResponse, IContext } from '../../types';
import { IApp, IAppSpec } from '..';

export interface IUpdateAppApiResponse {
  app: IApp;
}

export interface IUpdateAppApiRequest {
  app_id: string;
  spec: Partial<IAppSpec>;
}

export type UpdateAppResponse = IResponse<IUpdateAppApiResponse>;

export const updateApp = ({
  httpClient,
}: IContext) => ({
  app_id,
  spec,
}: IUpdateAppApiRequest): Promise<Readonly<UpdateAppResponse>> => {
    const path = '/apps';
    const body = {spec};
    const url = `${path}/${app_id}`;

    return httpClient.put<IUpdateAppApiResponse>(url, body);
  };
