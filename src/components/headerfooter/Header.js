
import {  FaBuilding, FaTimes, FaHouseUser,FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {nav} from "../data/Data";
const Header = () => {
    return (

            <header>
              <div className="nav">
                <div className="header-container">
                    <div className="logo">
                        <div className="icon">
                            <FaBuilding/>
                            <FaHouseUser />
                        </div>          
                    </div>                   
                 </div>
                 <div className="nav-header">
                    <ul>
                        {nav.map((navlist, index) => (
                            <li key={index}>
                                <Link to={navlist}>{navlist.text}</Link>
                            </li>
                        ))}
                    </ul>
                 </div>
                 <div className="container-btn">
                  <button className="singin-btn">
                    Sign in  
                    <FaSignInAlt />
                  </button>
                 </div>
                 {/*<div className="toggle-btn">
                    <button className="tg-btn">
                        <FaTimes/>
                    </button>
                 </div> */}
                 

                </div>
            </header>
           
       
    )
}


export default Header;


