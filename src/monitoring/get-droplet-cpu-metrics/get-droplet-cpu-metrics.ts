import { IResponse, IContext, } from '../../types';
import { IDefaultMetricsResponse } from '..';

export interface IGetDropletCpuMetricsInput {
  end: string | number;
  host_id: string | number;
  start: string | number;
}

export type GetDropletCpuMetricsResponse = IResponse<IDefaultMetricsResponse>;

export const getDropletCpuMetrics = ({
  httpClient,
}: IContext) => ({
  end,
  host_id,
  start,
}: IGetDropletCpuMetricsInput): Promise<Readonly<GetDropletCpuMetricsResponse>> => {
  const url = '/monitoring/metrics/droplet/cpu';
  const query_params = {
    end,
    host_id,
    start,
  };

  return httpClient.get<IDefaultMetricsResponse>(url, {params: query_params});
};
