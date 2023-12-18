import { useMemo, useState } from "react";
import { handleCalculate } from "./helper";

export const useRetailCalculator = () => {
  const [price, setPrice] = useState("");
  const [code, setCode] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  const handleQuantityChange = (e: React.FormEvent<HTMLInputElement>) => {
    // if (increment) setQuantity(quantity + 1);
    // else if (quantity > 0) setQuantity(quantity - 1);

    setQuantity(parseInt(e.currentTarget.value));
  };

  const handlePriceChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPrice(e.currentTarget.value);
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCode(e.currentTarget.value);
  };

  const summary = useMemo(() => {
    if (!quantity && !price && !code) return null;
    return handleCalculate(quantity, Number(price), code);
  }, [quantity, price, code]);

  // will be move into utils

  // const handleCalculate = () => {
  //   const amount = quantity * parseFloat(price);
  //   const descendingDiscount = DiscountRates.sort(compareAmount);

  //   const discountRate =
  //     descendingDiscount.find((discount) => discount.amount <= amount)?.rate ??
  //     0;

  //   const regionalTaxRate =
  //     Regions.find((region) => region.code === code)?.taxRate ?? 0;
  //   //parseFloat((amount * discountRate).toFixed(2)); can be move to utils
  //   const discountedAmount = parseFloat((amount * discountRate).toFixed(2));
  //   const regionTaxedAmount = parseFloat((amount * regionalTaxRate).toFixed(2));

  //   return {
  //     quantity,
  //     amount,
  //     subtotal: amount,
  //     discountRate: `${(discountRate * 100).toFixed(2)}%`,
  //     discountedAmount,
  //     regionTaxRate: `${(regionalTaxRate * 100).toFixed(2)}%`,
  //     regionTaxedAmount,
  //     total: parseFloat(
  //       (amount - discountedAmount + regionTaxedAmount).toFixed(2)
  //     ),
  //   };
  // };

  return {
    data: { summary, price, code, quantity },
    operations: {
      handlePriceChange,
      handleRegionChange,
      handleQuantityChange,
    },
  };
};
