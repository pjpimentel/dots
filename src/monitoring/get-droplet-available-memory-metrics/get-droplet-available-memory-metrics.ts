import { IResponse, IContext, } from '../../types';
import { IDefaultMetricsResponse } from '..';

export interface IGetDropletAvailableMemoryMetricsInput {
  end: string | number;
  host_id: string | number;
  start: string | number;
}

export type GetDropletAvailableMemoryMetricsResponse = IResponse<IDefaultMetricsResponse>;

export const getDropletAvailableMemoryMetrics = ({
  httpClient,
}: IContext) => ({
  end,
  host_id,
  start,
}: IGetDropletAvailableMemoryMetricsInput): Promise<Readonly<GetDropletAvailableMemoryMetricsResponse>> => {
  const path = '/monitoring/metrics/droplet/memory_available';
  const query_params = {
    end,
    host_id,
    start,
  };

  return httpClient.get<IDefaultMetricsResponse>(path, {params: query_params});
};
