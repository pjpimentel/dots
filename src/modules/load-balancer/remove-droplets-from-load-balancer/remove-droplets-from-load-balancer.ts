import { IResponse, IContext } from '../../../types';

export interface IRemoveDropletsFromLoadBalancerApiRequest {
  droplet_ids: number[]
  id: string;
}

export type RemoveDropletsFromLoadBalancerResponse = IResponse<void>;

export const removeDropletsFromLoadBalancer = ({
  httpClient,
}: IContext) => ({
  droplet_ids,
  id,
}: IRemoveDropletsFromLoadBalancerApiRequest): Promise<Readonly<RemoveDropletsFromLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const body = {
    droplet_ids,
  };
  const url = `${path}/${id}/droplets`;

  return httpClient.delete(url, {data: body});
};
