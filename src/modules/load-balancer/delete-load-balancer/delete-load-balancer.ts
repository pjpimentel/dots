import { IResponse, IContext } from '../../../types';

export interface IDeleteLoadBalancerApiRequest {
  load_balancer_id: string;
  id?: string; /// deprecated will be removed in future versions
}

export type DeleteLoadBalancerResponse = IResponse<void>;

export const deleteLoadBalancer = ({
  httpClient,
}: IContext) => ({
  id,
  load_balancer_id,
}: IDeleteLoadBalancerApiRequest): Promise<Readonly<DeleteLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const url = `${path}/${load_balancer_id || id}`;

  return httpClient.delete(url);
};
