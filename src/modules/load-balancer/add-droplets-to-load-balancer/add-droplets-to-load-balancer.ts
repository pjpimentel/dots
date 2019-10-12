import { AxiosInstance } from 'axios';

export interface IAddDropletsToLoadBalancerApiRequest {
  droplet_ids: number[]
  id: string;
}

export type AddDropletsToLoadBalancerResponse = IResponse<void>;

export const addDropletsToLoadBalancer = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_ids,
  id,
}: IAddDropletsToLoadBalancerApiRequest): Promise<Readonly<AddDropletsToLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const body = {
    droplet_ids,
  };
  const url = `${path}/${id}`;

  return httpClient.post<void>(url, body);
};
