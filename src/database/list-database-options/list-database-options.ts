import { IContext, IResponse } from '../../types';

export interface IDatabaseLayout {
  num_nodes: number;
  sizes: string[];
}

export interface IDatabaseOptions {
  regions: string[];
  versions: string[];
  layouts: IDatabaseLayout[];
}

export interface IDatabaseVersionAvailability {
  end_of_life: string;
  end_of_availability: string;
  version: string;
}

export interface IListDatabaseOptionsApiResponse {
  options: { [key: string]: IDatabaseOptions };
  version_availability: { [key: string]: IDatabaseVersionAvailability };
}

export type ListDatabaseOptionsResponse = IResponse<IListDatabaseOptionsApiResponse>;

export const listDatabaseOptions = ({
  httpClient,
}: IContext) => (): Promise<Readonly<ListDatabaseOptionsResponse>> => {
  const path = '/databases/options';
  const url = `${path}`;

  return httpClient.get<IListDatabaseOptionsApiResponse>(url);
};
