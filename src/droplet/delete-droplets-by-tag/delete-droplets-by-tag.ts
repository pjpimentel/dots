import { IResponse, IContext } from '../../types';

export interface IDeleteDropletByTagApiRequest {
  tag_name: string;
}

export type DeleteDropletByTagResponse = IResponse<void>;

export const deleteDropletsByTag = ({
  httpClient,
}: IContext) => ({
  tag_name,
}: IDeleteDropletByTagApiRequest): Promise<Readonly<DeleteDropletByTagResponse>> => {
    const url = '/droplets';
    const query_params = {tag_name};

    return httpClient.delete(url, {params: query_params});
  };
