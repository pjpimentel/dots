import { IResponse, IContext } from '../../../types';

export type DeleteRegistryResponse = IResponse<void>;

export const deleteRegistry = ({
  httpClient,
}: IContext) => (): Promise<Readonly<DeleteRegistryResponse>> => {
  const path = '/registry';
  const url = `${path}`;

  return httpClient.delete(url);
};
