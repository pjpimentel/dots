import { IResponse, IContext, IListRequest, IListResponse } from '../../types';
import { DatabaseClusterFirewallRuleType } from '..';

export interface IDatabaseClusterFirewallRule {
  type: DatabaseClusterFirewallRuleType;
  value: string;
  uuid: string;
  cluster_uuid: string;
  created_at: string;
}

export interface IListDatabaseClusterFirewallRulesApiResponse extends IListResponse {
  rules: IDatabaseClusterFirewallRule[];
}

export interface IListDatabaseClusterFirewallRulesApiRequest extends IListRequest {
  database_cluster_id: string;
}

export type ListDatabaseClusterFirewallRulesResponse = IResponse<IListDatabaseClusterFirewallRulesApiResponse>;

export const listDatabaseClusterFirewallRules = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
  database_cluster_id,
}: IListDatabaseClusterFirewallRulesApiRequest): Promise<Readonly<ListDatabaseClusterFirewallRulesResponse>> => {
  const path = '/databases';
  const query_params = {page, per_page};
  const url = `${path}/${database_cluster_id}/firewall`;

  return httpClient.get<IListDatabaseClusterFirewallRulesApiResponse>(url, {params: query_params});
};
