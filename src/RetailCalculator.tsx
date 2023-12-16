import { useState } from "react";
import { Quantity, ItemPrice, Region } from "./component";
import "./css/retail-calculator.css";

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

  return (
    <>
      <div>
        <div className="form">
          <h1>Form</h1>
          <Quantity quantity={0} onQuantityChange={handleQuantityChange} />
          <ItemPrice price={price} onPriceChange={handlePriceChange} />
          <Region code={code} onRegionChange={handleRegionChange} />
        </div>
        <hr />
        <div className="details">
          <h1>Summary</h1>
        </div>
      </div>
    </>
  );
}

export default RetailCalculator;
