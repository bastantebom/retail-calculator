type DiscountRate = {
  amount: number;
  rate: number;
};

export const DiscountRates: Array<DiscountRate> = [
  { amount: 1000, rate: 0.03 },
  { amount: 5000, rate: 0.05 },
  { amount: 7000, rate: 0.07 },
  { amount: 10000, rate: 0.1 },
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
