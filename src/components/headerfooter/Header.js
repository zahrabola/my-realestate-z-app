
//import {FaBuilding} from "react-icons/fa";
///import {FaHouseUser} from "react-icons/fa"
//import {FaSignInAlt} from "react-icons/fa"
//import { FaBeer } from 'react-icons/fa';
import { useState } from "react";
import { Link } from "react-router-dom";
import {nav} from "../data/Data";
import "./header.css"

const Header = () => {
  const [listNav, setListNav] = useState(false);

  return (
    <div className="heardes-info">
      <div className="nav container flex    ">
        <div className="header-container">
          <div className="logo">
            <div className="icon icon-logo">
              {/*  <FaBuilding size={28}/>
                            <FaHouseUser size={28}/>
                            <FaBeer size={25} />
                            */}
              <i className="fa fa-home"></i>
              <i className="fa fa-building"></i>
            </div>
          </div>
        </div>
        <div className="nav-header">
          <ul className={listNav ? "small" : "flex"}>
            {nav.map((navlist, index) => (
              <li key={index}>
                <Link to={navlist}>{navlist.text}</Link>
              </li>
            ))}
            <div className="container-btn ">
              <button className="singin-btn">
                Sign in
                {/* <FaSignInAlt /> */}
              </button>
            </div>
          </ul>
        </div>
        <div className="container-toggle">
          <div className="toggle ">
            <button
              className="icon-logo cross-logo"
              onClick={() => setListNav(!listNav)}
            >
              {listNav ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header;


