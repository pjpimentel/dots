import { IResponse, IContext } from '../../../types';

export interface IDeleteDropletByTagApiRequest {
  tag_name: string;
}

export type DeleteDropletByTagResponse = IResponse<void>;

export const deleteDropletByTag = ({
  httpClient,
}: IContext) => ({
  tag_name,
}: IDeleteDropletByTagApiRequest): Promise<Readonly<DeleteDropletByTagResponse>> => {
    const path = '/droplets';
    const url = `${path}?tag_name=${tag_name}`;

    return httpClient.delete(url);
  };
