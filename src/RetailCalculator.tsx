import { useState } from "react";
import { Quantity, ItemPrice, Region } from "./component";
import "./css/retail-calculator.css";
import { Summary } from "./component/Summary";
import { SummaryDetails } from "./helper";

function RetailCalculator() {
  const [price, setPrice] = useState(0);
  const [code, setCode] = useState("");
  const handleQuantityChange = (increment: boolean) => {
    if (increment) console.log("increment");
    else console.log("decrement");
  };

  const handlePriceChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPrice(Number(e.currentTarget.value));
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCode(e.currentTarget.value);
  };

  const summary: SummaryDetails = {
    quantity: 1,
    amount: 1000,
    subtotal: 1000,
    discountRate: "3%",
    discountedAmount: 30,
    regionTaxRate: "8%",
    regionTaxedAmount: 77.6,
    total: 1047.6,
  };

  return (
    <>
      <div>
        <div className="form p-10">
          <h1 className="text-4xl underline">Form</h1>
          <Quantity quantity={0} onQuantityChange={handleQuantityChange} />
          <ItemPrice price={price} onPriceChange={handlePriceChange} />
          <Region code={code} onRegionChange={handleRegionChange} />
        </div>

        <div className="details p-10 border-t-8">
          <h1 className="text-4xl underline">Summary</h1>
          <Summary summaryDetails={summary} />
        </div>
      </div>
    </>
  );
}

export default RetailCalculator;
