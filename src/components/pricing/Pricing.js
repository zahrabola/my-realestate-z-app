import React from "react"
import Back from "../common/Back";
import img5 from "../images/5.jpg";
import PriceCard from "../home/price/PriceCard";
import "../home/price/price.css";

const Pricing = () => {
  return (
    <div>
      <section className="pricing mb">
        <Back
          name="30 days money back guarantee"
          title="No Extra Fees. Friendly Support"
          cover={img5}
        />
        <div className="price container">
          <PriceCard />
        </div>
      </section>
    </div>
  );
};
export default Pricing;