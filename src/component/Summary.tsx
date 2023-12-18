import type { FC } from "react";
import { SummaryDetails } from "../helper";

export type SummaryProps = {
  summaryDetails: SummaryDetails | null;
};

export const Summary: FC<SummaryProps> = ({ summaryDetails }) => {
  if (!summaryDetails) return null;
  return (
    <div>
      <div className="flex item-center">
        <label>Item 1</label>
        <label className="mx-2 font-bold">x</label>
        <label>{summaryDetails.quantity}</label>
        <p className="ml-2">{summaryDetails.amount}</p>
      </div>
      <div className="flex justify-end">
        <div className="flex item-center">
          <label>Subtotal</label>
          <p>{summaryDetails.subtotal}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex item-center">
          <label>Discount ({summaryDetails.discountRate})</label>
          <p>{summaryDetails.discountedAmount}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex item-center">
          <label>Regional Tax ({summaryDetails.regionTaxRate})</label>
          <p>{summaryDetails.regionTaxedAmount}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex item-center">
          <label>Total</label>
          <p>{summaryDetails.total}</p>
        </div>
      </div>
    </div>
  );
};
