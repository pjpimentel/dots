import { IResponse, IContext } from '../../commom/types';
import { IContainerRegistry } from '..';

export interface IGetRegistryApiResponse {
  registry: IContainerRegistry;
}

export type GetRegistryResponse = IResponse<IGetRegistryApiResponse>;

export const getRegistry = ({
  httpClient,
}: IContext) => (): Promise<Readonly<GetRegistryResponse>> => {
  const path = '/registry';
  const url = `${path}`;

  return httpClient.get<IGetRegistryApiResponse>(url);
};
