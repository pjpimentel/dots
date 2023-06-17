import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface IDoActionByDropletTagApiResponse {
  actions: IAction[];
}

export type ActionType = "power_cycle"
  | "power_on"
  | "power_off"
  | "shutdown"
  | "enable_ipv6"
  | "enable_backups"
  | "disable_backups"
  | "snapshot";

export interface IDoActionByDropletTagApiRequest {
  tag_name: string;
  type: ActionType | string;
}

export type DoActionByDropletTagResponse = IResponse<IDoActionByDropletTagApiResponse>;

export const doActionByDropletTag = ({
  httpClient,
}: IContext) => ({
  tag_name,
  type,
}: IDoActionByDropletTagApiRequest): Promise<Readonly<DoActionByDropletTagResponse>> => {
  const url = '/droplets/actions';
  const query_params = {tag_name};
  const body = {type};

  return httpClient.post<IDoActionByDropletTagApiResponse>(url, body, {
    params: query_params,
  });
};
