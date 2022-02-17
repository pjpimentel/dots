import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { IInvoice, IInvoicePreview } from '../types';

export interface IListInvoicesApiResponse extends IListResponse {
  invoices: IInvoice[];
  invoice_preview: IInvoicePreview;
}

export type ListInvoicesResponse = IResponse<IListInvoicesApiResponse>;

export const listInvoices = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListInvoicesResponse>> => {
  const path = '/customers/my/invoices';
  const query_params = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListInvoicesApiResponse>(url, {params: query_params});
};
