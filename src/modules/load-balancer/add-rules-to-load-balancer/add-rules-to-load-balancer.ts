import { IResponse, IContext } from '../../../types';
import { IForwardingRule } from '..';

export interface IAddRulesToLoadBalancerApiRequest {
  forwarding_rules: IForwardingRule[]
  load_balancer_id: string;
  id?: string; /// deprecated will be removed in future versions
}

export type AddRulesToLoadBalancerResponse = IResponse<void>;

export const addRulesToLoadBalancer = ({
  httpClient,
}: IContext) => ({
  forwarding_rules,
  id,
  load_balancer_id,
}: IAddRulesToLoadBalancerApiRequest): Promise<Readonly<AddRulesToLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const body = {
    forwarding_rules,
  };
  const url = `${path}/${load_balancer_id || id}/forwarding_rules`;

  return httpClient.post<void>(url, body);
};
