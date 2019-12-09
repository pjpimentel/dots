import { IResponse, IContext } from '../../../types';

export interface IRemoveDropletsFromLoadBalancerApiRequest {
  droplet_ids: number[];
  load_balancer_id: string;
  id?: string; /// deprecated will be removed in future versions
}

export type RemoveDropletsFromLoadBalancerResponse = IResponse<void>;

export const removeDropletsFromLoadBalancer = ({
  httpClient,
}: IContext) => ({
  droplet_ids,
  id,
  load_balancer_id,
}: IRemoveDropletsFromLoadBalancerApiRequest): Promise<Readonly<RemoveDropletsFromLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const body = {
    droplet_ids,
  };
  const url = `${path}/${load_balancer_id || id}/droplets`;

  return httpClient.delete(url, {data: body});
};
