import { IResponse, IContext } from '../../types';

export interface IDeleteDropletApiRequest {
  droplet_id: number;
}

export type DeleteDropletResponse = IResponse<void>;

export const deleteDroplet = ({
  httpClient,
}: IContext) => ({
  droplet_id,
}: IDeleteDropletApiRequest): Promise<Readonly<DeleteDropletResponse>> => {
  const path = '/droplets';
  const url = `${path}/${droplet_id}`;

  return httpClient.delete(url);
};
