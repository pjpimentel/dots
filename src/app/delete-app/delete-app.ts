import { IResponse, IContext } from '../../types';

export interface IDeleteAppApiRequest {
  app_id: string;
}

export type DeleteAppResponse = IResponse<void>;

export const deleteApp = ({
  httpClient,
}: IContext) => ({
  app_id,
}: IDeleteAppApiRequest): Promise<Readonly<DeleteAppResponse>> => {
  const url = `/apps/${app_id}`;

  return httpClient.delete(url);
};
