import { IResponse, IContext } from '../../types';

export interface IRetryDropletDestroyApiRequest {
  droplet_id: number;
}

export type RetryDropletDestroyResponse = IResponse<void>;

export const retryDropletDestroy = ({
  httpClient,
}: IContext) => ({
  droplet_id,
}: IRetryDropletDestroyApiRequest): Promise<Readonly<RetryDropletDestroyResponse>> => {
  const url = `/droplets/${droplet_id}/destroy_with_associated_resources/retry`;

  return httpClient.post(url);
};
