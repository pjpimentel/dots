import { IResponse, IContext } from '../../../types';

export interface IDeleteLoadBalancerApiRequest {
  id: string;
}

export type DeleteLoadBalancerResponse = IResponse<void>;

export const deleteLoadBalancer = ({
  httpClient,
}: IContext) => ({
  id,
}: IDeleteLoadBalancerApiRequest): Promise<Readonly<DeleteLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const url = `${path}/${id}`;

  return httpClient.delete(url);
};
