import { list } from "../../data/Data";
import { useState } from "react";
import Heart from "react-heart";
import Image from 'react-bootstrap/Image'

const RecentCard = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((value, i) => {
          const { cover, category, location, name, price, type } = value;

          return (
            <div className="box box-recent shadow" key={i}>
              <div className="image-recent">
              <Image src={cover} alt="/" responsive="true" 
                  id="img-recent"
                  className="img-fluid shadow-4" />
              </div>
              <div className="text">
                <div className="recent-category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <div style={{ width: "2rem" }}>
                    <Heart
                      isActive={active}
                      onClick={() => setActive(!active)}
                    />
                  </div>
                </div>
                <h4>{name}</h4>
                <button
                  className="icon-recent"
                  style={{ padding: 8, background: "transparent", border: 0 }}
                >
                  <i className="fa fa-map-marker"></i>
                </button>{" "}
                {location}
              </div>

              <div className="flex btn-recent">
                <button className="btn-search cross-logo ">{price}</button>
                <label htmlFor="">/sqft</label>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
