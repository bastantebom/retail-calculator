import type { FC } from "react";

export type ItemPriceProps = {
  price: number;
  onPriceChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

export const ItemPrice: FC<ItemPriceProps> = ({ price, onPriceChange }) => {
  return (
    <div>
      <label>Price</label>
      <div className="flex items-center">
        <input
          name="itemPrice"
          type="number"
          value={price}
          onChange={onPriceChange}
          className="text-center border p-2"
          step="any"
        />
      </div>
    </div>
  );
};
