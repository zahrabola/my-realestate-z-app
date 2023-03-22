import React from "react"
import Heading from "../../common/Heading"
import Image from 'react-bootstrap/Image'
import { team } from "../../data/Data"
import "./team.css"
const Team = () => {
  return (
    <div>
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Featured Agents"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <div className="content mtop grid3">
            {team.map((value, i) => (
              <div className="box" key={i}>
                <button className="cross-logo"> Listings</button>
                <div className="details">
                  <div className="img-team">
                    <Image src={value.cover} alt="/" responsive="true" />
                    <i className="fa fa-circle-check"></i>
                  </div>
                  <div className="icon icon-logo">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <label>{value.address}</label>
                  <h4>{value.name}</h4>
                  <ul>
                    {value.icon.map((icon, i) => (
                      <li key={i}>{icon}</li>
                    ))}
                  </ul>
                  <div className="button-tem flex">
                    <button className="icon-logo cross-logo">
                      <i className="fa fa-envelope"></i>
                      Message
                    </button>
                    <button className="icon-logo cross-logo">
                      <i className="fa fa-phone"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team