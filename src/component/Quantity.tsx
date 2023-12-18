import type { FC } from "react";

export type QuantityProps = {
  quantity: number;
  onQuantityChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

export const Quantity: FC<QuantityProps> = ({ quantity, onQuantityChange }) => {
  return (
    <div>
      <label>Quantity</label>
      <div className="flex items-center">
        {/* <button onClick={() => onQuantityChange(false)} className="p-2 border">
          &mdash;
        </button> */}
        <input
          name="quantity"
          className="text-center border p-2"
          type="number"
          value={quantity}
          onChange={onQuantityChange}
        />
        {/* <button onClick={() => onQuantityChange(true)} className="p-2 border">
          &#xff0b;
        </button> */}
      </div>
    </div>
  );
};
