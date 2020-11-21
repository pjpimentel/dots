import { IResponse, IContext } from '../../../types';

export interface IDeleteAppApiRequest {
  app_id: string;
}

export type DeleteAppResponse = IResponse<void>;

export const deleteApp = ({
  httpClient,
}: IContext) => ({
  app_id,
}: IDeleteAppApiRequest): Promise<Readonly<DeleteAppResponse>> => {
  const path = '/apps';
  const url = `${path}/${app_id}`;

  return httpClient.delete(url);
};
