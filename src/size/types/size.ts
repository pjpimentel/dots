/// Size raw object.
export interface ISize {
  available: boolean;
  disk: number;
  memory: number;
  price_hourly: number;
  price_monthly: number;
  regions: string[];
  slug: string;
  transfer: number;
  vcpus: number;
}
