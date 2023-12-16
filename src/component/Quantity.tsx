import type { FC } from "react";

export type QuantityProps = {
  quantity: number;
  quantityChange: (increment: boolean) => void;
};

export const Quantity: FC<QuantityProps> = ({ quantity, quantityChange }) => {
  return (
    <div>
      <p>Set the quantity</p>
      <div className="flex items-center">
        <button onClick={() => quantityChange(false)}>&mdash;</button>
        <input className="" type="text" value={quantity} readOnly />
        <button onClick={() => quantityChange(true)}>&#xff0b;</button>
      </div>
    </div>
  );
};
