import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';
import { IAction } from '../../action';

export interface IListDropletActionsApiResponse extends IListResponse {
  actions: IAction[];
}

export interface IListDropletActionsApiRequest extends IListRequest {
  droplet_id: number;
}

export type ListDropletActionsResponse = IResponse<IListDropletActionsApiResponse>;

export const listDropletActions = ({
  httpClient,
}: IContext) => ({
  droplet_id,
  page = 1,
  per_page = 25,
}: IListDropletActionsApiRequest): Promise<Readonly<ListDropletActionsResponse>> => {
  const path = '/droplets';
  const queryParams = {page, per_page};
  const url = `${path}/${droplet_id}/actions`;

  return httpClient.get<IListDropletActionsApiResponse>(url, {
    params: queryParams,
  });
};
