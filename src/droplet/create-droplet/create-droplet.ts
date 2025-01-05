import { IResponse, IContext } from '../../types';
import { IDroplet } from '..';

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
  region?: string;
  size: string;
  ssh_keys?: Array<string | number>;
  tags?: string[];
  user_data?: string;
  volumes?: string[];
  vpc_uuid?: string;
  with_droplet_agent?: boolean;
}

export type CreateDropletResponse = IResponse<ICreateDropletApiResponse>;

export const createDroplet = ({
  httpClient,
}: IContext) => ({
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
  vpc_uuid,
  with_droplet_agent,
}: ICreateDropletApiRequest): Promise<Readonly<CreateDropletResponse>> => {
  const url = '/droplets';
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
    vpc_uuid,
    with_droplet_agent,
  };

  return httpClient.post<ICreateDropletApiResponse>(url, body);
};
