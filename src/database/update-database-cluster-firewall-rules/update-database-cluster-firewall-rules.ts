import { IResponse, IContext } from '../../types';
import { DatabaseClusterFirewallRuleType } from '..';

export interface IDatabaseClusterNewFirewallRule {
  type: DatabaseClusterFirewallRuleType;
  value: string;
  uuid?: string;
  cluster_uuid?: string;
}

export interface IUpdateDatabaseClusterFirewallRulesApiRequest {
  database_cluster_id: string;
  rules: IDatabaseClusterNewFirewallRule[];
}

export type UpdateDatabaseClusterFirewallRulesResponse = IResponse<void>;

export const updateDatabaseClusterFirewallRules = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  rules,
}: IUpdateDatabaseClusterFirewallRulesApiRequest): Promise<Readonly<UpdateDatabaseClusterFirewallRulesResponse>> => {
  const path = '/databases';
  const body = {rules};
  const url = `${path}/${database_cluster_id}/firewall`;

  return httpClient.put<void>(url, body);
};
