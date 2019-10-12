import { AxiosInstance } from 'axios';

export interface IAddRulesToLoadBalancerApiRequest {
  forwarding_rules: IForwardingRule[]
  id: string;
}

export type AddRulesToLoadBalancerResponse = IResponse<void>;

export const addRulesToLoadBalancer = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  forwarding_rules,
  id,
}: IAddRulesToLoadBalancerApiRequest): Promise<Readonly<AddRulesToLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const body = {
    forwarding_rules,
  };
  const url = `${path}/${id}/forwarding_rules`;

  return httpClient.post<void>(url, body);
};
