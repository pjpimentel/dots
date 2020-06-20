import { IResponse, IContext } from '../../../types';
import { Stream } from 'stream';

export type DownloadInvoiceResponse = IResponse<Stream>;

export interface IDownloadInvoiceApiRequest {
  invoice_uuid: string;
  format: 'csv' | 'pdf' | string;
}

export const downloadInvoice = ({
  httpClient,
}: IContext) => ({
  invoice_uuid,
  format,
}: IDownloadInvoiceApiRequest): Promise<Readonly<DownloadInvoiceResponse>> => {
  const path = '/customers/my/invoices';
  const url = `${path}/${invoice_uuid}/${format}`;

  return httpClient.get<Stream>(url, {
    responseType: 'stream',
  });
};
