export interface IHealthCheck {
  check_interval_seconds?: number;
  healthy_threshold?: number;
  path?: string;
  port: number;
  protocol: string;
  response_timeout_seconds?: number;
  unhealthy_threshold?: number;
}
