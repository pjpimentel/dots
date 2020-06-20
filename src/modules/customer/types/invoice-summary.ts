export interface IUserBillingAddress {
  address_line1: string;
  city: string;
  region: string;
  postal_code: string;
  country_iso2_code: string;
  created_at: string;
  updated_at: string;
};
export interface IInvoiceOverage {
  name: string;
  amount: string;
}
export interface IInvoiceTaxes {
  name: string;
  amount: string;
}
export interface IInvoiceCreditAdjustments {
  name: string;
  amount: string;
}
export interface IInvoiceProductChargesItem {
  amount: string;
  name: string;
  count: string;
}
export interface IInvoiceProductCharges {
  name: string;
  amount: string;
  items: IInvoiceProductChargesItem[];
}
export interface IInvoiceSummary {
  invoice_uuid: string;
  billing_period: string;
  amount: string;
  user_name: string;
  user_billing_address: IUserBillingAddress;
  user_company: string;
  user_email: string;
  product_charges: IInvoiceProductCharges;
  overages: IInvoiceOverage;
  taxes: IInvoiceTaxes;
  credits_and_adjustments: IInvoiceCreditAdjustments;
};
