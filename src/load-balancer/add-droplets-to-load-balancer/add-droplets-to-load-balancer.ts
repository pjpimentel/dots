import { IResponse, IContext } from '../../types';

export interface IAddDropletsToLoadBalancerApiRequest {
  droplet_ids: number[]
  load_balancer_id: string;
}

export type AddDropletsToLoadBalancerResponse = IResponse<void>;

export const addDropletsToLoadBalancer = ({
  httpClient,
}: IContext) => ({
  droplet_ids,
  load_balancer_id,
}: IAddDropletsToLoadBalancerApiRequest): Promise<Readonly<AddDropletsToLoadBalancerResponse>> => {
  const url = `/load_balancers/${load_balancer_id}/droplets`;
  const body = {
    droplet_ids,
  };

  return httpClient.post<void>(url, body);
};
