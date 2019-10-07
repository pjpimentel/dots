import { AxiosInstance } from 'axios';

export interface ICreateDropletApiResponse {
  droplet: IDroplet;
}

export interface ICreateDropletApiRequest {
  backups?: boolean;
  image: string | number;
  ipv6?: boolean;
  monitoring?: boolean;
  name: string;
  private_networking?: boolean;
  region: string;
  size: string;
  ssh_keys?: number[];
  tags?: string[];
  user_data?: string;
  volumes?: string[];
}

export type CreateDropletResponse = IResponse<ICreateDropletApiResponse>;

export const createDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  backups,
  image,
  ipv6,
  monitoring,
  name,
  private_networking,
  region,
  size,
  ssh_keys,
  tags,
  user_data,
  volumes,
}: ICreateDropletApiRequest): Promise<Readonly<CreateDropletResponse>> => {
  const path = '/droplets';
  const body = {
    backups,
    image,
    ipv6,
    monitoring,
    name,
    private_networking,
    region,
    size,
    ssh_keys,
    tags,
    user_data,
    volumes,
  };
  const url = `${path}`;

  return httpClient.post<ICreateDropletApiResponse>(url, body);
};
