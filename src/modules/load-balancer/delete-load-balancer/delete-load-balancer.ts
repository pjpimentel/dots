import { AxiosInstance } from 'axios';

export interface IDeleteLoadBalancerApiRequest {
  id: string;
}

export type DeleteLoadBalancerResponse = IResponse<void>;

export const deleteLoadBalancer = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IDeleteLoadBalancerApiRequest): Promise<Readonly<DeleteLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const url = `${path}/${id}`;

  return httpClient.delete(url);
};
