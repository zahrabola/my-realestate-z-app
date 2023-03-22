import { price } from "../../data/Data"
import React from "react"

const PriceCard = () => {
  return (
    <div className="content flex mtop">
      {price.map((item, i) => (
        <div className="box shadow" key={i}>
          <div className="topbtn">
            <h2 className="bestbtn">{item.best}</h2>
          </div>
          <h3>{item.plan}</h3>
          <h1>
            <span>£{item.price}</span>
          </h1>
          <p>{item.ptext}</p>

          <ul>
            {item.list.map((value) => {
              const { icon, text, change } = value;
              return (
                <li>
                  <label
                    style={{
                      background:
                        change === "color" ? "#dc35451f" : "#27ae601f",
                      color: change === "color" ? "#dc3848" : "#27ae60",
                    }}
                  >
                    {icon}
                  </label>
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
          <button
            className="btn5"
            style={{
              background: item.plan === "Standard" ? "rgb(59, 112, 109)" : "#fff",
              color: item.plan === "Standard" ? "#fff" : "rgb(59, 112, 109)",
            }}
          >
            start {item.plan}
          </button>
        </div>
      ))}
    </div>
  );
};

 export default PriceCard