export interface IDefaultMetricsResponse {
  data: {
    result: Array<{
      metric: {
        host_id: string
      },
      values: Array<Array<number|string>>
    }>;
    resultType: string;
  };
  status: string;
}
