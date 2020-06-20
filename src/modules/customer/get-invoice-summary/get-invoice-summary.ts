import { IResponse, IContext } from '../../../types';
import { IInvoiceSummary } from '..';

export type GetInvoiceSummaryResponse = IResponse<IInvoiceSummary>;


export interface IGetInvoiceSummaryApiRequest {
  invoice_uuid: string;
}

export const getInvoiceSummary = ({
  httpClient,
}: IContext) => ({
  invoice_uuid,
}: IGetInvoiceSummaryApiRequest): Promise<Readonly<GetInvoiceSummaryResponse>> => {
  const path = '/customers/my/invoices';
  const url = `${path}/${invoice_uuid}/summary`;

  return httpClient.get<IInvoiceSummary>(url);
};
