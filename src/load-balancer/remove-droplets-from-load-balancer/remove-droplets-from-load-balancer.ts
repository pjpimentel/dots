import { IResponse, IContext } from '../../types';

export interface IRemoveDropletsFromLoadBalancerApiRequest {
  droplet_ids: number[];
  load_balancer_id: string;
}

export type RemoveDropletsFromLoadBalancerResponse = IResponse<void>;

export const removeDropletsFromLoadBalancer = ({
  httpClient,
}: IContext) => ({
  droplet_ids,
  load_balancer_id,
}: IRemoveDropletsFromLoadBalancerApiRequest): Promise<Readonly<RemoveDropletsFromLoadBalancerResponse>> => {
  const url = `/load_balancers/${load_balancer_id}/droplets`;
  const body = {
    droplet_ids,
  };

  return httpClient.delete(url, {data: body});
};
