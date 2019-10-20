import { AxiosInstance } from 'axios';

export interface ICreateSshKeyApiResponse {
  ssh_key: ISshKey;
}

export interface ICreateSshKeyApiRequest {
  name: string;
  public_key: string;
}

export type CreateSshKeyResponse = IResponse<ICreateSshKeyApiResponse>;

export const createSshKey = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  name,
  public_key,
}: ICreateSshKeyApiRequest): Promise<Readonly<CreateSshKeyResponse>> => {
  const path = '/account/keys';
  const body = {
    name,
    public_key,
  };
  const url = `${path}`;

  return httpClient.post<ICreateSshKeyApiResponse>(url, body);
};
