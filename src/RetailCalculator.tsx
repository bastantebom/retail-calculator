import { ItemPrice, Quantity, Region, Summary } from "./component";
import "./css/retail-calculator.css";
import { useRetailCalculator } from "./useRetailCalculator";

function RetailCalculator() {
  const {
    data: { summary, price, code, quantity },
    operations: { handlePriceChange, handleRegionChange, handleQuantityChange },
  } = useRetailCalculator();
  return (
    <>
      <div>
        <div className="form p-10 space-y-4">
          <h1 className="text-4xl underline">Form</h1>
          <Quantity
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
          />
          <ItemPrice
            price={parseFloat(price)}
            onPriceChange={handlePriceChange}
          />
          <Region code={code} onRegionChange={handleRegionChange} />
          {/* <button onClick={handleCalculate} className="btn p-2 border">
            Calculate
          </button> */}
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
