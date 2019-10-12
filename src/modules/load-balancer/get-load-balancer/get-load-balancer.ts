import { AxiosInstance } from 'axios';

export interface IGetLoadBalancerApiResponse {
  load_balancer: ILoadBalancer;
}

export interface IGetLoadBalancerApiRequest {
  id: string;
}

export type GetLoadBalancerResponse = IResponse<IGetLoadBalancerApiResponse>;

export const getLoadBalancer = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IGetLoadBalancerApiRequest): Promise<Readonly<GetLoadBalancerResponse>> => {
  const path = `/load_balancers/${id}`;
  const url = `${path}`;

  return httpClient.get<IGetLoadBalancerApiResponse>(url);
};
