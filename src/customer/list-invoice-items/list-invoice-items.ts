import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { IInvoiceItem } from '../types';

export interface IListInvoiceItemsApiResponse extends IListResponse {
  invoice_items: IInvoiceItem[];
}

export interface IListInvoiceItemsApiRequest extends IListRequest {
  invoice_uuid: string;
}

export type ListInvoiceItemsResponse = IResponse<IListInvoiceItemsApiResponse>;

export const listInvoiceItems = ({
  httpClient,
}: IContext) => ({
  invoice_uuid,
  page = 1,
  per_page = 25,
}: IListInvoiceItemsApiRequest): Promise<Readonly<ListInvoiceItemsResponse>> => {
  const url = `/customers/my/invoices/${invoice_uuid}`;
  const query_params = {page, per_page};

  return httpClient.get<IListInvoiceItemsApiResponse>(url, {params: query_params});
};
