import type { FC } from "react";

export type QuantityProps = {
  quantity: number;
  onQuantityChange: (increment: boolean) => void;
};

export const Quantity: FC<QuantityProps> = ({ quantity, onQuantityChange }) => {
  return (
    <div>
      <label>Quantity</label>
      <div className="flex items-center">
        <button onClick={() => onQuantityChange(false)}>&mdash;</button>
        <input
          name="quantity"
          className=""
          type="text"
          value={quantity}
          readOnly
        />
        <button onClick={() => onQuantityChange(true)}>&#xff0b;</button>
      </div>
    </div>
  );
};
