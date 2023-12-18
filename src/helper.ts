export type DiscountRate = {
  amount: number;
  rate: number;
};

export const DiscountRates: Array<DiscountRate> = [
  { amount: 5000, rate: 0.05 },
  { amount: 10000, rate: 0.1 },
  { amount: 7000, rate: 0.07 },
  { amount: 1000, rate: 0.03 },
  { amount: 50000, rate: 0.15 },
];

type Region = {
  code: string;
  name: string;
  taxRate: number;
};

export const Regions: Array<Region> = [
  { code: "", name: "Choose region", taxRate: 0 },
  { code: "AUK", name: "Auckland", taxRate: 0.0685 },
  { code: "WLG", name: "Wellington", taxRate: 0.08 },
  { code: "WAI", name: "Waikato", taxRate: 0.0625 },
  { code: "CHC", name: "Christchurch", taxRate: 0.04 },
  { code: "TAS", name: "Tasman", taxRate: 0.0825 },
];

export type SummaryDetails = {
  quantity: number;
  amount: number;
  subtotal: number;
  discountRate: string;
  discountedAmount: number;
  regionTaxRate: string;
  regionTaxedAmount: number;
  total: number;
};

const compareAmount = (a: DiscountRate, b: DiscountRate) => {
  return b.amount - a.amount;
};

export const handleCalculate = (
  price: number,
  quantity: number,
  code: string
) => {
  const amount = quantity * price;
  const descendingDiscount = DiscountRates.sort(compareAmount);

  const discountRate =
    descendingDiscount.find((discount) => discount.amount <= amount)?.rate ?? 0;

  const regionalTaxRate =
    Regions.find((region) => region.code === code)?.taxRate ?? 0;
  //parseFloat((amount * discountRate).toFixed(2)); can be move to utils
  const discountedAmount = parseFloat((amount * discountRate).toFixed(2));
  const regionTaxedAmount = parseFloat((amount * regionalTaxRate).toFixed(2));

  return {
    quantity,
    amount,
    subtotal: amount,
    discountRate: `${(discountRate * 100).toFixed(2)}%`,
    discountedAmount,
    regionTaxRate: `${(regionalTaxRate * 100).toFixed(2)}%`,
    regionTaxedAmount,
    total: parseFloat(
      (amount - discountedAmount + regionTaxedAmount).toFixed(2)
    ),
  };
};
