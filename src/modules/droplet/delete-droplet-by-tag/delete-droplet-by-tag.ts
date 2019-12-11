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
    const queryParams = {tag_name};
    const url = `${path}`;

    return httpClient.delete(url, {params: queryParams});
  };
