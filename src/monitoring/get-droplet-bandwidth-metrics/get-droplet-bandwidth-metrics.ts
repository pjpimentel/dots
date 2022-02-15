import { IResponse, IContext, } from '../../types';
import { IDefaultMetricsResponse } from '..';

export interface IGetDropletBandwidthMetricsInput {
  end: string | number;
  host_id: string | number;
  network_interface: "private" | "public" | string;
  start: string | number;
  traffic_direction: "inbound" | "outbound" | string;
}

export type GetDropletBandwidthMetricsResponse = IResponse<IDefaultMetricsResponse>;

export const getDropletBandwidthMetrics = ({
  httpClient,
}: IContext) => ({
  end,
  host_id,
  network_interface,
  start,
  traffic_direction,
}: IGetDropletBandwidthMetricsInput): Promise<Readonly<GetDropletBandwidthMetricsResponse>> => {
  const path = '/monitoring/metrics/droplet/bandwidth';
  const query_params = {
    direction: traffic_direction,
    end,
    host_id,
    interface: network_interface,
    start,
  };

  return httpClient.get<IDefaultMetricsResponse>(path, {params: query_params});
};
