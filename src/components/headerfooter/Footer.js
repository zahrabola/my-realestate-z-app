import { footer} from "../data/Data"
import React from "react"
import "./footer.css"
const Footer = () => {
  return (
    <div>
      <section className="footer-contect">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do you have any questions?</h1>
              <p>We'll help you grow your career.</p>
            </div>
            <div className="container-btn ">
              <button className="singin-btn">Contact us today</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <div className="icon icon-logo">
                {/*  <FaBuilding size={28}/>
                            <FaHouseUser size={28}/>
                            <FaBeer size={25} />
                            */}
                <i className="fa fa-home"></i>
                <i className="fa fa-building"></i>
              </div>
              <h2>Do you need help with anything</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>
              <div className="input flex">
                <input type="text" placeholder="Email address" />
                <button className="btn-search sub-btn">Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((value, i) => (
            <div className="box" key={i}>
              <h3>{value.title}</h3>
              <ul>
                {value.text.map((item, i) => (
                  <li key={i}>{item.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <small className="me">Coded by Zahra Olanrewaju</small>
    </div>
  );
};
export default Footer;