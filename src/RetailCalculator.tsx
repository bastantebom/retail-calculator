import { Quantity } from "./component/Quantity";
import "./css/retail-calculator.css";

function RetailCalculator() {
  const handleQuantityChange = (increment: boolean) => {
    if (increment) console.log("increment");
    else console.log("decrement");
  };

  return (
    <>
      <div>
        <div className="form">
          <h1>Form</h1>
          <Quantity quantity={0} quantityChange={handleQuantityChange} />
        </div>
        <div className="details">
          <h1>Details</h1>
        </div>
      </div>
    </>
  );
}

export default RetailCalculator;
