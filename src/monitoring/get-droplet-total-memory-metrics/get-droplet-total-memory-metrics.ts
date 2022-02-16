import { IResponse, IContext, } from '../../types';
import { IDefaultMetricsResponse } from '..';

export interface IGetDropletTotalMemoryMetricsInput {
  end: string | number;
  host_id: string | number;
  start: string | number;
}

export type GetDropletTotalMemoryMetricsResponse = IResponse<IDefaultMetricsResponse>;

export const getDropletTotalMemoryMetrics = ({
  httpClient,
}: IContext) => ({
  end,
  host_id,
  start,
}: IGetDropletTotalMemoryMetricsInput): Promise<Readonly<GetDropletTotalMemoryMetricsResponse>> => {
  const path = '/monitoring/metrics/droplet/memory_total';
  const query_params = {
    end,
    host_id,
    start,
  };

  return httpClient.get<IDefaultMetricsResponse>(path, {params: query_params});
};
