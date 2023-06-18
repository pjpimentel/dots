import { IResponse, IContext, } from '../../types';
import { IDefaultMetricsResponse } from '..';

export interface IGetDropletFreeMemoryMetricsInput {
  end: string | number;
  host_id: string | number;
  start: string | number;
}

export type GetDropletFreeMemoryMetricsResponse = IResponse<IDefaultMetricsResponse>;

export const getDropletFreeMemoryMetrics = ({
  httpClient,
}: IContext) => ({
  end,
  host_id,
  start,
}: IGetDropletFreeMemoryMetricsInput): Promise<Readonly<GetDropletFreeMemoryMetricsResponse>> => {
  const url = '/monitoring/metrics/droplet/memory_free';
  const query_params = {
    end,
    host_id,
    start,
  };

  return httpClient.get<IDefaultMetricsResponse>(url, {params: query_params});
};
