import type { FC } from "react";

export type ItemPriceProps = {
  price: number;
  onPriceChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

export const ItemPrice: FC<ItemPriceProps> = ({ price, onPriceChange }) => {
  return (
    <div>
      <label>Quantity</label>
      <div className="flex items-center">
        <input
          name="itemPrice"
          type="text"
          value={price}
          onChange={onPriceChange}
        />
      </div>
    </div>
  );
};
