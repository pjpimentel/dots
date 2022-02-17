# customer

## get-balance
[original documentation](https://developers.digitalocean.com/documentation/v2/#balance)
```javascript
try {
  const {data:balance} = await dots.customer.getBalance();
  console.log(balance);
} catch (error) {
  console.log(error);
}
```

## list-billing-history
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-billing-history)
```javascript
try {
  const input = {
    page: 1, // number
  };
  const {data:{billing_history}} = await dots.customer.listBillingHistory(input);
  console.log(billing_history);
} catch (error) {
  console.log(error);
}
```

## list-invoices
[original documentation](https://developers.digitalocean.com/documentation/v2/#list-all-invoices)
```javascript
try {
  const input = {
    page: 1, // number
  };
  const {data:{invoices}} = await dots.customer.listInvoices(input);
  console.log(invoices);
} catch (error) {
  console.log(error);
}
```

## list-invoice-items
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-invoice-by-uuid)
```javascript
try {
  const input = {
    invoice_uuid: '', // string
    page: 1, // number
  };
  const {data:{invoice_items}} = await dots.customer.listInvoiceItems(input);
  console.log(invoice_items);
} catch (error) {
  console.log(error);
}
```

## get-invoice-summary
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-invoice-summary-by-uuid)
```javascript
try {
  const input = {
    invoice_uuid: '', // string
  };
  const {data:invoice_summary} = await dots.customer.getInvoiceSummary(input);
  console.log(invoice_summary);
} catch (error) {
  console.log(error);
}
```

## download-invoice
[original documentation](https://developers.digitalocean.com/documentation/v2/#retrieve-an-invoice-csv-by-uuid)

[original documentation²](https://developers.digitalocean.com/documentation/v2/#retrieve-an-invoice-pdf-by-uuid)
```javascript
try {
  const input = {
    invoice_uuid: '', // string
    format: '', // string
  };
  const {data} = await dots.customer.downloadInvoice(input);
  data.pipe(process.stdout)
} catch (error) {
  console.log(error);
}
```
