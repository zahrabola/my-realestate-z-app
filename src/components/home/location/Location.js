import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import Image from 'react-bootstrap/Image'
import "./location.css"
const Location = () => {
    return (
        <div>
            <section className="location padding">
                <Heading title="Explore By Location" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
                <div className="content grid3 mtop">
                    {location.map((item,i) => (
                           <div className="box" key={i}>
                            <Image src={item.cover} alt="/" responsive="true"  />
                           <div className="location-overlay">
                               <h5>{item.name}</h5>
                               <p>
                                   <label>{item.Villas}</label>
                                   <label>{item.Offices}</label>
                                   <label>{item.Apartments}</label>
                               </p>
                           </div>
                       </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Location