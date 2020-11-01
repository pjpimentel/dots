import { IResponse, IContext } from '../../../types';

export interface IDeleteLoadBalancerApiRequest {
  load_balancer_id: string;
}

export type DeleteLoadBalancerResponse = IResponse<void>;

export const deleteLoadBalancer = ({
  httpClient,
}: IContext) => ({
  load_balancer_id,
}: IDeleteLoadBalancerApiRequest): Promise<Readonly<DeleteLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const url = `${path}/${load_balancer_id}`;

  return httpClient.delete(url);
};
