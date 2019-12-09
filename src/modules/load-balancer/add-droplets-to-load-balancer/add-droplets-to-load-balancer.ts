import { IResponse, IContext } from '../../../types';

export interface IAddDropletsToLoadBalancerApiRequest {
  droplet_ids: number[]
  load_balancer_id: string;
  id?: string; /// deprecated will be removed in future versions
}

export type AddDropletsToLoadBalancerResponse = IResponse<void>;

export const addDropletsToLoadBalancer = ({
  httpClient,
}: IContext) => ({
  droplet_ids,
  id,
  load_balancer_id,
}: IAddDropletsToLoadBalancerApiRequest): Promise<Readonly<AddDropletsToLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const body = {
    droplet_ids,
  };
  const url = `${path}/${load_balancer_id || id}/droplets`;

  return httpClient.post<void>(url, body);
};
