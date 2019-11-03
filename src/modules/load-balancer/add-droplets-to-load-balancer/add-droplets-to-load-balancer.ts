import { IResponse, IContext } from '../../../types';

export interface IAddDropletsToLoadBalancerApiRequest {
  droplet_ids: number[]
  id: string;
}

export type AddDropletsToLoadBalancerResponse = IResponse<void>;

export const addDropletsToLoadBalancer = ({
  httpClient,
}: IContext) => ({
  droplet_ids,
  id,
}: IAddDropletsToLoadBalancerApiRequest): Promise<Readonly<AddDropletsToLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const body = {
    droplet_ids,
  };
  const url = `${path}/${id}/droplets`;

  return httpClient.post<void>(url, body);
};
