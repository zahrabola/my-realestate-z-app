import React from "react"
import Back from "../common/Back";
import img from "../images/1.jpg";
import img2 from "../images/2.jpg";
import Heading from "../common/Heading";
import Image from 'react-bootstrap/Image';
import "./about.css";
const About = () => {
  return (
    <div>
      <section className="about">
        <Back name="About Us" title="About Us - Who we are?" cover={img} />
        <div className="container flex mtop">
          <div className="left-about row">
            <Heading
              title="Our Agency Story"
              subtitle=" Check out our country story and work process"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <button className="btn-search sub-btn">More About Us</button>
          </div>
          <div className="right-about row">
          <Image src={img2}  responsive="true" />
              </div>
          </div>
      </section>
    </div>
  );
};

export default About 