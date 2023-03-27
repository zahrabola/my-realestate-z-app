import React from "react"
import Back from "../common/Back";
import FeaturedCard from "../home/featured/FeaturedCard";
import img3 from "../images/3.jpg";


const Services = () => {
    return(
        <div>
        <section className="services mb">
        <Back name="Services" title="Services -All Services" cover={img3} />
        <div className="featured container">
            <FeaturedCard />
        </div>
        </section>
        </div>
    )
}

export default Services