import { AxiosInstance } from 'axios';

export interface ICreateDropletsApiResponse {
  droplets: IDroplet[];
}

export interface ICreateDropletsApiRequest {
  backups?: boolean;
  image: string | number;
  ipv6?: boolean;
  monitoring?: boolean;
  names: string[];
  private_networking?: boolean;
  region: string;
  size: string;
  ssh_keys?: number[];
  tags?: string[];
  user_data?: string;
  volumes?: string[];
}

export type CreateDropletsResponse = IResponse<ICreateDropletsApiResponse>;

export const createDroplets = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  backups,
  image,
  ipv6,
  monitoring,
  names,
  private_networking,
  region,
  size,
  ssh_keys,
  tags,
  user_data,
  volumes,
}: ICreateDropletsApiRequest): Promise<Readonly<CreateDropletsResponse>> => {
  const path = '/droplets';
  const body = {
    backups,
    image,
    ipv6,
    monitoring,
    names,
    private_networking,
    region,
    size,
    ssh_keys,
    tags,
    user_data,
    volumes,
  };
  const url = `${path}`;

  return httpClient.post<ICreateDropletsApiResponse>(url, body);
};
