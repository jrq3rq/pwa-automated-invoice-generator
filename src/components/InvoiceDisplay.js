// InvoiceDisplay.js
import React from "react";

const InvoiceDisplay = ({ invoiceData }) => {
  if (!invoiceData) return null;

  return (
    <div>
      <h1>Invoice</h1>
      <p>
        <strong>Customer Name:</strong> {invoiceData.customerName}
      </p>
      <p>
        <strong>Address:</strong> {invoiceData.address}
      </p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <strong>Subtotal:</strong> {invoiceData.subtotal}
      </p>
      <p>
        <strong>Tax:</strong> {invoiceData.tax}
      </p>
      <p>
        <strong>Total:</strong> {invoiceData.total}
      </p>
    </div>
  );
};

export default InvoiceDisplay;
